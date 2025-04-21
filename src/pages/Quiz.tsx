import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import QuizForm from "@/components/quiz/QuizForm";
import { QuizData } from "@/utils/types";
import quizIntegrationService from "@/utils/quizIntegrationService";

export default function Quiz() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<QuizData>({
    gender: '',
    age: '',
    diet: '',
    stressLevel: '',
    exerciseFrequency: '',
    sleepQuality: '',
    symptoms: [],
    goal: ''
  });

  const handleFormChange = (data: any) => {
    setFormData(prevData => {
      // Handle nested property merging for diet and other objects
      const newData = { ...prevData };
      
      // Handle special case for UserInfoStep that uses a userData wrapper
      if (data.name || data.age || data.gender || data.email) {
        Object.assign(newData, data);
      } 
      // Handle nested objects like diet
      else if (data.diet) {
        newData.diet = { ...newData.diet, ...data.diet };
      } 
      // Handle all other cases
      else {
        Object.assign(newData, data);
      }
      
      console.log("Updated form data:", newData);
      return newData;
    });
  };

  const handleNext = () => {
    console.log("Moving to next step:", step + 1);
    setStep(prevStep => prevStep + 1);
  };

  const handleBack = () => {
    console.log("Moving to previous step:", step - 1);
    setStep(prevStep => prevStep - 1);
  };

  const handleSubmit = () => {
    // Process the quiz data before submission
    console.log("Quiz submitted with data:", formData);
    
    // Capture the start time for performance tracking
    const startTime = performance.now();

    try {
      // Store quiz data in session storage
      sessionStorage.setItem('quizData', JSON.stringify(formData));

      // Call the analytics service to track quiz completion
      if (window.analyticsService) {
        window.analyticsService.trackQuizCompletion(formData, Date.now());
      }

      // Translate any remaining French terms if needed
      const translatedData = quizIntegrationService.enrichQuizData(formData);
      console.log("Enriched quiz data:", translatedData);

      // Generate personalized recommendations
      const recommendations = quizIntegrationService.getPersonalizedRecommendations(translatedData);
      console.log("Generated recommendations:", recommendations);

      // Store recommendations in session storage
      sessionStorage.setItem('quizRecommendations', JSON.stringify(recommendations));

      // Calculate the processing time for performance metrics
      const endTime = performance.now();
      const processingTime = endTime - startTime;
      console.log(`Recommendation processing completed in ${processingTime.toFixed(2)}ms`);

      // Navigate to results page
      navigate('/quiz-results');
    } catch (error) {
      console.error("Error processing quiz submission:", error);
      // Display error message to user
      alert("We encountered an error processing your responses. Please try again.");
    }
  };

  return (
    <div className="container mx-auto px-4 pt-8 pb-16 max-w-2xl min-h-screen">
      <div className="flex flex-col space-y-8">
        <div className="text-center pb-6">
          <h1 className="text-3xl font-bold tracking-tight">Discover Your Nutritional Profile</h1>
          <p className="text-lg mt-2 mb-6 text-muted-foreground">
            Take our nutritional assessment and receive personalized recommendations based on your unique needs.
          </p>
        </div>

        <div className="bg-card rounded-lg border shadow-sm p-6">
          <QuizForm
            step={step}
            formData={formData}
            onChange={handleFormChange}
            onNext={handleNext}
            onBack={handleBack}
            onSubmit={handleSubmit}
          />
        </div>

        <div className="text-center text-sm text-muted-foreground">
          Your data is kept private and secure. We use it only to generate personalized recommendations.
        </div>
      </div>
    </div>
  );
}