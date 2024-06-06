import PropTypes from 'prop-types';
import { getGifs } from '../helpers/getGifs';



export const GifGrid = ({ category = '' }) => {

    getGifs(category);

    return (
        <>
            <h2 className="text-center bg-blue-100 py-2 font-semibold text-xl">HOLA A TODOS</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt="" />
                </div>
            </div>
        </>
    )
}
GifGrid.propTypes = {
    category: PropTypes.string
}