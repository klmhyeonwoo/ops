import React from "react";
import styled from "@emotion/styled";
import {
  width,
  space,
  layout,
  typography,
  color,
  backgroundColor,
} from "styled-system";
import { WidthProps, ColorProps } from "styled-system";

interface Props extends WidthProps, ColorProps {
  children: React.ReactNode;
}

const Button = styled.button`
  background-color: ${`var(--blue500)`};
  color: ${`var(--grey50)`};
  width: 130px;
  height: 30px;
  border: none;
  border-radius: 5px;
`;

const Box = styled.div<Props>`
  ${width}
  ${space}
    ${layout}
    ${typography}
    ${color}
`;

export default function Obutton() {
  return (
    <>
      <Box
        width={[0.8, 0.8, 0.8]}
        color="var(--grey50)"
        backgroundColor={`var(--blue600)`}
      >
        디자인 박스
      </Box>
      <Button type="button"> 디자인 버튼 </Button>
    </>
  );
}
