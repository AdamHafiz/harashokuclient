import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import Figure from 'react-bootstrap/Figure'
import ReactLoading from 'react-loading';

function HarashokuImageUploader() {
    const [previewSource, setPreviewSource] = useState()
    const [loading, setLoading] = useState(false)
    const [processedImage, setProcessedImage] = useState('')

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
        setLoading(true)
        var strImage = base64EncodedImage.replace(/^data:image\/[a-z]+;base64,/, "");
        try {
            await fetch('http://127.0.0.1:5000', {
                method: 'POST',
                body: strImage,
                headers: { 'Content-type': 'application/json' }
            }).then(response => response.json())
                .then(data => {
                    setLoading(false)
                    setProcessedImage(data.base_image)
                    setPreviewSource()
                    console.log(data)
                })
                .catch(error => {
                    console.error(error)
                })
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <div>
                <div className="loading">
                    {loading ?
                        (<ReactLoading className="pt-5 mt-5" type={"cylon"} color={"blue"} height={"20%"} width={'20%'} />)
                        :
                        (<div className="not-loading" >
                            <h1 className='upload-form-header mt-5 pt-5' >Upload your image </h1>
                            <form onSubmit={handleSubmitFile} className='form upload-image-form' >
                                <input type="file"
                                    name="image"
                                    onChange={handleFileInputChange}
                                    className="form-input mb-5"
                                />
                                <Button className="btn" type="submit">
                                    Submit </Button>
                            </form>
                            <div>
                                {previewSource && (
                                    <Card.Img src={previewSource} alt="chosen" />
                                )}
                                {processedImage && <Card.Img src={`data:image/jpeg;base64,${processedImage}`} alt="chosen" />}


                            </div>
                        </div>)}
                </div>





            </div>
        </>
    )
}

export default HarashokuImageUploader
