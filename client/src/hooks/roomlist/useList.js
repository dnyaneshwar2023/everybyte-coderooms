import ListContext from "./context";
import { useContext } from "react";
import roomApi from "../../apis/rooms";
const useList = () => {
  const { list, setList } = useContext(ListContext);

  const removeItem = async (id) => {
    setList(list.filter((item) => item.roomid != id));
    await roomApi.deleteRoom(id);
  };

  return { list, removeItem };
};

export default useList;
