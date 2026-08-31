import { Link } from 'react-router-dom';
import { Megaphone, Package, Shield, Server } from 'lucide-react';
import theme from '../theme';
import { PrimaryButton } from '../components/Panel';

const modules = [
  {
    id: 'marketing',
    path: '/modules/marketing',
    icon: Megaphone,
    name: 'Marketing',
    description:
      'Assess technical literacy, map competitors, and get a channel budget split with consultation scheduling.',
    accent: theme.colors.accent,
  },
  {
    id: 'product',
    path: '/modules/product',
    icon: Package,
    name: 'Product & Service Management',
    description:
      'Validate product-market fit with SWOT analysis, market blockers, and research guidance.',
    accent: theme.colors.navy,
  },
  {
    id: 'regulatory',
    path: '/modules/regulatory',
    icon: Shield,
    name: 'Regulatory Compliance',
    description:
      'Pre-build risk checker for Sri Lankan regulations — PDPA, tax, Central Bank, and more.',
    accent: theme.colors.ochre,
  },
  {
    id: 'infrastructure',
    path: '/modules/infrastructure',
    icon: Server,
    name: 'Infrastructure Readiness',
    description:
      'Score your hosting maturity, identify gaps, and get a 3-step scalability roadmap.',
    accent: theme.colors.softInk,
  },
];

export default function Landing() {
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
          padding: `${theme.spacing.lg}px ${theme.spacing.xl}px`,
        }}
      >
        <span
          style={{
            fontFamily: theme.fonts.headline,
            fontSize: 24,
            color: theme.colors.ink,
            letterSpacing: '0.04em',
          }}
        >
          VANTAGE
        </span>
      </header>

      <main
        style={{
          maxWidth: 960,
          margin: '0 auto',
          padding: `${theme.spacing.xxl}px ${theme.spacing.lg}px`,
        }}
      >
        <div style={{ marginBottom: theme.spacing.xxl }}>
          <p
            style={{
              fontFamily: theme.fonts.body,
              fontSize: 12,
              color: theme.colors.muted,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              margin: `0 0 ${theme.spacing.md}px 0`,
            }}
          >
            J26-ISE-313 · Smart Consulting Platform
          </p>
          <h1
            style={{
              fontFamily: theme.fonts.headline,
              fontSize: 40,
              color: theme.colors.ink,
              margin: `0 0 ${theme.spacing.md}px 0`,
              lineHeight: 1.15,
            }}
          >
            Build Sri Lankan tech products with confidence
          </h1>
          <p
            style={{
              fontFamily: theme.fonts.body,
              fontSize: 16,
              color: theme.colors.softInk,
              margin: 0,
              maxWidth: 560,
              lineHeight: 1.7,
            }}
          >
            Vantage evaluates your product across marketing, product validation,
            regulatory compliance, and infrastructure readiness — giving you
            customized recommendations before and during development.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: theme.spacing.lg,
          }}
        >
          {modules.map((mod) => {
            const Icon = mod.icon;
            return (
              <div
                key={mod.id}
                style={{
                  background: theme.colors.panel,
                  border: `1px solid ${theme.colors.border}`,
                  padding: theme.spacing.lg,
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: `1px solid ${theme.colors.border}`,
                    marginBottom: theme.spacing.md,
                  }}
                >
                  <Icon size={20} color={mod.accent} />
                </div>
                <h2
                  style={{
                    fontFamily: theme.fonts.headline,
                    fontSize: 16,
                    color: theme.colors.ink,
                    margin: `0 0 ${theme.spacing.sm}px 0`,
                    letterSpacing: '0.02em',
                  }}
                >
                  {mod.name}
                </h2>
                <p
                  style={{
                    fontFamily: theme.fonts.body,
                    fontSize: 14,
                    color: theme.colors.softInk,
                    lineHeight: 1.6,
                    margin: `0 0 ${theme.spacing.lg}px 0`,
                    flex: 1,
                  }}
                >
                  {mod.description}
                </p>
                <Link to={mod.path} style={{ textDecoration: 'none' }}>
                  <PrimaryButton style={{ width: '100%' }}>Try it →</PrimaryButton>
                </Link>
              </div>
            );
          })}
        </div>

        <p
          style={{
            fontFamily: theme.fonts.body,
            fontSize: 12,
            color: theme.colors.muted,
            marginTop: theme.spacing.xxl,
            textAlign: 'center',
          }}
        >
          Prototype build · All data mocked for demo purposes
        </p>
      </main>
    </div>
  );
}
