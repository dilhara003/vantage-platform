import { useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Stepper from '../../components/Stepper';
import Field, {
  TextInput,
  SelectInput,
  RadioGroup,
  CheckboxGroup,
  TagInput,
  NumberInput,
} from '../../components/Field';
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
  industryOptions,
  questionGroups,
  questions,
  planForItems,
  timeSlots,
  messagingGuidance,
  getClassification,
  getLiteracyScore,
  getCompetitors,
  computeBudgetPlan,
  getIndustryLabel,
  buildInitialAnswers,
  isGroupValid,
  actionLabels,
  successMetricLabels,
  budgetFlexLabels,
  campaignDurationLabels,
  occupationLabels,
  locationLabels,
} from './data';

const CHART_COLORS = [
  theme.colors.accent,
  theme.colors.navy,
  theme.colors.ochre,
  theme.colors.softInk,
  theme.colors.muted,
];

const gridTwoCol = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  gap: theme.spacing.lg,
  marginBottom: theme.spacing.lg,
};

function Chip({ label }) {
  return (
    <span
      style={{
        display: 'inline-block',
        padding: '4px 10px',
        fontFamily: theme.fonts.body,
        fontSize: 12,
        color: theme.colors.softInk,
        background: theme.colors.cream,
        border: `1px solid ${theme.colors.border}`,
      }}
    >
      {label}
    </span>
  );
}

function renderQuestion(q, answers, setAnswer) {
  const value = answers[q.id];

  switch (q.type) {
    case 'text':
      return (
        <TextInput
          value={value || ''}
          onChange={(v) => setAnswer(q.id, v)}
          placeholder={q.placeholder}
        />
      );
    case 'textarea':
      return <TextInput value={value || ''} onChange={(v) => setAnswer(q.id, v)} multiline rows={3} />;
    case 'tags':
      return (
        <TagInput
          values={value || []}
          onChange={(v) => setAnswer(q.id, v)}
          placeholder={q.placeholder || 'Type and press Enter'}
        />
      );
    case 'select':
      return <SelectInput value={value || ''} onChange={(v) => setAnswer(q.id, v)} options={q.options} />;
    case 'radio':
      return <RadioGroup value={value || ''} onChange={(v) => setAnswer(q.id, v)} options={q.options} />;
    case 'checkbox':
      return (
        <CheckboxGroup
          values={value || []}
          onChange={(v) => setAnswer(q.id, v)}
          options={q.options}
        />
      );
    case 'number':
      return (
        <NumberInput
          value={value || ''}
          onChange={(v) => setAnswer(q.id, v)}
          suffix={q.suffix}
        />
      );
    default:
      return null;
  }
}

