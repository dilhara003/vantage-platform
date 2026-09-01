import theme from '../theme';

export default function Shell({ children }) {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: theme.colors.cream,
        fontFamily: theme.fonts.body,
      }}
    >
      <header
        style={{
          borderBottom: `1px solid ${theme.colors.border}`,
          background: theme.colors.panel,
          padding: `${theme.spacing.md}px ${theme.spacing.xl}px`,
        }}
      >
        <div
          style={{
            fontFamily: theme.fonts.headline,
            fontSize: 20,
            color: theme.colors.ink,
            letterSpacing: '0.02em',
          }}
        >
          AI MARKETING PREDICTOR
        </div>
        <p
          style={{
            fontFamily: theme.fonts.body,
            fontSize: 13,
            color: theme.colors.softInk,
            margin: `${theme.spacing.xs}px 0 0 0`,
          }}
        >
          AI-powered marketing strategy for Sri Lankan tech products.
        </p>
      </header>
      <main
        style={{
          maxWidth: 900,
          margin: '0 auto',
          padding: `${theme.spacing.xl}px ${theme.spacing.lg}px`,
        }}
      >
        {children}
      </main>
    </div>
  );
}
