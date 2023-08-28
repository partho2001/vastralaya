import React from 'react'
import './List.scss';
import Card from '../Card/Card'
const List = () => {

    const data = [
        {
            id: 1,
            img: "https://images.pexels.com/photos/12512201/pexels-photo-12512201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img2: "https://images.pexels.com/photos/10545200/pexels-photo-10545200.jpeg",
            title: "Long sleeve graphics T-shirt",
            isNew: true,
            oldPrice: 549,
            price: 499,
        },
        {
            id: 2,
            img: "https://images.pexels.com/photos/840916/pexels-photo-840916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Coat",
            isNew: true,
            oldPrice: 2999,
            price: 1999,
        },
        {
            id: 3,
            img: "https://images.pexels.com/photos/1007018/pexels-photo-1007018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Skirt",
            
            oldPrice: 719,
            price: 499,
        },
        {
            id: 4,
            img: "https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Hat",
            
            oldPrice: 999,
            price: 699,
        },
        {
            id: 5,
            img: "https://images.pexels.com/photos/5730956/pexels-photo-5730956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Shoes",
            
            oldPrice: 1999,
            price: 1699,
        },
        {
            id: 6,
            img: "https://images.pexels.com/photos/989938/pexels-photo-989938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Belt",
            
            oldPrice: 599,
            price: 399,
        },
    ]

    return (
        <div className='list'>{data?.map(item=>(
            <Card item={item} key={item.id}/>
        ))}</div>
    )
}

export default List