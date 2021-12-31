import React, { useState } from "react";
import CodeIcon from "@material-ui/icons/Code";
import Input from "@material-ui/core/Input";
import { InputLabel } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import Lottie from "react-lottie";

import Progress from "../animations/progress.json";

function Join() {
  const [code, changeCode] = useState("");
  const [progress, setProgress] = useState(false);
  const navigate = useNavigate();
  const joinRoom = () => {
    setProgress(false);
    navigate(`/edit/${code}`);
  };

  return (
    <>
      <div className="row  w-100 justify-content-center align-items-center mt-lg-5 d-flex">
        <div className="col mx-auto mt-5 text-center">
          <h2>Join Using Room Code</h2>
          <br />
          <form>
            <InputLabel variant="standard" color="secondary">
              Enter Room Code
            </InputLabel>
            <Input
              onChange={(e) => {
                changeCode(e.target.value);
                console.log(code);
              }}
              required
            ></Input>
            <br />
            <br />
            <Button
              type="submit"
              className="createbutton"
              variant="outlined"
              color="primary"
              onClick={(event) => {
                if (!code) return null;
                setProgress(true);
                event.preventDefault();
                if (code) {
                  joinRoom();
                }
              }}
            >
              Join
              <CodeIcon />
            </Button>
          </form>
          {progress && (
            <Lottie
              options={{
                animationData: Progress,
                loop: true,
                autoplay: true,
              }}
              height={100}
              width={200}
              style={{
                marginTop: 10,
              }}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default Join;
