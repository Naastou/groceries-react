import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { ToastContainer, toast } from "react-toastify";

import Items from "./Items";
import Form from "./Form";

const App = () => {
  const [list, setList] = useState([]);

  const setLocalStorage = (item) => {
    localStorage.setItem("key", JSON.stringify(item));
  };

  const addItem = (item) => {
    const newItem = {
      id: uuidv4(),
      item: item,
      completed: false,
    };
    setList([...list, newItem]);
    setLocalStorage([...list, newItem]);
    toast.success("Item added!");
  };

  const removeItem = (id) => {
    setList(list.filter((element) => element.id !== id));
    setLocalStorage(list.filter((element) => element.id !== id));
    toast.warn("Item remove!");
    console.log(id);
  };
  const editItem = (id, completed) => {
    const newList = list.map((item) => {
      if (item.id === id) {
        item.completed = completed;
      }
      return item;
    });
    setList(newList);
    setLocalStorage(newList);
  };

  useEffect(() => {
    JSON.parse(localStorage.getItem("key"))
      ? setList(JSON.parse(localStorage.getItem("key")))
      : setList([]);
  }, []);

  return (
    <section className="section-center">
      <ToastContainer position="top-center" />
      <Form addItem={addItem} />
      <Items items={list} removeItem={removeItem} editItem={editItem} />
    </section>
  );
};

export default App;
