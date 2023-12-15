'use client';

import { ComponentProps } from 'react';
import { useFormStatus } from 'react-dom';

type FormButtonProps = {
  children: React.ReactNode;
  className?: string;
} & ComponentProps<'button'>;

const FormButton = ({ children, className, ...props }: FormButtonProps) => {
  const { pending } = useFormStatus();
  return (
    <button
      {...props}
      disabled={pending}
      type="submit"
      className={`btn btn-primary ${className}`}
    >
      {pending && <span className="loading loading-spinner" />}
      {children}
    </button>
  );
  {
    children;
  }
};

export default FormButton;
