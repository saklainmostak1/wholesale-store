import React from 'react';
import img2 from '../../../image/img2.png'
import Card from './Card';

const HomeCard = () => {
    const datas = [
        {
            id: 1,
            name: 'Super Sell',
            description: 'New Collection',
            img: img2
        },
        {
            id: 2,
            name: 'New Sell',
            description: 'Best Products',
            img: img2
        }
    ]
    return (
        <div className='grid mt-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 m-10'>
        {
            datas.map(data => <Card
            key={data.id}
            data={data}
            ></Card> )
        }
    </div>
    );
};

export default HomeCard;

