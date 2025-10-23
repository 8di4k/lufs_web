import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Stats } from '@/components/sections/Stats';

describe('Stats Section', () => {
  it('renders all stat cards', () => {
    render(<Stats />);
    
    // Check for stat headings
    expect(screen.getByText(/BPM Detection Accuracy/i)).toBeInTheDocument();
    expect(screen.getByText(/Average Analysis Time/i)).toBeInTheDocument();
    expect(screen.getByText(/Supported Platforms/i)).toBeInTheDocument();
    expect(screen.getByText(/Monthly Plan/i)).toBeInTheDocument();
  });

  it('displays correct stat values', () => {
    render(<Stats />);
    
    // Check that stats section renders with heading
    const heading = screen.getByRole('heading', { name: /Powered by Numbers/i });
    expect(heading).toBeInTheDocument();
    
    // Check for comparison badges
    expect(screen.getByText(/15% better than competitors/i)).toBeInTheDocument();
    expect(screen.getByText(/3x faster than average/i)).toBeInTheDocument();
  });

  it('has proper semantic structure', () => {
    const { container } = render(<Stats />);
    
    const section = container.querySelector('section');
    expect(section).toBeInTheDocument();
    
    // Should have heading
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toBeInTheDocument();
  });

  it('renders stat descriptions', () => {
    render(<Stats />);
    
    // Check for section heading
    expect(screen.getByText(/Powered by Numbers/i)).toBeInTheDocument();
    
    // Check for descriptive text
    expect(screen.getByText(/Industry-leading accuracy/i)).toBeInTheDocument();
  });
});

