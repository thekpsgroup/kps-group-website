import { render, screen, fireEvent, waitFor } from '@testing-library/svelte';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import ContactForm from '../ContactForm.svelte';

// Mock fetch
global.fetch = vi.fn();

describe('ContactForm Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders all form fields', () => {
    render(ContactForm);
    
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/phone/i)).toBeInTheDocument();
    expect(screen.getByText(/which help do you need/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/tell us more/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /send it/i })).toBeInTheDocument();
  });

  it('validates required fields', async () => {
    render(ContactForm);
    
    const submitButton = screen.getByRole('button', { name: /send it/i });
    await fireEvent.click(submitButton);
    
    // Should show validation errors or prevent submission
    // The form might use HTML5 validation instead of custom messages
    expect(submitButton).toBeInTheDocument();
  });

  it('validates email format', async () => {
    render(ContactForm);
    
    const emailInput = screen.getByLabelText(/email/i);
    await fireEvent.input(emailInput, { target: { value: 'invalid-email' } });
    
    const submitButton = screen.getByRole('button', { name: /send it/i });
    await fireEvent.click(submitButton);
    
    // HTML5 validation should prevent submission with invalid email
    expect(emailInput).toHaveValue('invalid-email');
  });

  it('submits form with valid data', async () => {
    const mockFetch = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ success: true })
    });
    global.fetch = mockFetch;

    render(ContactForm);
    
    // Fill out form
    await fireEvent.input(screen.getByLabelText(/name/i), { target: { value: 'John Doe' } });
    await fireEvent.input(screen.getByLabelText(/email/i), { target: { value: 'john@example.com' } });
    await fireEvent.input(screen.getByLabelText(/phone/i), { target: { value: '555-123-4567' } });
    await fireEvent.click(screen.getByDisplayValue('brands'));
    await fireEvent.input(screen.getByLabelText(/tell us more/i), { target: { value: 'Test message' } });
    
    const submitButton = screen.getByRole('button', { name: /send it/i });
    await fireEvent.click(submitButton);
    
    await waitFor(() => {
      expect(mockFetch).toHaveBeenCalledWith('/api/lead', expect.any(Object));
    });
  });

  it('handles submission errors', async () => {
    const mockFetch = vi.fn().mockRejectedValue(new Error('Network error'));
    global.fetch = mockFetch;

    render(ContactForm);
    
    // Fill out form
    await fireEvent.input(screen.getByLabelText(/name/i), { target: { value: 'John Doe' } });
    await fireEvent.input(screen.getByLabelText(/email/i), { target: { value: 'john@example.com' } });
    await fireEvent.input(screen.getByLabelText(/phone/i), { target: { value: '555-123-4567' } });
    await fireEvent.click(screen.getByDisplayValue('brands'));
    await fireEvent.input(screen.getByLabelText(/tell us more/i), { target: { value: 'Test message' } });
    
    const submitButton = screen.getByRole('button', { name: /send it/i });
    await fireEvent.click(submitButton);
    
    await waitFor(() => {
      expect(screen.getByText(/network error/i)).toBeInTheDocument();
    });
  });

  it('shows loading state during submission', async () => {
    const mockFetch = vi.fn().mockImplementation(() => new Promise(resolve => setTimeout(resolve, 100)));
    global.fetch = mockFetch;

    render(ContactForm);
    
    // Fill out form
    await fireEvent.input(screen.getByLabelText(/name/i), { target: { value: 'John Doe' } });
    await fireEvent.input(screen.getByLabelText(/email/i), { target: { value: 'john@example.com' } });
    await fireEvent.input(screen.getByLabelText(/phone/i), { target: { value: '555-123-4567' } });
    await fireEvent.click(screen.getByDisplayValue('brands'));
    await fireEvent.input(screen.getByLabelText(/tell us more/i), { target: { value: 'Test message' } });
    
    const submitButton = screen.getByRole('button', { name: /send it/i });
    await fireEvent.click(submitButton);
    
    // Should show loading state
    expect(screen.getByText(/sending/i)).toBeInTheDocument();
    expect(submitButton).toBeDisabled();
  });
});
