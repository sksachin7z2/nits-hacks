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
import { GiBrandyBottle } from 'react-icons/gi'
import { BsApple } from 'react-icons/bs'
import { NavLink } from 'react-router-dom';
import Cookies from 'js-cookie'
import Modal from './Modal';

const Sidebar = ({ children }) => {
const [biodegradable, setBiodegradable] = useState(false)
const [nonBiodegradable, setNonBiodegradable] = useState(false)
const [recyclable, setRecyclable] = useState(false)
const [domestic, setDomestic] = useState(false)

const [biowaste, setBiodwaste] = useState(false)
const [nonBiowaste, setNonBiowaste] = useState(false)
const [recycwaste, setRecycwaste] = useState(false)
const [domeswaste, setDomeswaste] = useState(false)
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
          
            <div style={{ width: isOpen ? "200px" : "100px" }} className="sidebar col-md-2">
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
                <div className="d-flex justify-content-between">
                    <h2>Hi {Cookies.get('name')}</h2>
                    <div>
                        <img  className='rounded-full' src={Cookies.get('dp')} alt="" />
                    </div>
                    </div>
                
                <div className="p-4 rounded-md border ">
                    <h4>Select type of waste</h4>
                    <p>You can submit the waste you generated</p>
                    <div className="row p-3">
                        <div onClick={()=>{setBiodegradable(true)}} className="col-md-3">
                            <div className="d-flex">
                                <button className="p-2 border btn">

                                    <BsApple />
                                </button>

                                <div className='d-flex p-2'>
                                    <p className='m-auto'>Bio-degradable</p>
                                    {biodegradable&&<Modal setState={setBiodegradable}/>}
                                </div>
                            </div>
                        </div>
                        <div  onClick={()=>{setNonBiodegradable(true)}} className="col-md-3">
                            <div className="d-flex">
                                <button className="p-2 border btn">

                                    <GiBrandyBottle />
                                </button>

                                <p className='my-auto px-2'>Non-Biodegradable</p>
                                {nonBiodegradable&&<Modal setState={setNonBiodegradable}/>}
                            </div>
                        </div>
                    </div>
                    <div className="row p-3">
                        <div  onClick={()=>{setRecyclable(true)}} className="col-md-3">
                            <div className='d-flex p-2'>
                                <button className="p-2 border btn">

                                    <FaRecycle />
                                </button>
                                <div className='d-flex p-2'>
                                    <p className='m-auto'>Recyclable</p>
                                    {recyclable&&<Modal setState={setRecyclable}/>}
                                </div>
                            </div>
                        </div>
                        <div  onClick={()=>{setDomestic(true)}} className="col-md-3">
                            <div className="d-flex">
                                <button className='p-2 border btn'><FaBiohazard /></button>

                                <div className='d-flex p-2'>
                                    <p className='m-auto'>Domestic Hazardous</p>
                                   {domestic&& <Modal setState={setDomestic}/>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-10 p-4'>
              
                <div className="p-4 rounded-md  ">
                    <h4>Your Submission</h4>
              <p>No Submission till now</p>
                   
                </div>
            </div>
            </div>



           
        </div>
    );
};

export default Sidebar;