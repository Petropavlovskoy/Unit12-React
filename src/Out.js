import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
   selectValue,
   selectTest,
   text,
} from './app/taskReducerSlice';

export default function Out() {
   let task1Input1 = React.createRef();

   const task1 = useSelector(selectValue); // получаем данные из store
   const task2 = useSelector(selectTest); // получаем данные из store
   const dispatch = useDispatch();

   const textHandler = () => {
      dispatch(text());
   }

   return (
      <div>
         <hr />
         <h2>Task 1</h2>
         <p>{task1}</p>

         <input type="number" ref={task1Input1} />
         <button onClick={textHandler}>text</button>
         <p>{task2}</p>
      </div>
   );
}

