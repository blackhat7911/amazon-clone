import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCart from '@material-ui/icons/ShoppingCart';

function Header() {
    return (
        <nav className='header'>
            {/* logo */}
            <div className="header__logo">
                <img src="https://mikekitko.com/wp-content/uploads/2019/10/amazon-logo-white-768x232.png" />
            </div>

            {/* search */}
            <div className="header__search">
                <input type="text" className="header__input" />
                <div className="header__searchIcon">
                    <SearchIcon />
                </div>
            </div>

            <div className="header__navItems">
                <div className="header__option">
                    <span className="header__optionLineOne">Hello</span>
                    <span className="header__optionLineTwo">Sign in</span>
                </div>  
                <div className="header__option">
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">& Orders</span>
                </div>  
                <div className="header__optionCart">
                    <ShoppingCart />
                    <span className="header_cartCount">0</span>
                </div>
            </div>
        </nav>
    )
}

export default Header;
