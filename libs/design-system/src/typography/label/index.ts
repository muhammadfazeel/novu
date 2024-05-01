import styled from '@emotion/styled';

export const Label = styled.div<{ gradientColor?: 'red' | 'blue' | 'none' }>`
  height: 20px;
  font-family: 'Lato', serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;

  display: flex;
  align-items: center;

  ${({ gradientColor }) => {
    return (
      gradientColor !== 'none' &&
      `
    background: #b89535;
        
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;  
      `
    );
  }};
`;
