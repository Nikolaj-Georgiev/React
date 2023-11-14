import { styled } from 'styled-components';

const Button = styled.button`
  cursor: pointer;
  background: none;
  line-height: inherit;
  padding: 1rem 2rem;
  font-weight: 600;
  text-transform: uppercase;
  border-radius: 0.25rem;
  color: #1f2937;
  background-color: #f0b322;
  border-radius: 6px;
  border: none;

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: #f0920e;
  }
`;

export default Button;
