import React from 'react';

function Task({task, ontaskChange}) {
    return (
        <div className='flex flex-col items-center py-4'>
            <button id={task.id} onClick={() =>ontaskChange(task.id)} className={task.etat=="A faire"?"text-white mx-auto bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-4 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800":"text-white mx-auto bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-8 py-4 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800 line-through"}>{task.name}</button>
        </div>
    );
}

export default Task;