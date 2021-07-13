import React, { useState } from 'react'
import CodeIcon from '@material-ui/icons/Code';
import Input from '@material-ui/core/Input';
import { InputLabel } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
function Join() {

    const [code, changeCode] = useState("")
    const history = useHistory()

    const joinRoom = () => {
        history.push(`/edit/${code}`)
    }

    return (
        <>
            <div className="row  w-100 justify-content-center mt-lg-5">
                <div className="col mx-auto mt-5 text-center">
                    <h2>Join Using Room Code</h2>
                    <br />
                    <form action="">
                        <InputLabel variant="standard" color="secondary">Enter Room Code</InputLabel>
                        <Input onChange={(e) => {
                            changeCode(e.target.value)
                        }} required="true"></Input>
                        <br />
                        <br />
                        <Button type="submit" className="createbutton" variant="outlined" color="primary" onClick={() => {
                            if (code) {
                                joinRoom()
                            }

                        }}> Join<CodeIcon /> </Button>
                    </form>
                </div>

            </div>
        </>
    )
}

export default Join
