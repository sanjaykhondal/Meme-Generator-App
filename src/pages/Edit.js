import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Text from '../components/Text';
import { createRef } from 'react';
import { exportComponentAsJPEG } from 'react-component-export-image';
import Draggable from 'react-draggable';

const Edit = () => {

    const [param] = useSearchParams();
    const [count, setCount] = useState(0);

    const ref = createRef();

    const addText = () => {
        setCount(count + 1);
    }

    return (
        <div className='w-[650px] h-[550px] flex flex-col justify-between m-3 p-2 border rounded shadow-lg mx-auto'>
            <div ref={ref}>
                <Draggable><img className='w-[350px] h-[350px]' src={param.get("url")} alt='img' /></Draggable>

                {
                    Array(count).fill(0).map((e) => (
                        <Text />
                    ))
                }

            </div>

            <div className='flex justify-center gap-2 mb-2'>
                <button onClick={addText} className='m-1 px-1  py-1 bg-blue-500 text-white rounded hover:bg-blue-700'>Add Text</button>
                <button onClick={(e) => exportComponentAsJPEG(ref)} className='m-1 px-1  py-1 bg-blue-500 text-white rounded hover:bg-blue-700'>Download</button>
            </div>
        </div>
    )
}

export default Edit 