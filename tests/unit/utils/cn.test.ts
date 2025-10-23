import { describe, it, expect } from 'vitest';
import { cn } from '@/lib/utils';

describe('cn utility', () => {
  it('merges class names correctly', () => {
    const result = cn('text-red-500', 'bg-blue-500');
    expect(result).toContain('text-red-500');
    expect(result).toContain('bg-blue-500');
  });

  it('handles conditional classes', () => {
    const isActive = true;
    const result = cn('base-class', isActive && 'active-class');
    expect(result).toContain('base-class');
    expect(result).toContain('active-class');
  });

  it('handles falsy values', () => {
    const result = cn('base', false, undefined, null, 'other');
    expect(result).toContain('base');
    expect(result).toContain('other');
    expect(result).not.toContain('false');
    expect(result).not.toContain('undefined');
    expect(result).not.toContain('null');
  });

  it('overrides conflicting Tailwind classes', () => {
    const result = cn('p-4', 'p-8');
    // tailwind-merge should keep only the last p- class
    expect(result).not.toContain('p-4');
    expect(result).toContain('p-8');
  });

  it('handles empty input', () => {
    const result = cn();
    expect(result).toBe('');
  });

  it('merges multiple class arrays', () => {
    const result = cn(['text-sm', 'text-blue-500'], 'font-bold');
    expect(result).toContain('text-sm');
    expect(result).toContain('text-blue-500');
    expect(result).toContain('font-bold');
  });
});

