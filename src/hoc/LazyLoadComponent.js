import {Suspense} from 'react';
import Preloader from '../Components/Common/Preloader';

const LazyLoadComponent = (Component) => {
   return (props) => { 
   return <Suspense fallback = {<div><Preloader/></div>}>
    <Component {...props}/>
    </Suspense>
}};

export default LazyLoadComponent;