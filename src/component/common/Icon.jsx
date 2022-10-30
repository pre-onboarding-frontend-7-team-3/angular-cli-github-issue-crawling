/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import * as icons from "./icons";

const Icon = ({ icon, size, ...props }) => {
  const IconComponent = icons[icon];

  return (
    <div css={iconWrapper}>
      <IconComponent
        role="presentation"
        aria-hidden="true"
        focusable="false"
        width="100%"
        heigth="100%"
        {...props}
      />
    </div>
  );
};

const iconWrapper = css`
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;

  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
`;

export default Icon;
