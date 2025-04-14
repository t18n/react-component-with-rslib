import React from 'react';
import styles from './input.module.css';

interface InputProps {
  id?: string;
  label?: string;
  placeholder?: string;
  value?: string;
  type?: 'text' | 'password' | 'email' | 'number';
  size?: 'small' | 'medium' | 'large';
  error?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

export const Input = ({
  id,
  label,
  placeholder,
  value,
  type = 'text',
  size = 'medium',
  error = false,
  onChange,
  onBlur,
  ...props
}: InputProps) => {
  const inputClasses = [
    styles.input,
    styles[`input--${size}`],
    error ? styles['input--error'] : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={styles.container}>
      {label && (
        <label className={styles.label} htmlFor={id}>
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        className={inputClasses}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        {...props}
      />
    </div>
  );
};
