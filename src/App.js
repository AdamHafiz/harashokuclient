import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import HarashokuNavbar from './component/HarashokuNavbar'
import HarashokuImageUploader from './component/HarashokuImageUploader'
//import HarashokuButton from './component/HarashokuButton'



function App(){
 

    return ( <> 
    <HarashokuNavbar />
    <HarashokuImageUploader /> 
     </> )

}

export default App;
