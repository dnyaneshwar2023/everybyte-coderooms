import React from "react";
import Input from "@material-ui/core/Input";
import { InputLabel } from "@material-ui/core";
import { Button } from "@material-ui/core";
import NoteAddIcon from "@material-ui/icons/NoteAdd";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";
function Create() {
  const navigate = useNavigate();
  const createRoom = () => {
    const id = nanoid();

    navigate(`/edit/${id}`);
  };

  return (
    <>
      <div className="row  w-100 justify-content-center mt-lg-5">
        <div className="col mx-auto mt-5 text-center">
          <h2>Create New Paste</h2>
          <br />
          <form action="">
            <InputLabel variant="standard" color="secondary">
              Room Name
            </InputLabel>
            <Input required="true"></Input>
            <br />
            <br />
            <Button
              type="submit"
              className="createbutton"
              variant="outlined"
              color="primary"
              onClick={createRoom}
            >
              {" "}
              Create
              <NoteAddIcon />{" "}
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Create;
