import theme from '../theme';

const STEPS = ['Intake', 'Assessment', 'Analyzing', 'Report'];

export default function Stepper({ current = 0 }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: theme.spacing.sm,
        marginBottom: theme.spacing.xl,
      }}
    >
      {STEPS.map((label, i) => {
        const isActive = i === current;
        const isDone = i < current;
        return (
          <div key={label} style={{ display: 'flex', alignItems: 'center', gap: theme.spacing.sm }}>
            {i > 0 && (
              <div
                style={{
                  width: 32,
                  height: 1,
                  background: isDone || isActive ? theme.colors.accent : theme.colors.border,
                }}
              />
            )}
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <span
                style={{
                  width: 20,
                  height: 20,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 11,
                  fontFamily: theme.fonts.body,
                  fontWeight: 600,
                  background: isActive
                    ? theme.colors.accent
                    : isDone
                      ? theme.colors.navy
                      : theme.colors.cream,
                  color: isActive || isDone ? '#FFFFFF' : theme.colors.muted,
                  border: `1px solid ${isActive ? theme.colors.accent : isDone ? theme.colors.navy : theme.colors.border}`,
                }}
              >
                {isDone ? '✓' : i + 1}
              </span>
              <span
                style={{
                  fontFamily: theme.fonts.body,
                  fontSize: 13,
                  fontWeight: isActive ? 600 : 400,
                  color: isActive ? theme.colors.ink : theme.colors.muted,
                }}
              >
                {label}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function ModuleStepper({ steps, current = 0 }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: theme.spacing.sm,
        marginBottom: theme.spacing.xl,
        flexWrap: 'wrap',
      }}
    >
      {steps.map((label, i) => {
        const isActive = i === current;
        const isDone = i < current;
        return (
          <div key={label} style={{ display: 'flex', alignItems: 'center', gap: theme.spacing.sm }}>
            {i > 0 && (
              <div
                style={{
                  width: 24,
                  height: 1,
                  background: isDone || isActive ? theme.colors.accent : theme.colors.border,
                }}
              />
            )}
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <span
                style={{
                  width: 18,
                  height: 18,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 10,
                  fontFamily: theme.fonts.body,
                  fontWeight: 600,
                  background: isActive
                    ? theme.colors.accent
                    : isDone
                      ? theme.colors.navy
                      : theme.colors.cream,
                  color: isActive || isDone ? '#FFFFFF' : theme.colors.muted,
                  border: `1px solid ${isActive ? theme.colors.accent : isDone ? theme.colors.navy : theme.colors.border}`,
                }}
              >
                {isDone ? '✓' : i + 1}
              </span>
              <span
                style={{
                  fontFamily: theme.fonts.body,
                  fontSize: 12,
                  fontWeight: isActive ? 600 : 400,
                  color: isActive ? theme.colors.ink : theme.colors.muted,
                }}
              >
                {label}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
