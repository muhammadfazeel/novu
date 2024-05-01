import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Center } from '@mantine/core';
import styled from '@emotion/styled';

import { currentOnboardingStep } from './route/store';

export function NavButton({
  pulse = false,
  navigateTo,
  handleOnClick,
  variant, // Define variant prop here
  children,
  ...props
}: {
  pulse?: boolean;
  navigateTo: string;
  handleOnClick?: () => void;
  variant?: string; // Define variant prop here
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const navigate = useNavigate();

  function handleNavigationClick() {
    if (handleOnClick) {
      handleOnClick();
    }

    currentOnboardingStep().set(navigateTo);

    if (navigateTo) {
      navigate(navigateTo);
    }
  }

  return (
    <Center data-test-id="get-started-footer-left-side" inline>
      <ButtonStyled onClick={handleNavigationClick} variant={variant} {...props}>
        {children}
      </ButtonStyled>
    </Center>
  );
}

const ButtonStyled = styled.button<{ variant?: string }>`
  height: 50px;
  background-color: ${(props) =>
    props.variant === 'gradient' ? 'linear-gradient(to right, #b89535, #f4d03f)' : '#b89535'};
  border: none;
  border-radius: 4px;
  color: ${(props) => (props.variant === 'gradient' ? 'black' : 'white')};
  font-size: 16px;
  padding: 0 20px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) =>
      props.variant === 'gradient' ? 'linear-gradient(to right, #a7822e, #eec308)' : '#a7822e'};
  }
`;
