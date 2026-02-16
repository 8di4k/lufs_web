import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Stats } from '@/components/sections/Stats';

describe('Stats Section', () => {
  it('renders all stat cards', () => {
    render(<Stats />);
    
    // Check for stat headings (using getAllByText since component renders for mobile + desktop)
    expect(screen.getAllByText(/BPM Detection Accuracy/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/Average Analysis Time/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/Supported Platforms/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/Monthly Plan/i)[0]).toBeInTheDocument();
  });

  it('displays correct stat values', () => {
    render(<Stats />);
    
    // Check that stats section renders with heading
    const heading = screen.getByRole('heading', { name: /Powered by Numbers/i });
    expect(heading).toBeInTheDocument();
    
    // Check for comparison badges (using getAllByText since component renders for mobile + desktop)
    expect(screen.getAllByText(/15% better than competitors/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/3x faster than average/i)[0]).toBeInTheDocument();
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

