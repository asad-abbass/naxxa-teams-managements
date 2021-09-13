import React,{useRef} from 'react'
import PersonIcon from '@material-ui/icons/Person';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import SelectTeam from './SelectTeam'
import classes from './addNewTeam.module.css'
import LockIcon from '@material-ui/icons/Lock';
import EmailIcon from '@material-ui/icons/Email';
import { Card } from '@material-ui/core';


function AddNewTeam(props) {

    const usernameInputRef = useRef();
    const passwordInputRef = useRef();
    const emailInputRef = useRef();


    function submitFormHandler(event) {
        event.preventDefault();
        const userName = usernameInputRef.current.value;
        const userPassword = passwordInputRef.current.value;
        const userEmail = emailInputRef.current.value;

        const userData = {
            username: userName,
            userpassword: userPassword,
            useremail: userEmail,
        }
        props.onAddUser(userData)
    }


    return (
        <Card>
            <form onSubmit={submitFormHandler}>
                <div className={classes.mainContainer}>
                    <p className={classes.initialHeading}>Please fill the credentials</p>
                    <div className={classes.inputMain}>
                        <label htmlFor='username' className={classes.label} >Username: </label>
                        <input type='text' placeholder='username' required id='username' className={classes.input} ref={usernameInputRef}/><PersonIcon />
                    </div>
                    <div className={classes.inputMain}>
                        <label htmlFor='username' className={classes.label}>Password: </label>
                        <input type='password' placeholder='password' required id='password' className={classes.input} ref={passwordInputRef} /><VisibilityOffIcon />
                    </div>
                    <div className={classes.inputMain}>
                        <label htmlFor='username' className={classes.label}>Confirm Password: </label>
                        <input type='password' placeholder='password' required id='password' className={classes.input} /><LockIcon />
                    </div>
                    <div className={classes.inputMain}>
                        <label htmlFor='username' className={classes.label}>Email: </label>
                        <input type='email' placeholder='password' required id='email' className={classes.input} ref={emailInputRef} /><EmailIcon />
                    </div>
                    <div>
                        <SelectTeam />
                    </div>
                    
                </div>
            </form>
        </Card>
        
    )
}

export default AddNewTeam
