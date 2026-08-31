import { useState } from 'react';
import { ModuleStepper } from '../../components/Stepper';
import Field, { RadioGroup, SelectInput } from '../../components/Field';
import {
  Panel,
  SectionTitle,
  BulletList,
  Badge,
  PrimaryButton,
  SecondaryButton,
  AnalyzingScreen,
} from '../../components/Panel';
import theme from '../../theme';
import {
  hostingOptions,
  userCountOptions,
  budgetOptions,
  gapsByProfile,
  scalabilityPlans,
  calculateReadinessScore,
  getScoreLabel,
} from './data';

const STEPS = ['Intake', 'Report'];

export default function InfrastructureFlow() {
  const [step, setStep] = useState(0);
  const [intake, setIntake] = useState({
    userCount: 'under1k',
    hosting: 'none',
    budget: 'under25k',
  });
  const [analyzing, setAnalyzing] = useState(false);

  const score = calculateReadinessScore(intake.hosting, intake.userCount);
  const scoreInfo = getScoreLabel(score);
  const gaps = gapsByProfile[intake.hosting] || gapsByProfile.none;
  const plan = scalabilityPlans[intake.hosting] || scalabilityPlans.none;

  const generateReport = () => {
    setAnalyzing(true);
    setTimeout(() => {
      setAnalyzing(false);
      setStep(1);
    }, 1800);
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
        Infrastructure Readiness
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
        Evaluate your hosting setup, scalability gaps, and infrastructure roadmap.
      </p>
      <Panel>
        <Field label="Expected user count (12 months)">
          <RadioGroup
            value={intake.userCount}
            onChange={(v) => setIntake({ ...intake, userCount: v })}
            options={userCountOptions}
          />
        </Field>
        <Field label="Current hosting setup">
          <RadioGroup
            value={intake.hosting}
            onChange={(v) => setIntake({ ...intake, hosting: v })}
            options={hostingOptions}
          />
        </Field>
        <Field label="Monthly infrastructure budget">
          <SelectInput
            value={intake.budget}
            onChange={(v) => setIntake({ ...intake, budget: v })}
            options={budgetOptions}
          />
        </Field>
        <PrimaryButton onClick={generateReport}>
          Assess readiness →
        </PrimaryButton>
      </Panel>
    </>
  );

  if (analyzing) {
    return (
      <>
        <ModuleStepper steps={STEPS} current={0} />
        <AnalyzingScreen title="Evaluating infrastructure readiness…" />
      </>
    );
  }

  const renderReport = () => {
    return (
      <>
        <ModuleStepper steps={STEPS} current={1} />
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            marginBottom: theme.spacing.xl,
            flexWrap: 'wrap',
            gap: theme.spacing.md,
          }}
        >
          <h1
            style={{
              fontFamily: theme.fonts.headline,
              fontSize: 28,
              color: theme.colors.ink,
              margin: 0,
            }}
          >
            Infrastructure Report
          </h1>
          <SecondaryButton onClick={() => setStep(0)}>← Re-run check</SecondaryButton>
        </div>

        <Panel style={{ marginBottom: theme.spacing.lg }}>
          <SectionTitle>Readiness score</SectionTitle>
          <div style={{ display: 'flex', alignItems: 'center', gap: theme.spacing.xl }}>
            <div
              style={{
                fontFamily: theme.fonts.headline,
                fontSize: 64,
                color: scoreInfo.color,
                lineHeight: 1,
              }}
            >
              {score}
            </div>
            <div>
              <Badge
                label={scoreInfo.label}
                variant={score >= 70 ? 'navy' : score >= 45 ? 'ochre' : 'required'}
              />
              <p
                style={{
                  fontFamily: theme.fonts.body,
                  fontSize: 13,
                  color: theme.colors.softInk,
                  margin: `${theme.spacing.sm}px 0 0 0`,
                  maxWidth: 300,
                }}
              >
                Out of 100 — based on hosting maturity and expected scale.
              </p>
            </div>
          </div>
          <div
            style={{
              marginTop: theme.spacing.lg,
              height: 8,
              background: theme.colors.border,
              position: 'relative',
            }}
          >
            <div
              style={{
                height: '100%',
                width: `${score}%`,
                background: scoreInfo.color,
                transition: 'width 0.6s ease',
              }}
            />
          </div>
        </Panel>

        <Panel style={{ marginBottom: theme.spacing.lg }}>
          <SectionTitle>Infrastructure gaps</SectionTitle>
          <BulletList items={gaps} />
        </Panel>

        <Panel>
          <SectionTitle>3-step scalability plan</SectionTitle>
          <div style={{ display: 'flex', flexDirection: 'column', gap: theme.spacing.md }}>
            {plan.map((item) => (
              <div
                key={item.step}
                style={{
                  display: 'flex',
                  gap: theme.spacing.md,
                  padding: theme.spacing.md,
                  border: `1px solid ${theme.colors.border}`,
                }}
              >
                <div
                  style={{
                    width: 32,
                    height: 32,
                    flexShrink: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: theme.colors.accent,
                    color: '#FFFFFF',
                    fontFamily: theme.fonts.headline,
                    fontSize: 14,
                  }}
                >
                  {item.step}
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: theme.fonts.body,
                      fontSize: 14,
                      fontWeight: 600,
                      color: theme.colors.ink,
                      marginBottom: 4,
                    }}
                  >
                    {item.title}
                  </div>
                  <div
                    style={{
                      fontFamily: theme.fonts.body,
                      fontSize: 13,
                      color: theme.colors.softInk,
                      lineHeight: 1.5,
                    }}
                  >
                    {item.detail}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Panel>
      </>
    );
  };

  return (
    <div>
      {step === 0 && renderIntake()}
      {step === 1 && renderReport()}
    </div>
  );
}
