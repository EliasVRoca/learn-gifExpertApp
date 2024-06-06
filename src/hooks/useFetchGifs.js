import { useEffect, useState } from "react";
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        getGifs(category)
            .then(images => {
                setImages(images);
                setIsLoading(false);
            })
            .catch(e => {
                console.error(e);
                setIsLoading(false);
            });
    }, [category]);
    return {
        images: images,
        isLoading: isLoading
    }

}
