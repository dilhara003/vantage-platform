import { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import Stepper from '../../components/Stepper';
import Field, { TextInput, SelectInput } from '../../components/Field';
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
  literacyQuestions,
  competitors,
  planForItems,
  budgetPlans,
  timeSlots,
  getClassification,
} from './data';

const CHART_COLORS = [
  theme.colors.accent,
  theme.colors.navy,
  theme.colors.ochre,
  theme.colors.softInk,
  theme.colors.muted,
];

export default function MarketingFlow() {
  const [step, setStep] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [intake, setIntake] = useState({
    productName: '',
    category: 'saas',
    targetAudience: '',
    monthlyBudget: '100000',
  });
  const [answers, setAnswers] = useState({});
  const [analyzing, setAnalyzing] = useState(false);
  const [scheduledSlot, setScheduledSlot] = useState(null);

  const classification = getClassification(answers);
  const budget = parseInt(intake.monthlyBudget, 10) || 100000;
  const scaledBudget = budgetPlans.map((b) => ({
    ...b,
    amount_lkr: Math.round((b.pct / 100) * budget),
  }));

  const handleAnswer = (questionId, option) => {
    setAnswers((prev) => ({ ...prev, [questionId]: option.score }));
  };

  const startAssessment = () => {
    if (!intake.productName.trim()) return;
    setStep(1);
    setQuestionIndex(0);
  };

  const finishAssessment = () => {
    setAnalyzing(true);
    setTimeout(() => {
      setAnalyzing(false);
      setStep(2);
    }, 2200);
  };

  const currentQ = literacyQuestions[questionIndex];
  const currentAnswer = answers[currentQ?.id];

  useEffect(() => {
    if (step === 1 && questionIndex >= literacyQuestions.length && !analyzing) {
      finishAssessment();
    }
  }, [step, questionIndex, analyzing]);

  const renderIntake = () => (
    <>
      <Stepper current={0} />
      <h1
        style={{
          fontFamily: theme.fonts.headline,
          fontSize: 28,
          color: theme.colors.ink,
          margin: `0 0 ${theme.spacing.sm}px 0`,
        }}
      >
        Marketing Assessment
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
        Tell us about your product and we&apos;ll evaluate your technical literacy readiness,
        competitive positioning, and channel strategy.
      </p>
      <Panel>
        <Field label="Product name">
          <TextInput
            value={intake.productName}
            onChange={(v) => setIntake({ ...intake, productName: v })}
            placeholder="e.g. LankaPay Merchant"
          />
        </Field>
        <Field label="Product category">
          <SelectInput
            value={intake.category}
            onChange={(v) => setIntake({ ...intake, category: v })}
            options={[
              { value: 'saas', label: 'SaaS / Software' },
              { value: 'ecommerce', label: 'E-commerce' },
              { value: 'fintech', label: 'Fintech' },
              { value: 'marketplace', label: 'Marketplace' },
              { value: 'other', label: 'Other' },
            ]}
          />
        </Field>
        <Field label="Target audience" hint="Who are you trying to reach?">
          <TextInput
            value={intake.targetAudience}
            onChange={(v) => setIntake({ ...intake, targetAudience: v })}
            placeholder="e.g. Colombo-based small business owners"
            multiline
            rows={2}
          />
        </Field>
        <Field label="Monthly marketing budget (LKR)">
          <SelectInput
            value={intake.monthlyBudget}
            onChange={(v) => setIntake({ ...intake, monthlyBudget: v })}
            options={[
              { value: '50000', label: 'LKR 50,000' },
              { value: '100000', label: 'LKR 100,000' },
              { value: '200000', label: 'LKR 200,000' },
              { value: '500000', label: 'LKR 500,000' },
            ]}
          />
        </Field>
        <PrimaryButton
          onClick={startAssessment}
          disabled={!intake.productName.trim()}
        >
          Start assessment →
        </PrimaryButton>
      </Panel>
    </>
  );

  const renderAssessment = () => {
    if (analyzing) {
      return (
        <>
          <Stepper current={1} />
          <AnalyzingScreen title="Analyzing your marketing readiness…" />
        </>
      );
    }

    if (questionIndex >= literacyQuestions.length) {
      return (
        <>
          <Stepper current={1} />
          <AnalyzingScreen />
        </>
      );
    }

    return (
      <>
        <Stepper current={1} />
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
            Question {questionIndex + 1} of {literacyQuestions.length}
          </span>
          <h2
            style={{
              fontFamily: theme.fonts.headline,
              fontSize: 22,
              color: theme.colors.ink,
              margin: `${theme.spacing.sm}px 0 0 0`,
              lineHeight: 1.3,
            }}
          >
            {currentQ.question}
          </h2>
        </div>
        <Panel>
          <div style={{ display: 'flex', flexDirection: 'column', gap: theme.spacing.sm }}>
            {currentQ.options.map((opt) => {
              const selected = currentAnswer === opt.score;
              return (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => handleAnswer(currentQ.id, opt)}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: theme.spacing.md,
                    padding: theme.spacing.md,
                    background: selected ? '#FDECEA' : theme.colors.panel,
                    border: `1px solid ${selected ? theme.colors.accent : theme.colors.border}`,
                    cursor: 'pointer',
                    textAlign: 'left',
                    width: '100%',
                  }}
                >
                  <span
                    style={{
                      width: 16,
                      height: 16,
                      flexShrink: 0,
                      marginTop: 2,
                      border: `2px solid ${selected ? theme.colors.accent : theme.colors.border}`,
                      background: selected ? theme.colors.accent : 'transparent',
                    }}
                  />
                  <span
                    style={{
                      fontFamily: theme.fonts.body,
                      fontSize: 14,
                      color: theme.colors.ink,
                      lineHeight: 1.5,
                    }}
                  >
                    {opt.label}
                  </span>
                </button>
              );
            })}
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: theme.spacing.xl,
            }}
          >
            <SecondaryButton
              onClick={() => {
                if (questionIndex === 0) {
                  setStep(0);
                } else {
                  setQuestionIndex(questionIndex - 1);
                }
              }}
            >
              ← Back
            </SecondaryButton>
            <PrimaryButton
              onClick={() => setQuestionIndex(questionIndex + 1)}
              disabled={currentAnswer === undefined}
            >
              {questionIndex === literacyQuestions.length - 1 ? 'See report' : 'Next →'}
            </PrimaryButton>
          </div>
        </Panel>
      </>
    );
  };

  const renderReport = () => (
    <>
      <Stepper current={2} />
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
        <div>
          <h1
            style={{
              fontFamily: theme.fonts.headline,
              fontSize: 28,
              color: theme.colors.ink,
              margin: 0,
            }}
          >
            Marketing Report
          </h1>
          <p
            style={{
              fontFamily: theme.fonts.body,
              fontSize: 14,
              color: theme.colors.softInk,
              margin: `${theme.spacing.sm}px 0 0 0`,
            }}
          >
            {intake.productName} · {intake.category.toUpperCase()}
          </p>
        </div>
        <Badge label={classification.label} variant={classification.variant} />
      </div>

      <Panel style={{ marginBottom: theme.spacing.lg }}>
        <SectionTitle>Classification</SectionTitle>
        <p
          style={{
            fontFamily: theme.fonts.body,
            fontSize: 14,
            color: theme.colors.softInk,
            lineHeight: 1.6,
            margin: 0,
          }}
        >
          {classification.description}
        </p>
      </Panel>

      <Panel style={{ marginBottom: theme.spacing.lg }}>
        <SectionTitle>Competitive landscape</SectionTitle>
        <div style={{ display: 'flex', flexDirection: 'column', gap: theme.spacing.md }}>
          {competitors.map((c) => (
            <div
              key={c.name}
              style={{
                padding: theme.spacing.md,
                border: `1px solid ${theme.colors.border}`,
              }}
            >
              <div
                style={{
                  fontFamily: theme.fonts.body,
                  fontSize: 14,
                  fontWeight: 600,
                  color: theme.colors.ink,
                  marginBottom: 4,
                }}
              >
                {c.name}
              </div>
              <div
                style={{
                  fontFamily: theme.fonts.body,
                  fontSize: 13,
                  color: theme.colors.softInk,
                  marginBottom: 6,
                }}
              >
                {c.note}
              </div>
              <div style={{ fontFamily: theme.fonts.body, fontSize: 12, color: theme.colors.accent }}>
                Gap: {c.gap}
              </div>
            </div>
          ))}
        </div>
      </Panel>

      <Panel style={{ marginBottom: theme.spacing.lg }}>
        <SectionTitle>What to plan for</SectionTitle>
        <BulletList items={planForItems} />
      </Panel>

      <Panel style={{ marginBottom: theme.spacing.lg }}>
        <SectionTitle>Recommended budget split</SectionTitle>
        <p
          style={{
            fontFamily: theme.fonts.body,
            fontSize: 13,
            color: theme.colors.muted,
            margin: `0 0 ${theme.spacing.md}px 0`,
          }}
        >
          Based on LKR {budget.toLocaleString()} monthly budget
        </p>
        <div style={{ height: 220 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={scaledBudget} layout="vertical" margin={{ left: 0, right: 16 }}>
              <XAxis type="number" tickFormatter={(v) => `${v / 1000}k`} />
              <YAxis type="category" dataKey="channel" width={130} tick={{ fontSize: 12 }} />
              <Tooltip
                formatter={(value) => [`LKR ${value.toLocaleString()}`, 'Amount']}
                labelStyle={{ fontFamily: theme.fonts.body }}
              />
              <Bar dataKey="amount_lkr" radius={0}>
                {scaledBudget.map((_, i) => (
                  <Cell key={i} fill={CHART_COLORS[i % CHART_COLORS.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div style={{ marginTop: theme.spacing.md }}>
          {scaledBudget.map((b) => (
            <div
              key={b.channel}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '6px 0',
                borderBottom: `1px solid ${theme.colors.border}`,
                fontFamily: theme.fonts.body,
                fontSize: 13,
              }}
            >
              <span style={{ color: theme.colors.softInk }}>
                {b.channel} ({b.pct}%)
              </span>
              <span style={{ color: theme.colors.ink, fontWeight: 600 }}>
                LKR {b.amount_lkr.toLocaleString()}
              </span>
            </div>
          ))}
        </div>
      </Panel>

      <Panel>
        <SectionTitle>Schedule a consultation</SectionTitle>
        <p
          style={{
            fontFamily: theme.fonts.body,
            fontSize: 13,
            color: theme.colors.softInk,
            margin: `0 0 ${theme.spacing.md}px 0`,
          }}
        >
          Book a 30-minute strategy session with a Vantage marketing advisor.
        </p>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
            gap: theme.spacing.sm,
            marginBottom: theme.spacing.lg,
          }}
        >
          {timeSlots.map((slot) => (
            <button
              key={slot}
              type="button"
              onClick={() => setScheduledSlot(slot)}
              style={{
                padding: '10px 12px',
                fontFamily: theme.fonts.body,
                fontSize: 13,
                background: scheduledSlot === slot ? theme.colors.accent : theme.colors.panel,
                color: scheduledSlot === slot ? '#FFFFFF' : theme.colors.ink,
                border: `1px solid ${scheduledSlot === slot ? theme.colors.accent : theme.colors.border}`,
                cursor: 'pointer',
              }}
            >
              {slot}
            </button>
          ))}
        </div>
        {scheduledSlot && (
          <p
            style={{
              fontFamily: theme.fonts.body,
              fontSize: 14,
              color: theme.colors.success,
              margin: 0,
            }}
          >
            ✓ Consultation booked for {scheduledSlot}
          </p>
        )}
      </Panel>
    </>
  );

  return (
    <div>
      {step === 0 && renderIntake()}
      {step === 1 && renderAssessment()}
      {step === 2 && renderReport()}
    </div>
  );
}
