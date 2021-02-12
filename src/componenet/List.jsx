import React, { useContext, useState } from "react";
import { userContext } from "../App";
import "../style/List.css";

const List = (props) => {
  const context = useContext(userContext);
  const List = context.list;
  const dispatch = context.method;

  // console.log(List);

  const handleDelete = (e) => {
    console.log(e.target);
    let strId = e.target.getAttribute("id");
    let intId = parseInt(strId);
    // console.log(intId);

    dispatch({
      type: "delete",
      id: intId,
    });
  };
  const handleEdit = (e) => {
    let strId = e.target.getAttribute("id");
    let intId = parseInt(strId);
    let index = List.findIndex((item) => item.id == intId);
    props.method(List[index].data, intId);
  };

  const handleRead = (e) => {
    let strId = e.target.getAttribute("id");
    let intId = parseInt(strId);
    dispatch({
      type: "read",
      read: true,
      id: intId,
    });
  };

  const handleUnRead = (e) => {
    let strId = e.target.getAttribute("id");
    let intId = parseInt(strId);
    dispatch({
      type: "read",
      read: false,
      id: intId,
    });
  };

  return (
    <div className="list-box">
      {List.length === 0 ? (
        <div>
          <h3 className="list-empty">Your To Do List is Empty</h3>
        </div>
      ) : (
        <div>
          {List.map((item) => {
            return (
              <div className="list-item">
                <p className={item.read ? "data" : ""}>{item.data}</p>

                {/* {item.data} */}
                <div className="list-item-btns">
                  {/* {(item.read) ? "" : <button id={item.id} className="list-item-read-btn" onClick={handleRead}>Read</button>} */}
                  <button
                    id={item.id}
                    className={
                      item.read
                        ? "list-item-read-btn hide"
                        : "list-item-read-btn"
                    }
                    onClick={handleRead}
                  >
                    Read
                  </button>
                  <button
                    id={item.id}
                    className={
                      item.read
                        ? "list-item-edit-btn hide"
                        : "list-item-edit-btn"
                    }
                    onClick={handleEdit}
                  >
                    Edit
                  </button>
                  <button
                    id={item.id}
                    className={
                      item.read
                        ? "list-item-delete-btn"
                        : "list-item-delete-btn hide"
                    }
                    onClick={handleDelete}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default List;
