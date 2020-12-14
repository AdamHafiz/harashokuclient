import React, { useState } from 'react'
import {Button,Container} from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import Figure from 'react-bootstrap/Figure'

function HarashokuImageUploader() {
    const [fileInputState, setFileInputState] = useState('')
    const [previewSource, setPreviewSource] = useState()
    const [selectedFile, setSelectedFile] = useState('')

    const handleFileInputChange = (e) => {
        const file = e.target.files[0]
        console.log(file);
        console.log(e.target);
        previewFile(file)
    }

    const previewFile = (file) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onloadend = () => {
            setPreviewSource(reader.result)
        }
    }
    
    const handleSubmitFile = (e) => {
    console.log('submitting');
    e.preventDefault()
    if (!previewSource) return;
    uploadImage(previewSource)
    }
    
    const uploadImage = async (base64EncodedImage) => {
        console.log(base64EncodedImage);
        try {
            await fetch('http://206.189.46.22', {
                method: 'POST',
                body: JSON.stringify({data: base64EncodedImage}),
                headers: {'Content-type': 'application/json'}
            })
        } catch (error) {
            console.error(error);
        }
    }

    return (
    <>
    <div>
        <h1 className='upload-form-header' >Upload your image </h1>
        <form onSubmit={handleSubmitFile} className='form upload-image-form' >
            <input type="file" 
                name="image" 
                onChange={handleFileInputChange} 
                className="form-input"
            />
            <Button className="btn" type="submit">
            Submit </Button>
        </form>
        <div>
        {previewSource &&(
           <Card.Img src={previewSource} alt="chosen" />
        )}
        </div>


    </div>
    </>
    )
}

export default HarashokuImageUploader

