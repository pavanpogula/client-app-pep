// TypingText.test.tsx

import React from 'react';
import { render, screen,waitFor } from '@testing-library/react';
import TypingText from '../TypingText';
import { textSpanIsEmpty } from 'typescript';

interface TypingTextProps {
  signin?: boolean;
}

describe('TypingText component', () => {
  it('should render static text "quintraces"', () => {
    render(<TypingText signin={true} />);

    const quin = screen.getByText(/quin/i);
    const trace = screen.getByText(/trace/i);
    expect(quin).toBeInTheDocument();
    expect(trace).toBeInTheDocument();
  });

  

  
});
