import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import HarashokuNavbar from './component/HarashokuNavbar'
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

}

export default App;
