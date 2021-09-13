import React from 'react'
import AddNewTeam from './AddNewTeam'



function SignUp(props) {


    return (
        <div>
            <AddNewTeam  />
            <main>{props.children} </main>
        </div>
    )
}

export default SignUp
