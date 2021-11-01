import React from 'react'
import Navigation from '../Navigation'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV, faSearch } from '@fortawesome/free-solid-svg-icons'

function Header(){
    return (
        <header className="border-b p-3 flex justify-between items-center">
            <Navigation />
            <Link to="/" className="font-bold">
              NY Times Most Popular
            </Link>
            <FontAwesomeIcon 
                icon={faSearch}
            />
            <FontAwesomeIcon 
                icon={faEllipsisV}

            />

        </header>
    )
}

export default Header
