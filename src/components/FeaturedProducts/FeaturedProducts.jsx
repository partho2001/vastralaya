import React from 'react'
import './FeaturedProducts.scss';
import Card from '../Card/Card';
const FeaturedProducts = ({type}) => {
   
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
    ]

  return (
    <div className='featuredProducts'>
    <div className="top">
        <h1>{type} products</h1>
        <p>
            This products are top selling products. New seasons new wearables are here and much less price.
        </p>
    </div>
    <div className="bottom">
        {data.map(item=>(
            <Card item={item} key={item.id}/>
        ))}
    </div>
    </div>
  )
}

export default FeaturedProducts