import theme from '../theme';

export function Panel({ children, style = {} }) {
  return (
    <div
      style={{
        background: theme.colors.panel,
        border: `1px solid ${theme.colors.border}`,
        padding: theme.spacing.lg,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export function SectionTitle({ children, style = {} }) {
  return (
    <h3
      style={{
        fontFamily: theme.fonts.headline,
        fontSize: 14,
        letterSpacing: '0.04em',
        textTransform: 'uppercase',
        color: theme.colors.ink,
        margin: `0 0 ${theme.spacing.md}px 0`,
        ...style,
      }}
    >
      {children}
    </h3>
  );
}

export function BulletList({ items }) {
  return (
    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
      {items.map((item, i) => (
        <li
          key={i}
          style={{
            display: 'flex',
            gap: theme.spacing.sm,
            marginBottom: theme.spacing.sm,
            fontFamily: theme.fonts.body,
            fontSize: 14,
            color: theme.colors.softInk,
            lineHeight: 1.5,
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
  );
}

export function Badge({ label, variant = 'default' }) {
  const variants = {
    default: { bg: theme.colors.cream, color: theme.colors.softInk, border: theme.colors.border },
    required: { bg: '#FDECEA', color: theme.colors.accentDark, border: theme.colors.accent },
    recommended: { bg: '#FDF6E8', color: theme.colors.ochre, border: theme.colors.ochre },
    notApplicable: { bg: '#F0F0F0', color: theme.colors.muted, border: theme.colors.border },
    navy: { bg: '#E8EDF2', color: theme.colors.navy, border: theme.colors.navy },
    ochre: { bg: '#FDF6E8', color: theme.colors.ochre, border: theme.colors.ochre },
    orange: { bg: '#FDECEA', color: theme.colors.accent, border: theme.colors.accent },
  };
  const v = variants[variant] || variants.default;

  return (
    <span
      style={{
        display: 'inline-block',
        padding: '3px 10px',
        fontSize: 11,
        fontFamily: theme.fonts.body,
        fontWeight: 600,
        letterSpacing: '0.03em',
        textTransform: 'uppercase',
        background: v.bg,
        color: v.color,
        border: `1px solid ${v.border}`,
      }}
    >
      {label}
    </span>
  );
}

export function PrimaryButton({ children, onClick, disabled = false, style = {} }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      style={{
        fontFamily: theme.fonts.body,
        fontSize: 14,
        fontWeight: 600,
        padding: '12px 24px',
        background: disabled ? theme.colors.muted : theme.colors.accent,
        color: '#FFFFFF',
        border: 'none',
        cursor: disabled ? 'not-allowed' : 'pointer',
        letterSpacing: '0.02em',
        ...style,
      }}
    >
      {children}
    </button>
  );
}

export function SecondaryButton({ children, onClick, style = {} }) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        fontFamily: theme.fonts.body,
        fontSize: 14,
        fontWeight: 500,
        padding: '12px 24px',
        background: 'transparent',
        color: theme.colors.softInk,
        border: `1px solid ${theme.colors.border}`,
        cursor: 'pointer',
        ...style,
      }}
    >
      {children}
    </button>
  );
}

export function AnalyzingScreen({ title = 'Analyzing your responses…' }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 320,
        gap: theme.spacing.lg,
      }}
    >
      <div
        style={{
          width: 48,
          height: 48,
          border: `3px solid ${theme.colors.border}`,
          borderTopColor: theme.colors.accent,
          borderRadius: '50%',
          animation: 'spin 0.8s linear infinite',
        }}
      />
      <p
        style={{
          fontFamily: theme.fonts.body,
          fontSize: 16,
          color: theme.colors.softInk,
          margin: 0,
        }}
      >
        {title}
      </p>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}
