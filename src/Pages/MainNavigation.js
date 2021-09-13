import React from 'react'
import { Link } from 'react-router-dom'
import classes from './layout.module.css'
import logo from './images/logo.jpg'




function MainNavigation() {
    return (
        <div>
            <header className={classes.header}>
                <div className={classes.main}>
                    <img src={logo} alt='logo' className={classes.logo} />
                </div>
                <nav>
                    <ul>
                        <li>
                            <Link to='/' className={classes.link}>
                                Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link to='/teams' className={classes.link}>
                                Teams
                            </Link>
                        </li>
                        <li>
                            <Link to='/add-new' className={classes.link}>
                                Add New Team
                            </Link>
                        </li>
                        <li>
                            <Link to='/sign-in' className={classes.link}>
                                LogIn
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default MainNavigation
