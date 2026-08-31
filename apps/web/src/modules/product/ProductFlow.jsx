import { useState } from 'react';
import { ModuleStepper } from '../../components/Stepper';
import Field, { TextInput, RadioGroup } from '../../components/Field';
import {
  Panel,
  SectionTitle,
  BulletList,
  PrimaryButton,
  SecondaryButton,
  AnalyzingScreen,
} from '../../components/Panel';
import theme from '../../theme';
import {
  productStages,
  validationQuestions,
  swotByStage,
  marketBlockers,
  researchGuidance,
} from './data';

const STEPS = ['Intake', 'Validation', 'Report'];

export default function ProductFlow() {
  const [step, setStep] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [intake, setIntake] = useState({ stage: 'proposed', description: '' });
  const [answers, setAnswers] = useState({});
  const [analyzing, setAnalyzing] = useState(false);

  const swot = swotByStage[intake.stage] || swotByStage.proposed;
  const currentQ = validationQuestions[questionIndex];

  const finishQuestions = () => {
    setAnalyzing(true);
    setTimeout(() => {
      setAnalyzing(false);
      setStep(2);
    }, 2000);
  };

  const renderIntake = () => (
    <>
      <ModuleStepper steps={STEPS} current={0} />
      <h1
        style={{
          fontFamily: theme.fonts.headline,
          fontSize: 28,
          color: theme.colors.ink,
          margin: `0 0 ${theme.spacing.sm}px 0`,
        }}
      >
        Product & Service Management
      </h1>
      <p
        style={{
          fontFamily: theme.fonts.body,
          fontSize: 15,
          color: theme.colors.softInk,
          margin: `0 0 ${theme.spacing.xl}px 0`,
          lineHeight: 1.6,
        }}
      >
        Assess your product validation, market fit signals, and strategic positioning.
      </p>
      <Panel>
        <Field label="Product stage">
          <RadioGroup
            value={intake.stage}
            onChange={(v) => setIntake({ ...intake, stage: v })}
            options={productStages}
          />
        </Field>
        <Field label="Short product description">
          <TextInput
            value={intake.description}
            onChange={(v) => setIntake({ ...intake, description: v })}
            placeholder="What does your product do and who is it for?"
            multiline
            rows={3}
          />
        </Field>
        <PrimaryButton
          onClick={() => setStep(1)}
          disabled={!intake.description.trim()}
        >
          Continue →
        </PrimaryButton>
      </Panel>
    </>
  );

  const renderValidation = () => {
    if (analyzing) {
      return (
        <>
          <ModuleStepper steps={STEPS} current={1} />
          <AnalyzingScreen title="Building your product assessment…" />
        </>
      );
    }

    return (
      <>
        <ModuleStepper steps={STEPS} current={1} />
        <div style={{ marginBottom: theme.spacing.lg }}>
          <span
            style={{
              fontFamily: theme.fonts.body,
              fontSize: 12,
              color: theme.colors.muted,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
            }}
          >
            Question {questionIndex + 1} of {validationQuestions.length}
          </span>
          <h2
            style={{
              fontFamily: theme.fonts.headline,
              fontSize: 22,
              color: theme.colors.ink,
              margin: `${theme.spacing.sm}px 0 0 0`,
            }}
          >
            {currentQ.question}
          </h2>
        </div>
        <Panel>
          <RadioGroup
            value={answers[currentQ.id] || ''}
            onChange={(v) => setAnswers({ ...answers, [currentQ.id]: v })}
            options={currentQ.options}
          />
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: theme.spacing.xl,
            }}
          >
            <SecondaryButton
              onClick={() => {
                if (questionIndex === 0) setStep(0);
                else setQuestionIndex(questionIndex - 1);
              }}
            >
              ← Back
            </SecondaryButton>
            <PrimaryButton
              onClick={() => {
                if (questionIndex === validationQuestions.length - 1) finishQuestions();
                else setQuestionIndex(questionIndex + 1);
              }}
              disabled={!answers[currentQ.id]}
            >
              {questionIndex === validationQuestions.length - 1 ? 'See report' : 'Next →'}
            </PrimaryButton>
          </div>
        </Panel>
      </>
    );
  };

  const renderReport = () => (
    <>
      <ModuleStepper steps={STEPS} current={2} />
      <h1
        style={{
          fontFamily: theme.fonts.headline,
          fontSize: 28,
          color: theme.colors.ink,
          margin: `0 0 ${theme.spacing.xl}px 0`,
        }}
      >
        Product Assessment Report
      </h1>

      <Panel style={{ marginBottom: theme.spacing.lg }}>
        <SectionTitle>SWOT Analysis</SectionTitle>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 1,
            background: theme.colors.border,
            border: `1px solid ${theme.colors.border}`,
          }}
        >
          {[
            { title: 'Strengths', items: swot.strengths, color: theme.colors.success },
            { title: 'Weaknesses', items: swot.weaknesses, color: theme.colors.accentDark },
            { title: 'Opportunities', items: swot.opportunities, color: theme.colors.navy },
            { title: 'Threats', items: swot.threats, color: theme.colors.ochre },
          ].map((quad) => (
            <div
              key={quad.title}
              style={{
                background: theme.colors.panel,
                padding: theme.spacing.md,
                minHeight: 140,
              }}
            >
              <div
                style={{
                  fontFamily: theme.fonts.headline,
                  fontSize: 12,
                  color: quad.color,
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                  marginBottom: theme.spacing.sm,
                }}
              >
                {quad.title}
              </div>
              <BulletList items={quad.items} />
            </div>
          ))}
        </div>
      </Panel>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: theme.spacing.lg,
        }}
      >
        <Panel>
          <SectionTitle>Market blockers</SectionTitle>
          <BulletList items={marketBlockers} />
        </Panel>
        <Panel>
          <SectionTitle>Market research guidance</SectionTitle>
          <BulletList items={researchGuidance} />
        </Panel>
      </div>
    </>
  );

  return (
    <div>
      {step === 0 && renderIntake()}
      {step === 1 && renderValidation()}
      {step === 2 && renderReport()}
    </div>
  );
}
