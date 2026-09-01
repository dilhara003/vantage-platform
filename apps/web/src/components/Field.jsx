import { useState } from 'react';
import theme from '../theme';

export function NumberInput({ value, onChange, placeholder, suffix }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: theme.spacing.sm }}>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        min={0}
        style={{
          flex: 1,
          fontFamily: theme.fonts.body,
          fontSize: 14,
          color: theme.colors.ink,
          background: theme.colors.panel,
          border: `1px solid ${theme.colors.border}`,
          padding: '10px 12px',
          outline: 'none',
        }}
      />
      {suffix && (
        <span style={{ fontFamily: theme.fonts.body, fontSize: 13, color: theme.colors.muted }}>
          {suffix}
        </span>
      )}
    </div>
  );
}

export function TagInput({ values = [], onChange, placeholder = 'Type and press Enter' }) {
  const [input, setInput] = useState('');

  const commitInput = (raw = input) => {
    const tags = raw
      .split(',')
      .map((tag) => tag.trim())
      .filter(Boolean);
    if (tags.length === 0) return;
    const next = [...values];
    tags.forEach((tag) => {
      if (!next.includes(tag)) next.push(tag);
    });
    onChange(next);
    setInput('');
  };

  const removeTag = (tag) => onChange(values.filter((v) => v !== tag));

  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: theme.spacing.sm, marginBottom: theme.spacing.sm }}>
        {values.map((tag) => (
          <span
            key={tag}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              padding: '4px 10px',
              background: '#FDECEA',
              border: `1px solid ${theme.colors.accent}`,
              fontFamily: theme.fonts.body,
              fontSize: 13,
              color: theme.colors.ink,
            }}
          >
            {tag}
            <button
              type="button"
              onClick={() => removeTag(tag)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: theme.colors.accent,
                fontSize: 14,
                lineHeight: 1,
                padding: 0,
              }}
            >
              ×
            </button>
          </span>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            commitInput((e.currentTarget || e.target).value);
          }
        }}
        onBlur={(e) => commitInput(e.target.value)}
        placeholder={placeholder}
        style={{
          width: '100%',
          fontFamily: theme.fonts.body,
          fontSize: 14,
          color: theme.colors.ink,
          background: theme.colors.panel,
          border: `1px solid ${theme.colors.border}`,
          padding: '10px 12px',
          outline: 'none',
        }}
      />
    </div>
  );
}


export default function Field({ label, children, hint }) {
  return (
    <div style={{ marginBottom: theme.spacing.lg }}>
      {label && (
        <label
          style={{
            display: 'block',
            fontFamily: theme.fonts.body,
            fontSize: 13,
            fontWeight: 600,
            color: theme.colors.ink,
            marginBottom: theme.spacing.sm,
            letterSpacing: '0.02em',
          }}
        >
          {label}
        </label>
      )}
      {children}
      {hint && (
        <p
          style={{
            fontFamily: theme.fonts.body,
            fontSize: 12,
            color: theme.colors.muted,
            margin: `${theme.spacing.xs}px 0 0 0`,
          }}
        >
          {hint}
        </p>
      )}
    </div>
  );
}

export function TextInput({ value, onChange, placeholder, multiline = false, rows = 3 }) {
  const shared = {
    width: '100%',
    fontFamily: theme.fonts.body,
    fontSize: 14,
    color: theme.colors.ink,
    background: theme.colors.panel,
    border: `1px solid ${theme.colors.border}`,
    padding: '10px 12px',
    outline: 'none',
  };

  if (multiline) {
    return (
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={rows}
        style={{ ...shared, resize: 'vertical' }}
      />
    );
  }

  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      style={shared}
    />
  );
}

export function SelectInput({ value, onChange, options }) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{
        width: '100%',
        fontFamily: theme.fonts.body,
        fontSize: 14,
        color: theme.colors.ink,
        background: theme.colors.panel,
        border: `1px solid ${theme.colors.border}`,
        padding: '10px 12px',
        outline: 'none',
        cursor: 'pointer',
      }}
    >
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
}

export function RadioGroup({ value, onChange, options }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: theme.spacing.sm }}>
      {options.map((opt) => {
        const selected = value === opt.value;
        return (
          <button
            key={opt.value}
            type="button"
            onClick={() => onChange(opt.value)}
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
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {selected && (
                <span style={{ width: 6, height: 6, background: '#FFFFFF' }} />
              )}
            </span>
            <div>
              <div
                style={{
                  fontFamily: theme.fonts.body,
                  fontSize: 14,
                  fontWeight: 600,
                  color: theme.colors.ink,
                }}
              >
                {opt.label}
              </div>
              {opt.description && (
                <div
                  style={{
                    fontFamily: theme.fonts.body,
                    fontSize: 13,
                    color: theme.colors.softInk,
                    marginTop: 4,
                  }}
                >
                  {opt.description}
                </div>
              )}
            </div>
          </button>
        );
      })}
    </div>
  );
}

export function CheckboxGroup({ values, onChange, options }) {
  const toggle = (val) => {
    if (values.includes(val)) {
      onChange(values.filter((v) => v !== val));
    } else {
      onChange([...values, val]);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: theme.spacing.sm }}>
      {options.map((opt) => {
        const checked = values.includes(opt.value);
        return (
          <button
            key={opt.value}
            type="button"
            onClick={() => toggle(opt.value)}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: theme.spacing.md,
              padding: theme.spacing.md,
              background: checked ? '#FDECEA' : theme.colors.panel,
              border: `1px solid ${checked ? theme.colors.accent : theme.colors.border}`,
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
                border: `2px solid ${checked ? theme.colors.accent : theme.colors.border}`,
                background: checked ? theme.colors.accent : 'transparent',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {checked && (
                <span style={{ color: '#FFFFFF', fontSize: 10, fontWeight: 700 }}>✓</span>
              )}
            </span>
            <div>
              <div
                style={{
                  fontFamily: theme.fonts.body,
                  fontSize: 14,
                  fontWeight: 600,
                  color: theme.colors.ink,
                }}
              >
                {opt.label}
              </div>
              {opt.description && (
                <div
                  style={{
                    fontFamily: theme.fonts.body,
                    fontSize: 13,
                    color: theme.colors.softInk,
                    marginTop: 4,
                  }}
                >
                  {opt.description}
                </div>
              )}
            </div>
          </button>
        );
      })}
    </div>
  );
}
