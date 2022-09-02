import React, { FC } from "react";
import styled from "styled-components";

const Container = styled.div<{ row: number; col: number }>`
  width: 2rem;
  height: 2rem;
  border-bottom: ${(props) => (props.row < 3 ? "1px solid black" : "none")};
  border-right: ${(props) => (props.col < 3 ? "1px solid black" : "none")};
`;

interface SpaceProps {
  row: number;
  col: number;
  value: null | string;
  onSpaceClick: (row: number, col: number, event: any) => void;
}

const Space: FC<SpaceProps> = ({ row, col, value, onSpaceClick }) => {
  return (
    <Container
      onClick={(event: any) => onSpaceClick(row, col, event)}
      row={row}
      col={col}
    >
      {value}
    </Container>
    //{" "}
  );
};

export default Space;
