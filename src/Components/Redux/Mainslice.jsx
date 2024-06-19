import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [

  ],
};

const mainSlice = createSlice({
  name: 'boardvalue',
  initialState,
  reducers: {
    addValue: (state, action) => {
      state.value.push(action.payload);
      console.log(state.value,'formdatainslice');
    },
    moveTask: (state, action) => {
      const { id, status } = action.payload;
      const task = state.value.find(task => task.id === id);
      console.log(task,'from move');    
      if (task) {
        task.status = status;
      }
    },
    deleteTask: (state, action) => {
      console.log(action.payload);
      state.value = state.value.filter(item =>  {
          return item.id !== action.payload
      
      })
  },
  Edittask: (state, action) => {
const { id,  description, date, taskName } = action.payload;
const task = state.value.find(task => task.id === id);
if (task) {
task.taskName = taskName
task.description = description;
task.date = date;

}
}
  },
});

export const { addValue, moveTask, deleteTask, Edittask } = mainSlice.actions;

export default mainSlice.reducer;
