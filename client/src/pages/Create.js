import React, { useState } from "react";
import Input from "@material-ui/core/Input";
import { InputLabel } from "@material-ui/core";
import { Button } from "@material-ui/core";
import NoteAddIcon from "@material-ui/icons/NoteAdd";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";
import Lottie from "react-lottie";

import Progress from "../animations/progress.json";
import roomApi from "../apis/rooms";
import useAuth from "../auth/useAuth";

function Create() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [progress, setProgress] = useState(false);
  const [title, setTitle] = useState("");
  const createRoom = async (id) => {
    const result = await roomApi.createRoom(title, id, user.email);
    return result;
  };
  const handleSubmit = async () => {
    setProgress(true);
    const id = nanoid();
    createRoom(id).then((res) => {});
    setTimeout(() => {
      setProgress(false);
      navigate(`/edit/${id}`);
    }, 3000);
  };

  return (
    <>
      <div className="row  w-100 justify-content-center align-items-center mt-lg-5 d-flex">
        <div className="col mx-auto mt-5 text-center">
          <h2>Create New Room</h2>
          <br />

          <InputLabel variant="standard" color="secondary">
            Room Name
          </InputLabel>
          <Input
            required={true}
            onChange={(e) => setTitle(e.target.value)}
          ></Input>
          <br />
          <br />
          <Button
            type="submit"
            className="createbutton"
            variant="outlined"
            color="primary"
            onClick={handleSubmit}
          >
            Create
            <NoteAddIcon />
          </Button>

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

export default Create;
