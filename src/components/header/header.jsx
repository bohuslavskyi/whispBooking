import React from 'react';
import './header.module.scss';

const Header = () => {
    return <header className="Rectangle-Copy">
                <div className="inline">
                    <p className="booking">
                        BOOKING
                    </p>
                </div>
                <div className="inline">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM9NA8lfbPCZccURfdIH2ZB51C2IO7aWBSD2lyO6oahya6fbo_iw"
                         alt=""
                         className="User"/>
                </div>
            </header>
}

export default Header;
