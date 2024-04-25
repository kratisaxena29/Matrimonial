import React, { useState } from 'react';

const Gallery = ({ images }) => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const galleryStyle = {
        display: 'flex',
        flexWrap: 'wrap'
    };

    const imgWrapperStyle = {
        position: 'relative',
        margin: '10px',
        cursor: 'pointer'
    };

    const imgStyle = {
        width: '200px',
        height: '150px'
    };

    const imgOverlayStyle = {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        opacity: '0',
        transition: 'opacity 0.6s'
    };

    const overlayStyle = {
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    };

    const buttonStyle = {
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        cursor: 'pointer',
        color: 'white',
        fontSize: '24px'
    };

    return (
        <div style={galleryStyle}>
            {images.map((image, index) => (
                <div key={index} style={imgWrapperStyle} onClick={() => setSelectedImage(image)}>
                    <img src={image.src} alt={image.alt} style={imgStyle} />
                    <div style={imgOverlayStyle}></div>
                </div>
            ))}

            {selectedImage && (
                <div style={overlayStyle} onClick={() => setSelectedImage(null)}>
                    <img src={selectedImage.src} alt={selectedImage.alt} style={imgStyle} />

                    <div style={{ ...buttonStyle, left: '10px' }} onClick={(e) => { e.stopPropagation(); setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length); }}>
                        <i className="fa fa-angle-left" aria-hidden="true"></i>
                    </div>

                    <div style={{ ...buttonStyle, right: '10px' }} onClick={(e) => { e.stopPropagation(); setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); }}>
                        <i className="fa fa-angle-right" aria-hidden="true"></i>
                    </div>

                    <div style={{ ...buttonStyle, top: '10px', right: '10px' }} onClick={() => setSelectedImage(null)}>
                        <i className="fa fa-times" aria-hidden="true"></i>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;
