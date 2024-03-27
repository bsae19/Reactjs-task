import React, { useEffect } from 'react';
import Task from '../Atomes/Task';

function Tasklist({selectedEtat, tasks, ontaskChange}) {
    
    return (
        <div className='w-auto mt-4 mx-auto bg-white h-auto'>
            {tasks.filter((e)=> (e.etat === selectedEtat || selectedEtat==="Toutes")).map((e,index)=>{return (<div key={index}>
            <Task task={e} ontaskChange={(id)=>{ontaskChange(tasks.map((element)=>{return id==element.id? {...element,etat:element.etat=="A faire"? "Complétée": "A faire"}:element}))}} />
            </div>)})}
            
        </div>
    );
}

export default Tasklist;