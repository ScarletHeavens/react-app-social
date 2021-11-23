import c from './Paginator.module.css';
import React from 'react';

const Paginator = ({totalUsers, pageSize, currentPage, onPageChange, chunk = 10}) => {
    let count = Math.ceil(totalUsers/pageSize);
    let pages = [];
    for (let i=1; i <= count; i++) pages.push(i);

    let chunkCount = Math.ceil(count/chunk);
    let [chunkNumber, setChunkNumber] = React.useState(1);
    let leftChunk = (chunkNumber-1) * chunk + 1;
    let rightChunk = chunkNumber * chunk;

    React.useEffect(()=>setChunkNumber(Math.ceil(currentPage/chunk)), [currentPage]);
    
    return <div> 
    <div className = {c.paginator}>
      {chunkNumber > 1 && <button onClick= {() => {setChunkNumber(chunkNumber -1)}}> LESS </button>}
      {pages.filter(p => p >= leftChunk && p <= rightChunk).map(u => {
          return <span className = {currentPage === u && c.active} onClick = {() => {onPageChange(u)}}> {u} </span>
      })}
      {chunkCount > chunk && <button onClick= {()=> {
        setChunkNumber(chunkNumber +1);
      }}>MORE</button>}
      </div>
 </div>
}

export default Paginator;