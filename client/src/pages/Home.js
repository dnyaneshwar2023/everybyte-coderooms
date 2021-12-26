import React from 'react'
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom'
import code from './code.svg'
function Home() {
    return (
        <>

            <div className="row  w-100 justify-content-center mt-lg-5">
                <div className="col mx-auto mt-5 text-center d-flex flex-column">
                    <h1>Welcome To EveryByte</h1>
                    <br />
                    <h2>Create your code room now!!</h2>

                    <br />
                    <NavLink exact to="/create" style={{ textDecoration: 'none' }}>
                        <Button className="text-center mainbtn" variant="outlined" color="primary">Create New</Button>
                    </NavLink>
                    <br />
                    <NavLink exact to="/join" style={{ textDecoration: 'none' }} >
                        <Button className="text-center mainbtn" variant="outlined" color="primary">Join existing</Button>
                    </NavLink>

                </div>

                <div className="col ms-auto h-50 mr-auto">
                    <img src={code} alt="Code" className="img" />
                </div>

            </div>


        </>
    )
}

export default Home
