import React, { useEffect, useState } from 'react';
import api from '../utils/api';
import Card from '../components/Card';

const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        api()
            .then((memes) => setData(memes?.data?.memes))
            .catch((error) => console.error('Error fetching memes:', error));
    }, []);

    return (
        <div className="App min-h-screen bg-gray-100 flex flex-col items-center">
            <h1 className="text-4xl font-bold my-8">Meme Generator App</h1>

            <div className='flex flex-wrap'>
                {data.map((meme) => (
                    <Card key={meme.id} img={meme.url} title={meme.name} />
                ))}
            </div>

        </div>
    );
}

export default Home;
