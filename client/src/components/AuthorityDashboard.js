import React, { useState } from 'react';
import './resD.css'
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList,
    FaRecycle,
    FaBiohazard
} from "react-icons/fa";
import graph from './Asset.png'
import { GiBrandyBottle } from 'react-icons/gi'
import { BsApple } from 'react-icons/bs'
import { NavLink } from 'react-router-dom';


const Sideba = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem = [
        {
            path: "/",
            name: "Dashboard",
            icon: <FaTh />
        },
        {
            path: "/about",
            name: "About",
            icon: <FaUserAlt />
        },
        {
            path: "/analytics",
            name: "Analytics",
            icon: <FaRegChartBar />
        },
        {
            path: "/comment",
            name: "Comment",
            icon: <FaCommentAlt />
        },
        {
            path: "/product",
            name: "Product",
            icon: <FaShoppingBag />
        },
        {
            path: "/productList",
            name: "Product List",
            icon: <FaThList />
        }
    ]
    return (
        <div className='row'>
            <div style={{ width: isOpen ? "200px" : "100px" }} className="sidebar col-md-2 ">
                <div className="top_section text-center">
                    <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">Logo</h1>
                    <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
                        <div className='text-center mx-3'>
                            <FaBars onClick={toggle} />
                        </div>

                    </div>
                </div>
                <div className="d-flex flex-column align-items-center">
                    {
                        menuItem.map((item, index) => (
                            <NavLink to={item.path} key={index} className="link" activeclassName="active">
                                <div className="icon">{item.icon}</div>
                                <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
                            </NavLink>
                        ))
                    }
                </div>

            </div>


            <div className='col-md-10 p-4'>
                <h2>Hi, Admin</h2>
                <div className="p-4 rounded-md border ">
                    <h4>Hostel Activities</h4>
                    <div className="row p-3">
                        <div className="col-md-3 shadow-sm mx-3">
                            <div className="d-flex">
                                <button className="p-2 border btn">

                                    <BsApple />
                                </button>

                                <div className='d-flex p-2'>
                                    <p className='m-auto'>Bio-degradable</p>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 shadow-sm">
                            <div className="d-flex">
                                <button className="p-2 border btn">

                                    <GiBrandyBottle />
                                </button>

                                <p className='my-auto px-2'>Non-Biodegradable</p>

                            </div>
                        </div>
                    </div>
                    <div className="row p-3">
                        <div className="col-md-3 shadow-sm mx-3">
                            <div className='d-flex p-2'>
                                <button className="p-2 border btn">

                                    <FaRecycle />
                                </button>
                                <div className='d-flex p-2'>
                                    <p className='m-auto'>Recyclable</p>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 shadow-sm">
                            <div className="d-flex">
                                <button className='p-2 border btn'><FaBiohazard /></button>

                                <div className='d-flex p-2'>
                                    <p className='m-auto'>Domestic Hazardous</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-10 p-4 m-auto'>
              
                <div className="p-4 rounded-md border w-100">
                    <h4>Overall</h4>
                   
            <div >
              <img className='w-100' src={graph} alt="" srcset="" />
            </div>
                </div>
            </div>
            </div>


           
        </div>
    );
};

export default Sideba;