/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";

import * as icons from "./icons";

const Icon = ({ icon, size }) => {
  const IconComponent = icons[icon];

  return (
    <IconWrapper width={size || 24} heigth={size || 24}>
      <IconComponent
        role="presentation"
        aria-hidden="true"
        focusable="false"
        width="100%"
        heigth="100%"
      />
    </IconWrapper>
  );
};

const IconWrapper = styled.div`
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;

  width: ${(props) => props.width}px;
  height: ${(props) => props.heigth}px;
`;

export default Icon;
