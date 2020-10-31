import React from "react";
import Task from "./Task";

export default function TaskList() {
  let [taskList, setTaskList] = React.useState([]);
  let [textValue, setTextValue] = React.useState("");
  let id = React.useRef(1);
  const handleAddTask = () => {
    if (textValue.trim() === "") {
      return;
    }
    let object = { id: id.current, value: textValue };
    setTaskList([...taskList, object]);
    id.current += 1;
    setTextValue("");
  };

  const onChangeTextValue = (event) => {
    setTextValue(event.target.value);
  };

  const handleTaskDelete = (id) => {
    let arr = taskList.filter((el) => {
      if (el.id === id) {
        return false;
      } else return true;
    });
    setTaskList(arr);
  };

  let handleTaskUpdate = (id, val) => {
    let arr = taskList.map((el) => {
      if (el.id === id) {
        el.value = val;
      }
      return el;
    });
    setTaskList(arr);
  };
  return (
    <>
      <div id="">
        <textarea
          id="task"
          onChange={onChangeTextValue}
          value={textValue}
        ></textarea>
        <button id="btn" onClick={handleAddTask}>
          add tasks
        </button>
        {taskList.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            defaultValue={task.value}
            onDelete={handleTaskDelete}
            onSave={handleTaskUpdate}
          />
        ))}
      </div>
    </>
  );
}
