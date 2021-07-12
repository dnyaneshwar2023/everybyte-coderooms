import React from 'react'
import AceEditor from "react-ace";
// Themes
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-monokai"
import "ace-builds/src-min-noconflict/theme-eclipse"
import "ace-builds/src-noconflict/theme-solarized_light"
import "ace-builds/src-noconflict/theme-solarized_dark"
import "ace-builds/src-noconflict/theme-dracula"


// Languages
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-c_cpp"
import "ace-builds/src-noconflict/mode-python"
import "ace-builds/src-min-noconflict/mode-javascript"

// Language Tools
import 'ace-builds/src-noconflict/ext-language_tools'
import "ace-builds/src-noconflict/ext-beautify"
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import ShareIcon from '@material-ui/icons/Share';
import Tooltip from '@material-ui/core/Tooltip';
import MicIcon from '@material-ui/icons/Mic';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import MicOffIcon from '@material-ui/icons/MicOff';
import { useState } from 'react'
import './index.css';


import socket from './socketConnection'


function Editor() {
    // usestate Hooks
    const [language, changeLanguage] = useState("c_cpp")
    const [fontsize, changeSize] = useState(12)
    const [theme, changeTheme] = useState("monokai")
    const [mic, changeMic] = useState(false);
    const [code, setCode] = useState('')
    const [stdin, changeInput] = useState("");
    const [stdout, changeOutput] = useState("");

    const runner = async () => {
        var runnerid = "";
        await fetch('https://api.paiza.io/runners/create?' + new URLSearchParams({
            source_code: code,
            language: (language === "c_cpp") ? "cpp" : language,
            input: stdin,
            longpoll: 'true',
            api_key: 'guest'
        }), { method: "POST" })
            .then(response => response.json())
            .then(json => {
                runnerid = json.id;
            })
        var flag = true;
        while (flag) {

            await fetch('https://api.paiza.io/runners/get_status?' + new URLSearchParams({
                id: runnerid,
                api_key: 'guest'
            }), { method: "GET" })
                .then(response => response.json())
                .then(json => {
                    flag = (json.status !== "completed")
                })
        }

        await fetch('https://api.paiza.io/runners/get_details?' + new URLSearchParams({
            id: runnerid,
            api_key: 'guest'
        }), { method: "GET" })
            .then(response => response.json())
            .then(json => {
                changeOutput(json.stdout)
                socket.emit('changeOutput', json.stdout)
            })
    }

    // Socket Client
    socket.on('codeChange', (data) => {
        setCode(data)
    })

    socket.on('changeLanguage', (data) => {
        console.log(data);
        changeLanguage(data)
    })

    socket.on('changeInput', (data) => {
        changeInput(data)
    })
    socket.on('changeOutput', (data) => {
        changeOutput(data)
    })

    return (
        <div>
            <div className="row mt-3 w-100">
                <div className="col resizable">
                    <AceEditor
                        className="texteditor m-3"
                        mode={language}
                        width='auto'
                        height="80vh"
                        value={code}
                        fontSize={fontsize}
                        theme={theme}
                        enableLiveAutocompletion="true"
                        name="sourcecode"
                        editorProps={{ $blockScrolling: true, $onScrollLeftChange: true }}

                        onChange={(e) => {
                            setCode(e)
                            socket.emit('codeChange', e)
                        }}

                    />
                </div>
                <div className="col-2 mt-3 options">
                    <div className="row">
                        <div className="mr-5">
                            <h5>Language</h5>
                            <Select defaultValue="c_cpp" value={language} className="mw-120" onChange={(e) => {
                                changeLanguage(e.target.value)
                                socket.emit('changeLanguage', e.target.value)
                            }}>
                                <MenuItem value={"c_cpp"}>C/C++</MenuItem>
                                <MenuItem value={"java"}>Java</MenuItem>
                                <MenuItem value={"python"}>Python</MenuItem>
                                <MenuItem value={"javascript"}>Javascript</MenuItem>
                            </Select>
                            <br />
                            <br />
                            <br />
                            <h5>Font Size</h5>
                            <Select defaultValue={12} className="mw-120" onChange={(e) => {
                                changeSize(e.target.value)
                            }}>
                                <MenuItem value={12}>12</MenuItem>
                                <MenuItem value={14}>14</MenuItem>
                                <MenuItem value={16}>16</MenuItem>
                                <MenuItem value={18}>18</MenuItem>
                                <MenuItem value={20}>20</MenuItem>
                            </Select>

                            <br />
                            <br />
                            <br />
                            <h5>Theme</h5>
                            <Select defaultValue="monokai" className="mw-120" onChange={(e) => {
                                changeTheme(e.target.value)
                            }}>
                                <MenuItem value={"github"}>Github</MenuItem>
                                <MenuItem value={"monokai"}>Monokai</MenuItem>
                                <MenuItem value={"solarized_light"}>Solarized Light</MenuItem>

                                <MenuItem value={"solarized_dark"}>Solarized Dark</MenuItem>
                                <MenuItem value={"eclipse"}>Eclipse</MenuItem>
                                <MenuItem value={"dracula"}>Dracula</MenuItem>

                            </Select>
                            <Tooltip title="Share" aria-label="share">
                                <Button className="mx-auto d-flex" id="icons" variant="outlined" color="primary"> <ShareIcon ></ShareIcon></Button>
                            </Tooltip>
                            <Tooltip title="mic" aria-label="mic">
                                {
                                    mic ? <Button className="mx-auto d-flex" id="icons" variant="outlined" color="secondary" onClick={() => {
                                        changeMic(!mic)
                                    }}> <MicIcon></MicIcon></Button> :
                                        <Button className="mx-auto d-flex" id="icons" variant="outlined" color="primary" onClick={() => {
                                            changeMic(!mic)
                                        }}> <MicOffIcon></MicOffIcon></Button>
                                }
                            </Tooltip>

                            <Tooltip title="Run Code" aria-label="run">
                                <Button className="mx-auto d-flex" id="icons" variant="outlined" color="primary" onClick={() => { runner() }}> <PlayArrowIcon /></Button>
                            </Tooltip>

                        </div>
                    </div>
                </div>
            </div>

            <div className="row mt-3 w-100">

                <div className="col">
                    <h3 className="text-center">Input</h3>
                    <AceEditor
                        className="texteditor m-3"
                        width='auto'
                        height="40vh"
                        fontSize={fontsize}
                        theme={theme}
                        value={stdin}
                        name="stdin"
                        editorProps={{ $blockScrolling: true, $onScrollLeftChange: true }}
                        onChange={(e) => {
                            changeInput(e)
                            socket.emit('changeInput', e)
                        }}
                    />
                </div>
                <div className="col">
                    <h3 className="text-center">Output</h3>
                    <AceEditor
                        className="texteditor m-3"
                        width='auto'
                        height="40vh"
                        value={stdout}
                        fontSize={fontsize}
                        theme={theme}
                        name="stdout"
                        editorProps={{ $blockScrolling: true, $onScrollLeftChange: true }}
                        onChange={(e) => {
                            changeOutput(e)
                        }}
                    />
                </div>
            </div>


        </div>
    )
}

export default Editor
