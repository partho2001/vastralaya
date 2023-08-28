import React from 'react'
import './Categories.scss';
import {Link} from "react-router-dom"

const Categories = () => {
  return (
    <div className="categories">
        <div className="col">
            <div className="row">
                <img src="https://images.pexels.com/photos/10442617/pexels-photo-10442617.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <button className='button'>
                    <Link className='link' to="/products/1">
                        Sale
                    </Link>
                </button>
            </div>
            <div className="row">
                <img src="https://images.pexels.com/photos/12911177/pexels-photo-12911177.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                <button className='button'>
                    <Link className='link' to="/products/1">
                        Women
                    </Link>
                </button>
            </div>
        </div>
        <div className="col">
            <div className="row">
            <img src="https://images.pexels.com/photos/17459725/pexels-photo-17459725/free-photo-of-stylish-man-in-hat-and-sunglasses-posing-near-building-wall.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <button className='button'>
                    <Link className='link' to="/products/1">
                        New Season
                    </Link>
                </button>
            </div>
        </div>
        <div className="col col-l">
            <div className="row">
                <div className="col">
                    <div className="row">
                    <img src="https://images.pexels.com/photos/2896853/pexels-photo-2896853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        <button className='button'>
                            <Link className='link' to="/products/1">
                                Men
                            </Link>
                        </button>
                    </div>
                </div>
                <div className="col">
                    <div className="row">
                    <img src="https://images.pexels.com/photos/1687719/pexels-photo-1687719.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        <button className='button'>
                            <Link className='link' to="/products/1">
                                Accessories
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
            <div className="row">
            <img src="https://images.pexels.com/photos/16927933/pexels-photo-16927933/free-photo-of-hands-and-legs-of-sitting-man.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        <button className='button'>
                            <Link className='link' to="/products/1">
                                Shoes
                            </Link>
                        </button>
            </div>
        </div>
    </div>
  )
}

export default Categories