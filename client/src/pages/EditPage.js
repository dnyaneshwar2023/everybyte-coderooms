import React, { useEffect, useState } from "react";
import Lottie from "react-lottie";
import { useParams } from "react-router-dom";

import useAuth from "../auth/useAuth";
import Progress from "../animations/progress.json";
import roomApi from "../apis/rooms";
import LockedAnimation from "../animations/locked.json";
import Editor from "./Editor";
import Board from "../components/Board";
import { Button } from "@material-ui/core";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import CodeIcon from "@material-ui/icons/Code";
const EditPage = () => {
  const [progress, setProgress] = useState(true);
  const [authorized, setAuthorized] = useState();
  const { user } = useAuth();
  const { roomid } = useParams();
  const [editor, setEditor] = useState(true);
  const [board, setBoard] = useState(false);

  useEffect(() => {
    roomApi.authMember(roomid, user.email).then(
      (res) => {
        if (res.data.status === "ok") {
          setAuthorized(true);
          setProgress(false);
        }
      },
      (err) => {
        setAuthorized(false);
        setProgress(false);
      }
    );
  }, []);
  return (
    <>
      {progress && (
        <Lottie
          options={{
            animationData: Progress,
            loop: true,
            autoplay: true,
          }}
          height={200}
          width={200}
          style={{
            marginTop: "10%",
          }}
        />
      )}
      {authorized === false && (
        <div
          className="d-flex flex-column"
          style={{
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "10%",
          }}
        >
          <Lottie
            options={{
              animationData: LockedAnimation,
              loop: true,
              autoplay: true,
            }}
            height={200}
            width={200}
          />
          <h2
            style={{
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            You are not authorized to access this room.Try to contact room
            author for access.
          </h2>
        </div>
      )}
      {authorized === true && (
        <div>
          <Button
            variant="outlined"
            color={editor ? "primary" : "secondary"}
            onClick={() => {
              setEditor(true);
              setBoard(false);
            }}
            size="small"
            style={{ marginLeft: 15, marginTop: 5 }}
          >
            <CodeIcon />
          </Button>
          <Button
            variant="outlined"
            color={board ? "primary" : "secondary"}
            onClick={() => {
              setEditor(false);
              setBoard(true);
            }}
            size="small"
            style={{ marginLeft: 10, marginTop: 5 }}
          >
            <BorderColorIcon />
          </Button>
        </div>
      )}
      {authorized === true && <Editor roomid={roomid} />}
      {authorized === true && board === true && (
        <div className="container border border-dark">
          <Board />
        </div>
      )}
    </>
  );
};

export default EditPage;
