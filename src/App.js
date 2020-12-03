import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import HarashokuNavbar from './component/HarashokuNavbar'
<<<<<<< Updated upstream
import HarashokuButton from './component/HarashokuButton'
import { Container, Row } from 'react-bootstrap'
import axios from 'axios'

function App() {


    return (<>
        <HarashokuNavbar />
        <Row className='d-flex justify-content-center'>

            <HarashokuButton clr='secondary' text='Upload' />
            <HarashokuButton clr='primary' text='Detect' />
        </Row>
    </>)
=======
import HarashokuImageUploader from './component/HarashokuImageUploader'
//import HarashokuButton from './component/HarashokuButton'



function App(){
 

    return ( <> 
    <HarashokuNavbar />
    <HarashokuImageUploader /> 
     </> )
>>>>>>> Stashed changes

}

export default App;
