import React from "react";

export default function Task(props) {
  let [isEdit, setIsEdit] = React.useState(false);
  let [val, setVal] = React.useState(props.defaultValue);
  let handleIsEdit = () => {
    setIsEdit(!isEdit);
  };
  let handleSave = () => {
    if (val === props.defaultValue || val === "") {
      return;
    }
    props.onSave(props.id, val);
    setIsEdit(false);
  };
  return (
    <>
      <div className="list">
        {!isEdit ? (
          <span>{props.defaultValue}</span>
        ) : (
          <textarea
            value={val}
            onChange={(event) => setVal(event.target.value)}
          ></textarea>
        )}

        {isEdit ? (
          <button className="edit" onClick={handleSave}>
            save
          </button>
        ) : (
          <button className="edit" onClick={handleIsEdit}>
            edit
          </button>
        )}
        <button className="delete" onClick={() => props.onDelete(props.id)}>
          delete
        </button>
      </div>
    </>
  );
}
