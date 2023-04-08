import {InputHTMLAttributes} from 'react';

export interface Props
  extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  title: string;
  error?: boolean;
  multiline?: boolean;
  rows?: number;
}
