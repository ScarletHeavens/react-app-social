import c from './Paginator.module.css';
import React from 'react';

type PropType = {
  totalUsers: number
  pageSize: number
  currentPage: number
  onPageChange: (count: number) => void
  chunk: number
}

const Paginator: React.FC<PropType> = ({totalUsers, pageSize, currentPage, onPageChange, chunk = 5}) => {
    let count = Math.ceil(totalUsers/pageSize);
    let pages: Array<number> = [];
    for (let i=1; i <= count; i++) pages.push(i);

    let chunkCount = Math.ceil(count/chunk);
    let [chunkNumber, setChunkNumber] = React.useState(1);
    let leftChunk = (chunkNumber-1) * chunk + 1;
    let rightChunk = chunkNumber * chunk;

    React.useEffect(()=>setChunkNumber(Math.ceil(currentPage/chunk)), [currentPage]);
    
    const onLastClick= () => {
      chunkCount = chunk;
      onPageChange(count);
  
    }
    return (
    
    <div className = {c.pagination} >
    <div className = {c.page} >
      {chunkNumber > 1 && <nav><span onClick = {() => {onPageChange(count - (count-1))}}>First </span><button onClick= {() => {setChunkNumber(chunkNumber -1)}}> &laquo; </button> </nav>}
      {pages.filter(p => p >= leftChunk && p <= rightChunk).map(u => {
          return <span className={`${c.page} ${currentPage === u && c.selectedPage}`} onClick = {() => {onPageChange(u)}}> {u} </span>
      })}
      { chunkCount > chunk && <nav><button onClick= {()=> {
        setChunkNumber(chunkNumber +1);
      }}>&raquo;</button><span onClick = {onLastClick}> Last</span></nav>}
      </div>
      </div>
      
      )
}

export default Paginator;