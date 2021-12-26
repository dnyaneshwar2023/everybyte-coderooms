import { useContext } from "react";
import DraweConext from "./context";

export default function useDrawer() {
  const { drawer, setDrawer } = useContext(DraweConext);

  const toggleDrawer = () => {
    setDrawer(!drawer);
  };

  const result = { drawer, toggleDrawer };
  return result;
}
