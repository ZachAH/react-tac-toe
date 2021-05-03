import React from 'react';
import {Cell} from '../cell/Cell';
import './Board.css';


export const Board = () => {
  return (
    <div id="board">
        <Cell value="X" />
        <Cell value="X" />
        <Cell value="O" />
        <Cell value="" />
        <Cell value="X" />
        <Cell value="O" />
        <Cell value="X" />
        <Cell value="" />
        <Cell value="O" />
   </div>
  );
}