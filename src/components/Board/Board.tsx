import React, { useState } from "react";
import Space from "../Space/Space";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;

const GameContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  align-items: center;
`;

const Board = () => {
  const [game, setGame] = useState<{ value: "" | string }[][]>(
    [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ].map((row) => {
      return row.map((col) => {
        return {
          value: "",
        };
      });
    })
  );

  const [turn, setTurn] = useState(0);

  const checkIfWin = (row: number, col: number) => {
    const isWin = false;
    const currentSpace = game[row][col].value;
    console.log("CIW: " + currentSpace);
    console.log(isWin);
    return isWin;
  };

  const handleSpaceClick = (row: number, col: number, event: any) => {
    event.preventDefault();
    const clickedVal = game[row - 1][col - 1];
    const newGameState = game.map((gameRow, i) => {
      return gameRow.map((gameCol, j) => {
        if (i === row - 1 && j === col - 1) {
          return {
            value: turn % 2 === 0 ? "X" : "O",
          };
        }
        return gameCol;
      });
    });
    console.log(clickedVal);
    setGame(newGameState);
    checkIfWin(row, col);
    console.log("turn: " + turn);
    setTurn(turn + 1);
  };
  return (
    <div>
      <h3>Tic-Tac-Toe</h3>
      <Container>
        <GameContainer>
          {game.map((row, i) => {
            return row.map((col, j) => {
              return (
                <Space
                  row={i + 1}
                  col={j + 1}
                  value={col.value}
                  onSpaceClick={(row, col, event) =>
                    handleSpaceClick(row, col, event)
                  }
                />
              );
            });
          })}
        </GameContainer>
      </Container>
    </div>
  );
};

export default Board;
