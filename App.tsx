
import React, { useState } from 'react';
import { QUESTIONS, RESULTS } from './constants';
import { ServiceCategory, ScoreBoard, LeadData } from './types';
import { Layout } from './components/Layout';
import { StepIntro } from './components/StepIntro';
import { StepQuestion } from './components/StepQuestion';
import { StepForm } from './components/StepForm';
import { StepResult } from './components/StepResult';

const App: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<number, string | string[]>>({});
  const [leadData, setLeadData] = useState<LeadData | null>(null);

  const calculateScores = (): { primary: ServiceCategory; secondary?: ServiceCategory } => {
    const scores: ScoreBoard = {
      [ServiceCategory.Desarrollo]: 0,
      [ServiceCategory.Integracion]: 0,
      [ServiceCategory.Soporte]: 0,
      [ServiceCategory.Soluciones]: 0,
    };

    // Index adjustment because questions now start at step 2
    const s1 = answers[2] as string;
    if (s1 === 'A') scores[ServiceCategory.Desarrollo] += 3;
    if (s1 === 'B') { scores[ServiceCategory.Desarrollo] += 2; scores[ServiceCategory.Soluciones] += 1; }
    if (s1 === 'C') scores[ServiceCategory.Soporte] += 3;
    if (s1 === 'D') scores[ServiceCategory.Integracion] += 3;

    const s2 = answers[3] as string;
    if (s2 === 'A') scores[ServiceCategory.Integracion] += 3;
    if (s2 === 'B') { scores[ServiceCategory.Desarrollo] += 2; scores[ServiceCategory.Soluciones] += 1; }
    if (s2 === 'C') scores[ServiceCategory.Soporte] += 3;
    if (s2 === 'D') scores[ServiceCategory.Soluciones] += 3;

    const s3 = (answers[4] || []) as string[];
    if (s3.includes('erp') || s3.includes('crm')) scores[ServiceCategory.Integracion] += 2;
    if (s3.includes('vtex')) scores[ServiceCategory.Soluciones] += 2;
    if (s3.includes('nothing')) scores[ServiceCategory.Desarrollo] += 2;

    const s4 = answers[5] as string;
    const sortedEntries = Object.entries(scores).sort((a, b) => b[1] - a[1]);
    const currentWinner = sortedEntries[0][0] as ServiceCategory;
    if (s4 === 'A' || s4 === 'B') scores[currentWinner] += 1;

    const finalSorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
    const primary = finalSorted[0][0] as ServiceCategory;
    let secondary: ServiceCategory | undefined = undefined;
    if (finalSorted[1] && (finalSorted[0][1] - finalSorted[1][1] <= 1)) {
        secondary = finalSorted[1][0] as ServiceCategory;
    }
    return { primary, secondary };
  };

  const handleNext = (answer: string | string[]) => {
    setAnswers(prev => ({ ...prev, [currentStep]: answer }));
    setCurrentStep(prev => prev + 1);
  };

  const handleBack = () => {
    setCurrentStep(prev => Math.max(0, prev - 1));
  };

  const renderStep = () => {
    if (currentStep === 0) return <StepIntro onStart={() => setCurrentStep(1)} />;
    
    if (currentStep === 1) {
      return (
        <StepForm
          onSubmit={(data) => {
            setLeadData(data);
            setCurrentStep(2);
          }}
          onBack={handleBack}
        />
      );
    }

    if (currentStep >= 2 && currentStep <= 5) {
      return (
        <StepQuestion
          question={QUESTIONS[currentStep - 2]}
          onNext={handleNext}
          onBack={handleBack}
          currentStep={currentStep - 1} // visual progress 1 to 4
          totalSteps={4}
        />
      );
    }

    if (currentStep === 6) {
      const { primary, secondary } = calculateScores();
      return <StepResult primary={primary} secondary={secondary} leadData={leadData!} />;
    }

    return null;
  };

  return (
    <Layout currentStep={currentStep > 1 ? currentStep - 1 : 0} totalSteps={4}>
      {renderStep()}
    </Layout>
  );
};

export default App;
