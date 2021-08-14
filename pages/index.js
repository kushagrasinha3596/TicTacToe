import React, { useEffect } from 'react';
import { useState } from 'react';
import Board from '../components/board';

export default function Home() {
  const [board, setBoard] = useState([['', '', ''],['', '', ''],['', '', '']]);
  const [mark, setMark] = useState('X');
  const [count, setCount] = useState(0);

  useEffect(() => {
    if(count && count <= 9){
      let winner = getWinner();
      if(winner){
        let winStatement = `Winner is ${winner}`
        alert(winStatement);
        resetGame();
      }
    }
  }, [count])

  function resetGame(){
    setBoard([['', '', ''],['', '', ''],['', '', '']]);
    setMark('X');
    setCount(0);
  }

  function cellClickCallback(rowIndex, colIndex){
    if(count > 9){
      alert("Board already full");
      return;
    }

    let newMark;
    if(mark === 'X'){
      newMark = 'O';
    }else{
      newMark = 'X';
    }
    setMark(newMark);
    setBoard((currBoard) => {
      currBoard[rowIndex][colIndex] = mark;
      return [...currBoard];
    })
    setCount(currCount => currCount+1);
  }

  function getWinner(){
    //horizontal
    for(var i=0; i<board.length; i++){
      if(board[i][0] === board[i][1] && board[i][1] === board[i][2]){
        return board[i][0];
      }
    }

    //vertical
    for(var i=0; i<board.length; i++){
      if(board[0][i] === board[1][i] && board[1][i] === board[2][i]){
        return board[0][i];
      }
    }

    //Diagonals
    if((board[0][0] === board[1][1] && board[1][1] === board[2][2]) || (board[0][2] === board[1][1] && board[1][1] === board[2][0])){
      return board[1][1];
    }
  }

  return (
    <React.Fragment>
      <button onClick={resetGame}> Reset Board</button>
      <Board cellClickCallback={cellClickCallback} boardMatrix={board}></Board>
    </React.Fragment>
  )
}
