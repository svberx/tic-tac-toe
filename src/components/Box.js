import React from 'react'
import "./Box.css"
import { useState } from 'react';
function But({value, onButsClick}){
    return(
        <button className='box' onClick={onButsClick}>{value}</button>
        )
    }
    export function Box  () {
        const [xIsNext, setXIsNext] = useState(true);
        const [buts, setButs] = useState(Array(9).fill(null));        
        function handleClick(i) {
            if(calculateWinner(buts)||buts[i]) { 
                return ;
            }
            const nextButs = buts.slice();
            xIsNext?nextButs[i] = "X":nextButs[i] = "O";
            setButs(nextButs);
            setXIsNext(!xIsNext);
        }
        const winner =calculateWinner(buts);
        let status;
        if(winner) {status = "Winner : "+winner} 
        else {status= "Next player is " + (xIsNext ?"X":"O");}
    return (
        <>
        <h2 className='status'>{status}</h2>
        <div className='grid'>
            <But value={buts[0]} onButsClick={() => handleClick(0)} />
            <But value={buts[1]} onButsClick={() => handleClick(1)} />
            <But value={buts[2]} onButsClick={() => handleClick(2)} />
        </div>
        <div className='grid'>
            <But value={buts[3]} onButsClick={() => handleClick(3)} />
            <But value={buts[4]} onButsClick={() => handleClick(4)} />
            <But value={buts[5]} onButsClick={() => handleClick(5)} />
        </div>
        <div className='grid'>
            <But value={buts[6]} onButsClick={() => handleClick(6)} />
            <But value={buts[7]} onButsClick={() => handleClick(7)} />
            <But value={buts[8]} onButsClick={() => handleClick(8)} />
        </div>
        </>
    )
}


function calculateWinner(buts) {
    const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (buts[a] && buts[a] === buts[b] && buts[a] === buts[c]) {
    return buts[a];
    }
}
return null;
}