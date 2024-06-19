import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Edittask } from './Redux/Mainslice';

function Edittaskcom({ showModal, setShowModal, value }) {
    const dispatch = useDispatch();
    const [taskName, setTaskName] = useState(value.taskName);
    const [description, setDescription] = useState(value.description);
    const [date, setDate] = useState(value.date);

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedTask = {
            id: value.id, 
            taskName: taskName,
            description: description,
            date: date,
        };
        dispatch(Edittask(updatedTask)); 
        setShowModal(false);
    };

    return (
        <div>
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-yellow-200 p-8 rounded-lg bg-opacity-90 rounded-3xl">
                        <h2 className="text-2xl font-bold mb-4 text-center">Edit Task</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Task Name</label>
                                <input
                                    type="text"
                                    name="taskName"
                                    value={taskName}
                                    onChange={(e) => setTaskName(e.target.value)}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Enter task name"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Description</label>
                                <textarea
                                    name="description"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Enter description"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Date</label>
                                <input
                                    type="date"
                                    name="date"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div className="flex justify-end">
                                <button
                                    type="button"
                                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    onClick={() => setShowModal(false)}
                                >
                                    Close
                                </button>
                                <button
                                    type="submit"
                                    className="ml-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                >
                                    Save Changes
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Edittaskcom;
