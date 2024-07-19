import styled from 'styled-components';
import { smallOnly } from '/imports/ui/stylesheets/styled-components/breakpoints';
import Button from '/imports/ui/components/common/button/component';

const DropdownButton = styled(Button)`
  ${({ state }) => state === 'open' && `
    @media ${smallOnly} {
      display: none;
    }
  `}

  ${({ state }) => state === 'closed' && `
    margin: 0;
    z-index: 3;
  `}
`;

const CustomIcon = styled.span`
    display: inline-block;
    width: 14px;
    height: 14px;
    line-height: 1;
    vertical-align: middle;
`;

export default {
  DropdownButton,
  CustomIcon,
};
