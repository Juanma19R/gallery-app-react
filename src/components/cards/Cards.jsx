import { useFetchImages } from '../../hooks/useFetchImages';
import Form from '../form/Form';
import Loading from '../loading/Loading';
import Card from './Card';

const Cards = () => {
    const [images, loading, handleSubmit] = useFetchImages();

    return (
        <div className='text-center'>
            <Form handleSubmit={handleSubmit}/>
            <hr />
            {loading && <Loading />}
            <div className='row'>
                {images.map((img) => {
                    return <div className='col' key={img.id}><Card img={img.urls.regular}/></div>
                })}
            </div>
        </div>
    );
}

export default Cards;