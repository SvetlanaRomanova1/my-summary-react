import React, {useState} from "react";
import "./style.css";

function ImageZoom({src, alt}) {

    const [isZoomed, setIsZoomed] = useState(false);

    const toggleZoom = () => {
        setIsZoomed(!isZoomed);
    };

    return (
        <div className={`image-container ${isZoomed ? "zoomed" : ""}`}>
            <img className="profile-avatar" src={src} alt={alt} onClick={toggleZoom} />
        </div>
    )
}

export default ImageZoom;