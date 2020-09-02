export const calculateWinner = (squares) => {
  const possibleLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  // go over all possibly winning lines and check if they consist of only X's/only O's
  for (let i = 0; i < possibleLines.length; i++) {
    const [a, b, c] = possibleLines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return {
        winIcon: squares[a],
        winLine: possibleLines[i],
      };
    }
  }
  return null;
};

export const isBoardFull = (squares) => {
  const len = squares.length;
  for (let i = 0; i < len; i++) {
    if (squares[i] == null) {
      return false;
    }
  }
  return true;
};
