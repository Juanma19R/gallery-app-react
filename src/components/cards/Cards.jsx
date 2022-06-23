import React, { useEffect, useState } from 'react';
import Card from './Card';

const Cards = () => {
    const [images, setImages] = useState([]);

    const request = async () => {
        const res = await fetch('https://api.unsplash.com/photos/?client_id=8VTXx_dKSK1QCtpmsAL3S7tI6NAyoY1I9SW7aMEpp8g');
        const data = await res.json();
        setImages(data);
    }

    useEffect(() => {
        request();
    }, []);

    return (
        <>
            {images.map((img) => {
                return <Card key={img.id} img={img.urls.regular}/>
            })}
        </>
    );
}

export default Cards;