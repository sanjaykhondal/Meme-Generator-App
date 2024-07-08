import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ img, title }) => {

    const navigate = useNavigate();

    return (
        <div className='w-[350px] h-[350px] flex flex-col justify-between m-2 p-2 border rounded shadow-lg mx-auto'>
            <img src={img} alt='meme' className='w-full h-3/5 object-cover rounded' />
            <h1 className='mt-2 text-lg font-bold text-center'>{title}</h1>
            <button className='mt-2 px-2  py-2 bg-blue-500 text-white rounded hover:bg-blue-700'
                onClick={e => navigate(`/edit?url=${img}`)}>
                Edit
            </button>
        </div>
    );
}

export default Card;
