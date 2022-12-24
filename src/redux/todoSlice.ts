import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITask } from "../components/task/interfaces/ITask";
import { v4 as uuidv4 } from "uuid";

const initialState = [] as ITask[];

const todoSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTodo: {
      reducer: (state, action: PayloadAction<ITask>) => {
        state.push(action.payload);
      },
      prepare: (task: ITask) => ({
        payload: {
          ...task,
          id: uuidv4(),
        } 
      }),
    },
    addTodoOld(state,action:PayloadAction<ITask>){
      state.push(action.payload)
      
    },
    removeTodo(state, action: PayloadAction<string>) {
      const index = state.findIndex((todo) => todo.id === action.payload);
      state.splice(index, 1);
    },
    setTodoStatus(
      state,
      action: PayloadAction<{ status: string; id: string }>
    ) {
      const index = state.findIndex((task) => task.id === action.payload.id);
      state[index].status = action.payload.status;
    },
  },
});

export const { addTodo, removeTodo, setTodoStatus } = todoSlice.actions;
export default todoSlice.reducer;