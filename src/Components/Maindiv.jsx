import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Droppable, Draggable, DragDropContext } from 'react-beautiful-dnd';
import { FaPencilAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { moveTask} from './Redux/Mainslice';
import { deleteTask } from './Redux/Mainslice';



const Maindiv = ({showModal,setShowModal,setValue}) => {
    const [curIndex, setCurIndex] = useState('');

    const dispatch = useDispatch();
    const tasks = useSelector((state) => state.boardvalue.value);

    const handleDelete = (taskId) => {
        const confirmed = window.confirm("Are you sure you want to delete this?");
        if (confirmed) {
            dispatch(deleteTask(taskId));
        }
    };

    const handleDragEnd = (result) => {
        const { source, destination } = result;
        if (!destination) return;

        const taskId = parseInt(result.draggableId);
        const newStatus = destination.droppableId;

        dispatch(moveTask({ id: taskId, status: newStatus }));
    };

   

    const categories = ['Pending', 'Progress', 'Completed'];

    return (
      <div>
        <DragDropContext onDragEnd={handleDragEnd}>
            <div className="mx-40 my-5 border rounded-lg flex text-white">
                {categories.map((category) => (
                    <Droppable droppableId={category}>
                        {(provided) => (
                            <div
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                                className="w-1/3 justify-center p-2"
                            >
                                <h1 className="flex justify-center text-2xl font-mono">{category}</h1>
                               
                                {tasks.filter((task) => task.status.toLowerCase() === category.toLowerCase())
                                    .map((item, index) => (
                                        <Draggable key={item.id} draggableId={item.id.toString()} index={index}>
                                            {(provided) => (
                                                <div
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    className="border m-2 rounded-md p-2 hover:bg-neutral-100 shadow-lg hover:-translate-x-2"
                                                    onMouseEnter={() => setCurIndex(item.id)}
                                                    onMouseLeave={() => setCurIndex(null)}
                                                >
                                                    <div className="flex justify-between gap-1">
                                                        <h1 className="font-bold">Task Name:</h1>
                                                        <p>{item.taskName}</p>
                                                    </div>
                                                    <div className="flex justify-between gap-1">
                                                        <h1 className="font-bold">Description:</h1>
                                                        <p>{item.description}</p>
                                                    </div>
                                                    <div className="flex justify-between gap-1">
                                                        <h1 className="font-bold">Due Date:</h1>
                                                        <p>{item.date}</p>
                                                    </div>
                                                
                                                    <div
                                                        className={
                                                            curIndex === item.id ? 'flex justify-center gap-4 py-1 px-4 mx-4 rounded border-black' : 'hidden'
                                                        }
                                                    >
                                                        <MdDelete
                                                            onClick={() => handleDelete(item.id)}
                                                            className='text-red-500 text-lg hover:text-red-800'
                                                        />
                                                        <FaPencilAlt
                                                           onClick={()=> {setShowModal(true),setValue(item)}}
                                                           className='text-blue-400 text-sm'
                                                        />
                                                    </div>
                                                </div>
                                            )}
                                        </Draggable>
                                    ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                ))}
            </div>
        </DragDropContext>
       
        </div>
    );
};

export default Maindiv;
