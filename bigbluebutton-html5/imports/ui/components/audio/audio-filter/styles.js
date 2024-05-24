import styled from 'styled-components';

const AudioFilterButton = styled.button`
  align-self: center;
  border-radius: 10px;
  border: none;
  outline: none !important;
  box-shadow: none;
  cursor: pointer;
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  padding: 4px 10px;

  ${({ $enabled }) => $enabled && `
    background-color: green;
    color: white;
  `}
  ${({ $enabled }) => !$enabled && `
    background-color: #0A5C36;
    color: white;
  `}
`;

export default {
  AudioFilterButton
};
