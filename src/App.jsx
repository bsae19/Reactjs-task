import { useEffect, useState } from 'react'
import './App.css'
import Etat from './molecules/Etat'
import Input from './Atomes/Input';
import Tasklist from './molecules/Tasklist';

function App() {
  const [selectedEtat, setselectedEtat] = useState("Toutes");
  const [tasks, settasks] = useState(JSON.parse(localStorage.getItem('task')) || []);
  const [id, setid] = useState(parseInt(localStorage.getItem('lastid')) || 1);

  useEffect(() => {
    localStorage.setItem('task',JSON.stringify(tasks));
    localStorage.setItem('lastid',id);
  }, [tasks]);

  return (
    <>
      <h1 className='text-center w-full my-2 text-xl'>Gestionnaire de Tache</h1>
      <Input id={id} idAdd={(e)=>setid((prev)=>prev+e)} ontaskAdd={(e)=> {settasks((prev)=>[...prev,e])}} />
      <Etat onetatChange={(e)=> setselectedEtat((prev)=> e)} />
      <Tasklist selectedEtat={selectedEtat} tasks={tasks} ontaskChange={(e)=> settasks(e)} />
    </>
  )
}

export default App
