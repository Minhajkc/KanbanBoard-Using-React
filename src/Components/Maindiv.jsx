import React from 'react';
import { useSelector } from 'react-redux';
import { MdOutlinePendingActions, } from "react-icons/md";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

function Maindiv() {
  
  const tasks = useSelector((state) => state.addvalue.value);

  return (
    <div className="min-h-screen items-center justify-center mt-2">
      <div
        className="bg-white p-10 rounded mx-80 rounded-3xl "
        style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
      >


        <div className="flex justify-center space-x-8">
          <div className=" text-center p-5 border-2 rounded-3xl text-white w-64 h-130 border-yellow-200">
            <h1 className="text-3xl font-bold border-b-2  rounded-3xl ">PENDING</h1>
           
            <div className=" rounded rounded-2xl">
              <ul>
                {tasks.map((task, index) => (
                  <li key={index} className="text-black p-3 bg-white  rounded-xl my-2">
                    <h2 className="text-lg font-bold">Task: {task.taskName}</h2>
                    <p className="text-sm">Description: {task.description}</p>
                    <p className="text-sm">Date: {task.date}</p>
                    <MdOutlinePendingActions className='text-yellow-500' />
                  </li>
                ))}
             
              </ul>
            </div>
          </div>
          <div className="border-2 text-center p-5 rounded-3xl text-white w-64 border-blue-200">
            <h1 className="text-3xl font-bold border-b-2 rounded-3xl">PROGRESS</h1>
       
          </div>
          <div className="border-2 text-center p-5 rounded-3xl text-white border-green-300 w-64">
            <h1 className="text-3xl font-bold text-white border-b-2 rounded-3xl">COMPLETED</h1>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default Maindiv;
