import React from "react";
import styled from "styled-components";

import * as icons from "./icons";

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
`;

const Icon = ({ icon, size, ...props }) => {
  const IconComponent = icons[icon];

  return (
    <IconWrapper
      width={size || 24}
      height={size || 24}
      color={props.color}
      rotate={props.rotate}
      {...props}
    >
      <IconComponent
        role="presentation"
        aria-hidden="true"
        focusable="false"
        width="100%"
        height="100%"
        {...props}
      />
    </IconWrapper>
  );
};

export default Icon;
