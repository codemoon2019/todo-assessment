import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITask } from "../components/task/interfaces/ITask";
import { v4 as uuidv4 } from "uuid";

import { Priority } from '../components/createTaskForm/enums/Priority';
import { Status } from '../components/createTaskForm/enums/Status';

const test:ITask[]=[{title : 'Test Title 1',
date : new Date(),
description : 'Lorem ipsum dolor sit amet',
priority : Priority.normal,
status : Status.completed,},
{title : 'Test Title 2',
date : new Date(),
description : 'complete the project',
priority : Priority.normal,
status : Status.completed,}]

const initialState = test;

const todoSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTodoOLD: {
      reducer: (state, action: PayloadAction<ITask>) => {
        state.push(action.payload);
      },
      prepare: (description: string) => ({
        payload: {
          id: uuidv4(),
          description,
          completed: false,
        } as ITask,
      }),
    },
    addTodo(state,action:PayloadAction<ITask>){
      state.push(action.payload)
      
    },
    removeTodo(state, action: PayloadAction<string>) {
      const index = state.findIndex((todo) => todo.id === action.payload);
      state.splice(index, 1);
    },
    setTodoStatus(
      state,
      action: PayloadAction<{ completed: string; id: string }>
    ) {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].status = action.payload.completed;
    },
  },
});

export const { addTodo, removeTodo, setTodoStatus } = todoSlice.actions;
export default todoSlice.reducer;