import c from './Paginator.module.css';

const Paginator = ({totalUsers, pageSize, currentPage, onPageChange}) => {
    let count = Math.ceil(totalUsers/pageSize);
    let pages = [];
    for (let i=1; i <= count; i++) pages.push(i);

    return <div> 
    <div>
      {pages.map(u => {
          return <span className = {currentPage === u && c.active} onClick = {() => {onPageChange(u)}}> {u} </span>
      })};
      </div>
 </div>
}

export default Paginator;