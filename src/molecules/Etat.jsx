import React, { useEffect, useState } from 'react';

function Etat({ onetatChange }) {
    return (
      <div key="selectEtat" className="flex w-full justify-end pr-4" >
        <p>Filtre :</p>
        <select onChange={(element)=>onetatChange(element.target.value)} className='ml-2 bg-white'>
            {["Toutes","A faire","Complétée"].map((etat)=>{return (<option key={etat} value={etat}>{etat}</option>)})}
        </select>
      </div>
    );
}
export default Etat;