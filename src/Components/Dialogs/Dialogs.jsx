import c from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={c.dialogs}>
            <div className = {c.dialogList}>
            <div className = {c.name }> Ivan</div>
            <div className = {c.name + ' ' + c.active}> Nelli</div>
            <div className = {c.name}> Jacub</div>
            <div className = {c.name}> Hovhannes </div>
            </div>
           <div className= {c.messages}>
               <div className= {c.message}>Hi</div>
               <div className= {c.message}>Sand dunes</div>
               <div className= {c.message}>Your last book sucks!</div>
               </div></div>


    )
}
export default Dialogs;