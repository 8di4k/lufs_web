import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Hero } from '@/components/sections/Hero';

describe('Hero Section', () => {
  it('renders main heading', () => {
    render(<Hero />);
    
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/LUFS/i);
  });

  it('renders CTA button', () => {
    render(<Hero />);
    
    const ctaButton = screen.getByRole('link', { name: /Telegram/i });
    expect(ctaButton).toBeInTheDocument();
    expect(ctaButton).toHaveAttribute('href');
  });

  it('renders subtitle text', () => {
    render(<Hero />);
    
    expect(screen.getByText(/Professional Audio Analysis/i)).toBeInTheDocument();
    expect(screen.getByText(/AI/i)).toBeInTheDocument();
  });

  it('displays social proof badge', () => {
    render(<Hero />);
    
    const badge = screen.getByText(/users/i);
    expect(badge).toBeInTheDocument();
  });

  it('has accessible structure', () => {
    const { container } = render(<Hero />);
    
    // Should have semantic HTML structure
    const section = container.querySelector('section');
    expect(section).toBeInTheDocument();
    
    // Should have proper heading hierarchy
    const h1 = container.querySelector('h1');
    expect(h1).toBeInTheDocument();
  });
});

