import React from 'react';
import SearchField from './SearchField';
import { useDispatch } from 'react-redux';
import { logout } from '../store/actions';

function Header(props) {
    const dispatch = useDispatch();

    let userName = localStorage.getItem("@userName") || null
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="btn btn-secondary my-2 my-sm-0 username" type="submit">
                {userName}
            </div>
            <SearchField onChange={props.changeInputOne} />
            <SearchField onChange={props.changeInputTwo} />
            <button className="btn btn-secondary my-2 my-sm-0 logout"
                type="submit" onClick={() => dispatch(logout())}>
                Logout
            </button>
        </nav>
    );
}

export default Header;