export default function AIMarketingPredictor() {
  const [step, setStep] = useState(0);
  const [groupIndex, setGroupIndex] = useState(0);
  const [intake, setIntake] = useState({
    productName: '',
    category: 'software-saas',
    targetAudience: '',
    monthlyBudget: '100000',
  });
  const [answers, setAnswers] = useState({});
  const [scheduledSlot, setScheduledSlot] = useState(null);

  const currentGroup = questionGroups[groupIndex];
  const classification = getClassification(answers);
  const literacyScore = getLiteracyScore(answers);
  const budget = parseInt(answers.q23 || intake.monthlyBudget, 10) || 100000;
  const budgetPlan = computeBudgetPlan(answers, budget);
  const competitors = getCompetitors(answers);
  const msgGuide = messagingGuidance[answers.q15];

  const setAnswer = (id, value) => setAnswers((prev) => ({ ...prev, [id]: value }));

  const startAssessment = () => {
    if (!intake.productName.trim()) return;
    setAnswers((prev) => ({ ...prev, ...buildInitialAnswers(intake) }));
    setGroupIndex(0);
    setStep(1);
  };

  const finishAssessment = () => {
    setStep(2);
    setTimeout(() => setStep(3), 2200);
  };

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
            options={industryOptions}
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
        <PrimaryButton onClick={startAssessment} disabled={!intake.productName.trim()}>
          Start assessment →
        </PrimaryButton>
      </Panel>
    </>
  );

  const renderAssessment = () => (
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
          Group {groupIndex + 1} of {questionGroups.length} — {currentGroup.title}
        </span>
        <h2
          style={{
            fontFamily: theme.fonts.headline,
            fontSize: 22,
            color: theme.colors.ink,
            margin: `${theme.spacing.sm}px 0 0 0`,
          }}
        >
          {currentGroup.title}
        </h2>
      </div>
      <Panel>
        {currentGroup.questionIds.map((qid) => {
          const q = questions[qid];
          return (
            <Field key={qid} label={q.label} hint={q.hint}>
              {renderQuestion(q, answers, setAnswer)}
            </Field>
          );
        })}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: theme.spacing.xl,
          }}
        >
          <SecondaryButton
            onClick={() => {
              if (groupIndex === 0) setStep(0);
              else setGroupIndex(groupIndex - 1);
            }}
          >
            ← Back
          </SecondaryButton>
          <PrimaryButton
            onClick={() => {
              if (groupIndex === questionGroups.length - 1) finishAssessment();
              else setGroupIndex(groupIndex + 1);
            }}
            disabled={!isGroupValid(currentGroup.id, answers)}
          >
            {groupIndex === questionGroups.length - 1 ? 'See report' : 'Next →'}
          </PrimaryButton>
        </div>
      </Panel>
    </>
  );

  const renderAnalyzing = () => (
    <>
      <Stepper current={2} />
      <AnalyzingScreen title="Analyzing your marketing readiness…" />
    </>
  );

  const renderAudienceStrip = () => {
    const roles = (answers.q10 || []).map((r) => occupationLabels[r]).join(', ');
    return (
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: theme.spacing.sm,
          marginBottom: theme.spacing.lg,
          padding: theme.spacing.md,
          background: theme.colors.panel,
          border: `1px solid ${theme.colors.border}`,
        }}
      >
        {answers.q7 && <Chip label={`Target: ${answers.q7}`} />}
        {answers.q8 && <Chip label={answers.q8.toUpperCase()} />}
        {answers.q9 && <Chip label={`Age: ${questions.q9.options.find((o) => o.value === answers.q9)?.label}`} />}
        {roles && <Chip label={`Role: ${roles}`} />}
        {answers.q11 && <Chip label={locationLabels[answers.q11]} />}
      </div>
    );
  };

  const renderScoreBreakdown = () => (
    <div style={{ marginTop: theme.spacing.md }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          fontFamily: theme.fonts.body,
          fontSize: 12,
          color: theme.colors.muted,
          marginBottom: theme.spacing.sm,
        }}
      >
        <span>Technical literacy score</span>
        <span>
          {literacyScore.total} / 12
        </span>
      </div>
      <div style={{ display: 'flex', gap: 2, height: 8 }}>
        {[
          { score: literacyScore.q12, label: 'Comfort' },
          { score: literacyScore.q13, label: 'Familiarity' },
          { score: literacyScore.q14, label: 'Detail level' },
        ].map((item) => (
          <div key={item.label} style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 4 }}>
            <div style={{ display: 'flex', gap: 1, height: 8 }}>
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  style={{
                    flex: 1,
                    background: i < item.score ? theme.colors.accent : theme.colors.border,
                  }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: 4,
          fontFamily: theme.fonts.body,
          fontSize: 10,
          color: theme.colors.muted,
        }}
      >
        <span>Comfort</span>
        <span>Familiarity</span>
        <span>Detail</span>
      </div>
    </div>
  );

  const renderReport = () => (
    <>
      <Stepper current={3} />
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          marginBottom: theme.spacing.md,
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
            {answers.q1 || intake.productName} · {getIndustryLabel(answers.q5 || intake.category)}
          </p>
        </div>
        <Badge label={classification.label} variant={classification.variant} />
      </div>

      {renderAudienceStrip()}

      <div style={gridTwoCol}>
        <Panel>
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
          {renderScoreBreakdown()}
        </Panel>

        <Panel>
          <SectionTitle>Messaging guidance</SectionTitle>
          {msgGuide ? (
            <>
              <p
                style={{
                  fontFamily: theme.fonts.body,
                  fontSize: 14,
                  color: theme.colors.softInk,
                  margin: `0 0 ${theme.spacing.sm}px 0`,
                  lineHeight: 1.6,
                }}
              >
                Your audience responds best to <strong>{msgGuide.label.toLowerCase()}</strong>.
                {' '}{msgGuide.guidance}
              </p>
              <p
                style={{
                  fontFamily: theme.fonts.body,
                  fontSize: 13,
                  color: theme.colors.accent,
                  fontStyle: 'italic',
                  margin: 0,
                }}
              >
                {msgGuide.example}
              </p>
            </>
          ) : (
            <p style={{ fontFamily: theme.fonts.body, fontSize: 14, color: theme.colors.softInk, margin: 0 }}>
              Complete the assessment to receive messaging guidance.
            </p>
          )}
        </Panel>
      </div>

      <div style={gridTwoCol}>
        <Panel>
          <SectionTitle>Competitive landscape</SectionTitle>
          <div style={{ display: 'flex', flexDirection: 'column', gap: theme.spacing.md }}>
            {competitors.map((c) => (
              <div
                key={c.name}
                style={{ padding: theme.spacing.md, border: `1px solid ${theme.colors.border}` }}
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

        <Panel>
          <SectionTitle>What to plan for</SectionTitle>
          <BulletList items={planForItems} />
        </Panel>
      </div>

      <Panel style={{ marginBottom: theme.spacing.lg }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: theme.spacing.sm,
            marginBottom: theme.spacing.md,
          }}
        >
          <SectionTitle style={{ margin: 0 }}>Recommended budget split</SectionTitle>
          <div style={{ display: 'flex', gap: theme.spacing.sm, flexWrap: 'wrap' }}>
            {answers.q24 && <Badge label={budgetFlexLabels[answers.q24]} variant="recommended" />}
            {answers.q25 && <Badge label={campaignDurationLabels[answers.q25]} variant="navy" />}
          </div>
        </div>
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

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: theme.spacing.sm, marginBottom: theme.spacing.md }}>
          {answers.q18 && (
            <Chip label={`Primary action: ${actionLabels[answers.q18]}`} />
          )}
          {(answers.q26 || []).map((m) => (
            <Chip key={m} label={`Track: ${successMetricLabels[m]}`} />
          ))}
        </div>

        <div style={{ height: 280, marginBottom: theme.spacing.lg }}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={budgetPlan}
                dataKey="pct"
                nameKey="channel"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label={({ percent }) => `${Math.round(percent * 100)}%`}
                labelLine
              >
                {budgetPlan.map((_, i) => (
                  <Cell key={i} fill={CHART_COLORS[i % CHART_COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                formatter={(value, name, props) => [
                  `LKR ${props.payload.amount_lkr.toLocaleString()} (${value}%)`,
                  props.payload.channel,
                ]}
              />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div>
          {budgetPlan.map((b) => (
            <div
              key={b.channel}
              style={{
                padding: '8px 0',
                borderBottom: `1px solid ${theme.colors.border}`,
                fontFamily: theme.fonts.body,
                fontSize: 13,
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
                <span style={{ color: theme.colors.ink, fontWeight: 600 }}>
                  {b.channel} ({b.pct}%)
                </span>
                <span style={{ color: theme.colors.ink, fontWeight: 600 }}>
                  LKR {b.amount_lkr.toLocaleString()}
                </span>
              </div>
              <div style={{ color: theme.colors.softInk, fontSize: 12 }}>{b.rationale}</div>
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

      <p
        style={{
          fontFamily: theme.fonts.body,
          fontSize: 12,
          color: theme.colors.muted,
          textAlign: 'center',
          marginTop: theme.spacing.xl,
        }}
      >
        Prototype build · All data mocked for demo purposes
      </p>
    </>
  );

  return (
    <div>
      {step === 0 && renderIntake()}
      {step === 1 && renderAssessment()}
      {step === 2 && renderAnalyzing()}
      {step === 3 && renderReport()}
    </div>
  );
}
