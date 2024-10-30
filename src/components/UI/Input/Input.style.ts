import styled, { css } from "styled-components";

export const ErrorMessage = styled.p`
  color: ${(props) => props.theme.colors.red}; // Красный текст ошибки
  margin-bottom: 10px;
`;

interface SInterfaceProps {
  $isError: boolean;
}

export const StyleInput = styled.input<SInterfaceProps>`
  display: block;
  width: 100%;
  margin-bottom: 10px;
  padding: 12px 15px;
  background-color: ${(props) => props.theme.colors.bgc};
  border-radius: 10px;
  border: 2px solid ${(props) => props.theme.colors.disabledBgc};
  outline: none;
  transition: border-color 200ms;
  font-family: inherit;

  &:hover,
  &:focus {
    border-color: ${(props) => props.theme.colors.primeColor};
  }

  ${(props) =>
    props.$isError &&
    css`
      border-color: ${(props) => props.theme.colors.red};
      color: ${(props) => props.theme.colors.red};
    `}

  @media (max-width: 730px) {
    padding: 10px 12px;
  }
`;
