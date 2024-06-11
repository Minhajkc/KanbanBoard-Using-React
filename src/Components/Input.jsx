import React, { useState } from 'react';
import { MdAddCard } from "react-icons/md";
import {useSelector,useDispatch} from 'react-redux'
import { addValue } from './Redux/Mainslice';

function Input() {
    const [formData, setFormData] = useState({
        taskName: '',
        description: '',
        date: '',
      });


      const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      }; 

    const dispatch = useDispatch();


    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addValue(formData)); 
        closeModal(); 
      };


  const [showModal, setShowModal] = useState(false);

  const handleButtonClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
     <div className="flex items-center text-center justify-center p-4 mt-10">
     
     <button
      className=" font-bold text-white rounded-xl p-3 px-10 focus:outline-none focus:border-none flex items-center bg-transparent border-transparent"
      onClick={handleButtonClick}
      style={{border:'2px solid'}}
    >
      <span className="flex items-center">
        New Task <MdAddCard className="ml-2" />
      </span>
    </button>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg bg-opacity-90 rounded-3xl">
            <h2 className="text-2xl font-bold mb-4 text-center">New Task</h2>
          <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Task Name</label>
        <input
          type="text"
          name="taskName"
          value={formData.taskName}
          onChange={handleInputChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter task name"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter description"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Date</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleInputChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="flex justify-end">
        <button
          type="button"
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={closeModal}
        >
          Close
        </button>
        <button
          type="submit"
          className="ml-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
        >
          Add Task
        </button>
      </div>
    </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Input;
