import { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { ModuleStepper } from '../../components/Stepper';
import Field, { CheckboxGroup } from '../../components/Field';
import {
  Panel,
  SectionTitle,
  Badge,
  PrimaryButton,
  SecondaryButton,
  AnalyzingScreen,
} from '../../components/Panel';
import theme from '../../theme';
import { touchOptions, getRegulationsForTouches, statusLabels } from './data';

const STEPS = ['Intake', 'Report'];

export default function RegulatoryFlow() {
  const [step, setStep] = useState(0);
  const [touches, setTouches] = useState([]);
  const [analyzing, setAnalyzing] = useState(false);
  const [search, setSearch] = useState('');

  const regulations = useMemo(() => getRegulationsForTouches(touches), [touches]);

  const filtered = regulations.filter(
    (r) =>
      r.name.toLowerCase().includes(search.toLowerCase()) ||
      r.explanation.toLowerCase().includes(search.toLowerCase())
  );

  const requiredCount = regulations.filter((r) => r.status === 'required').length;

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
        Regulatory Compliance
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
        Identify which Sri Lankan regulations apply to your product before you build.
      </p>
      <Panel>
        <Field label="What does your product touch?">
          <CheckboxGroup
            values={touches}
            onChange={setTouches}
            options={touchOptions}
          />
        </Field>
        <PrimaryButton
          onClick={generateReport}
          disabled={touches.length === 0}
        >
          Check compliance →
        </PrimaryButton>
      </Panel>
    </>
  );

  if (analyzing) {
    return (
      <>
        <ModuleStepper steps={STEPS} current={0} />
        <AnalyzingScreen title="Checking regulatory requirements…" />
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
          <div>
            <h1
              style={{
                fontFamily: theme.fonts.headline,
                fontSize: 28,
                color: theme.colors.ink,
                margin: 0,
              }}
            >
              Compliance Report
            </h1>
            <p
              style={{
                fontFamily: theme.fonts.body,
                fontSize: 14,
                color: theme.colors.softInk,
                margin: `${theme.spacing.sm}px 0 0 0`,
              }}
            >
              {requiredCount} regulation{requiredCount !== 1 ? 's' : ''} require attention
            </p>
          </div>
          <SecondaryButton onClick={() => { setStep(0); setSearch(''); }}>
            ← Re-run check
          </SecondaryButton>
        </div>

        <Panel style={{ marginBottom: theme.spacing.lg }}>
          <div style={{ position: 'relative', marginBottom: theme.spacing.md }}>
            <Search
              size={16}
              style={{
                position: 'absolute',
                left: 12,
                top: '50%',
                transform: 'translateY(-50%)',
                color: theme.colors.muted,
              }}
            />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search regulations…"
              style={{
                width: '100%',
                padding: '10px 12px 10px 36px',
                fontFamily: theme.fonts.body,
                fontSize: 14,
                border: `1px solid ${theme.colors.border}`,
                background: theme.colors.panel,
                outline: 'none',
              }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            {filtered.map((reg) => {
              const status = statusLabels[reg.status];
              return (
                <div
                  key={reg.id}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    gap: theme.spacing.md,
                    padding: theme.spacing.md,
                    borderBottom: `1px solid ${theme.colors.border}`,
                    flexWrap: 'wrap',
                  }}
                >
                  <div style={{ flex: 1, minWidth: 200 }}>
                    <div
                      style={{
                        fontFamily: theme.fonts.body,
                        fontSize: 14,
                        fontWeight: 600,
                        color: theme.colors.ink,
                        marginBottom: 4,
                      }}
                    >
                      {reg.name}
                    </div>
                    <div
                      style={{
                        fontFamily: theme.fonts.body,
                        fontSize: 13,
                        color: theme.colors.softInk,
                        lineHeight: 1.5,
                      }}
                    >
                      {reg.explanation}
                    </div>
                  </div>
                  <Badge label={status.label} variant={status.variant} />
                </div>
              );
            })}
          </div>
        </Panel>

        <Panel>
          <SectionTitle>What to plan for</SectionTitle>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {[
              'Engage a local legal advisor for PDPA compliance before collecting user data.',
              'Register with the Inland Revenue Department for VAT if annual turnover exceeds LKR 80M.',
              'Document your data processing activities and publish a privacy policy in all three languages.',
            ].map((item, i) => (
              <li
                key={i}
                style={{
                  display: 'flex',
                  gap: theme.spacing.sm,
                  marginBottom: theme.spacing.sm,
                  fontFamily: theme.fonts.body,
                  fontSize: 14,
                  color: theme.colors.softInk,
                }}
              >
                <span
                  style={{
                    width: 6,
                    height: 6,
                    background: theme.colors.accent,
                    flexShrink: 0,
                    marginTop: 7,
                  }}
                />
                {item}
              </li>
            ))}
          </ul>
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
