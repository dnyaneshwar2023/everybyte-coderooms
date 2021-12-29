import React, { useEffect, useState } from "react";
import Lottie from "react-lottie";
import { useParams } from "react-router-dom";

import useAuth from "../auth/useAuth";
import Progress from "../animations/progress.json";
import roomApi from "../apis/rooms";
import LockedAnimation from "../animations/locked.json";
import Editor from "./Editor";

const EditPage = () => {
  const [progress, setProgress] = useState(true);
  const [authorized, setAuthorized] = useState();
  const { user } = useAuth();
  const { roomid } = useParams();
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
      {authorized === true && <Editor roomid={roomid} />}
    </>
  );
};

export default EditPage;
