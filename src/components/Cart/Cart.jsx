import React from 'react'
import './Cart.scss';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
const Cart = () => {

    const data=[
        {
            id: 1,
            img: "https://images.pexels.com/photos/12512201/pexels-photo-12512201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img2: "https://images.pexels.com/photos/10545200/pexels-photo-10545200.jpeg",
            title: "Long sleeve graphics T-shirt",
            desc: "Long sleeve perfectly styled ",
            isNew: true,
            oldPrice: 549,
            price: 499,
        },
        {
            id: 2,
            img: "https://images.pexels.com/photos/840916/pexels-photo-840916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Coat",
            desc: "Want to look gentlemen! Try this ",
            isNew: true,
            oldPrice: 2999,
            price: 1999,
        },
    ]
  return (
    <div className='cart'>
        <h1>Product in your Cart</h1>
        {data?.map(item=>(
            <div className="item" key={item.id}>
                <img src={item.img} alt="" />
                <div className="details">
                    <h1>{item.title}</h1>
                    <p>{item.desc?.substring(0,100)}</p>
                    <div className="price">1 x ₹{item.price}</div>
                </div>
                <DeleteOutlinedIcon className='delete'/>
            </div>
        ))}
    <div className="total">
            <span>SUBTOTAL</span>
            <span>₹1999</span>
        </div>
        <button>PROCEED TO CHECKOUT</button>
        <span className='reset'>RESET CART</span>
    </div>
  )
}

export default Cart