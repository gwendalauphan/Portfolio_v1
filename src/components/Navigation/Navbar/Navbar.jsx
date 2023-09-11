import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import feather from 'feather-icons';
import './Navbar.scss';
import { logo, menu, close } from '../../../assets';
import { styles } from '../../../../styles';
//import { navLinks } from '../../../constants';

const navLinks = [
    { id: 'home', title: 'Accueil', path: '/' },
    { id: 'user', title: 'About', path: '/world1' },
    { id: 'briefcase', title: 'Work', path: '/world1' },
    { id: 'cpu', title: 'Projects', path: '/world2' },
    { id: 'phone', title: 'Contact', path: '/world3' },
    { id: 'book-open', title: 'Future', path: '/world4' },
];



function Navbar() {

    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        feather.replace();
      }, []);

    useEffect(() => {
        const handleScroll = () => {
        const scrollTop = window.scrollY;
        if (scrollTop > 100) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="header flex items-center justify-between ">
            <div className="header__logo">
                <strong className="text-lg sm:text-xl lg:text-2xl">LOGO</strong>
            </div>

            <nav className={`navbar ${scrolled ? "bg-primary" : "bg-transparent"} flex items-center`}>


            <ul className='navbar__menu flex space-x-4 sm:space-x-6 lg:space-x-8 list-none hidden sm:flex flex-row '>
                {navLinks.map((nav) => (
                    <li key={nav.id} className={`navbar__item`} onClick={() => setActive(nav.title)}>
                        <Link 
                            to={nav.path} 
                            className={`navbar__link text-[18px] sm:text-lg lg:text-xl font-medium cursor-pointer 
                                ${active === nav.title ? "text-white" : "text-secondary"} hover:text-white`}
                        >
                            <i data-feather={nav.id}></i>
                            {nav.title}
                        </Link>
                    </li>
                ))}
            </ul>



                <div className='sm:hidden flex flex-1 justify-end items-center'>
                    <img
                        src={toggle ? close : menu}
                        alt='menu'
                        className='w-[28px] h-[28px] object-contain cursor-pointer'
                        onClick={() => setToggle(!toggle)}
                    />
                    <div
                        className={`${
                        !toggle ? 'hidden' : 'flex'
                        } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
                    >
                        <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
                        {navLinks.map((nav) => (
                            <li
                            key={nav.id}
                            className={`${
                                active === nav.title ? "text-white" : "text-secondary"
                            } hover:text-white font-poppins font-medium cursor-pointer text-[16px]`}
                            onClick={() => {
                                setToggle(!toggle);
                                setActive(nav.title);
                            }}
                            >
                            <a href={`#${nav.id}`}>{nav.title}</a>
                            </li>
                        ))}
                        </ul>

                    </div>

                </div>
            </nav>
        </div>
        

    );
}

export default Navbar;
