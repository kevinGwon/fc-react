import React from 'react';
import { render } from '@testing-library/react';
import Button from './Button';

describe('Button 컴포넌트', () => {
  it('컴포넌트가 정사적으로 생성된다.', () => {
    render(<Button />);
  });
});
