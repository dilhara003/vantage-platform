import theme from '../theme';
import { Link } from 'react-router-dom';

export default function Shell({ children, moduleName, backTo = '/' }) {
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
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Link
          to={backTo}
          style={{
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: theme.spacing.md,
          }}
        >
          <span
            style={{
              fontFamily: theme.fonts.headline,
              fontSize: 20,
              color: theme.colors.ink,
              letterSpacing: '0.02em',
            }}
          >
            VANTAGE
          </span>
          {moduleName && (
            <>
              <span style={{ color: theme.colors.muted }}>/</span>
              <span
                style={{
                  fontFamily: theme.fonts.body,
                  fontSize: 14,
                  color: theme.colors.softInk,
                  fontWeight: 500,
                }}
              >
                {moduleName}
              </span>
            </>
          )}
        </Link>
        <Link
          to="/"
          style={{
            fontFamily: theme.fonts.body,
            fontSize: 13,
            color: theme.colors.softInk,
            textDecoration: 'none',
            border: `1px solid ${theme.colors.border}`,
            padding: '6px 14px',
          }}
        >
          All modules
        </Link>
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
