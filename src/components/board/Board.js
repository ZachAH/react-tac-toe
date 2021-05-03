import React from 'react';
import {Cell} from '../cell/Cell';
import './Board.css';


export const Board = () => {
  return (
    <div id="board">
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
   </div>
  );
}