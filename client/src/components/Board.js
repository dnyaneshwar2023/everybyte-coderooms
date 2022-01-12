import React from "react";
import Sketch from "react-p5";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import { Button } from "@material-ui/core";
const Board = () => {
  let p;
  const clearCanvas = () => {
    p.clear();
    p.background(220);
  };

  let canvas;

  let setup = (p5, canvasParentRef) => {
    p = p5;
    canvas = p5
      .createCanvas(window.innerWidth * 0.9, window.innerHeight * 0.8)
      .parent(canvasParentRef);

    canvas.position(60, 90);
    p5.background(220);
  };
  let draw = (p5) => {};

  let mouseDragged = (p5) => {
    p5.noStroke();
    p5.stroke(0, 0, 0);
    p5.strokeWeight(3);
    p5.fill(51);

    let px = p5.pmouseX;
    let py = p5.pmouseY;

    let x = p5.mouseX;
    let y = p5.mouseY;
    console.log(p5.line);
    p5.line(px, py, x, y);
  };

  return (
    <div>
      <Sketch setup={setup} draw={draw} mouseDragged={mouseDragged} />
      <Button
        style={{
          position: "absolute",
          top: 80,
          right: 20,
        }}
        color="secondary"
        variant="contained"
        onClick={() => clearCanvas()}
      >
        <DeleteOutlineOutlinedIcon />
      </Button>
    </div>
  );
};

export default Board;
