import { useState } from "react";
import json from "./data.json";
import "./FileExplorer.styles.css";

const List = ({ list, addNodeToList, deleteNodeFromList }) => {
  const [isExpanded, setIsExpanded] = useState({});

  const handleExpanded = (name, expand) => {
    setIsExpanded((prevState) => ({
      ...prevState,
      [name]: expand ?? !prevState[name],
    }));
  };

  return (
    <div className="container">
      {list.map((node) => (
        <div key={node.id}>
          {node.isFolder && (
            <span className="cursor" onClick={() => handleExpanded(node.name)}>
              {isExpanded?.[node.name] ? "➕" : "➖"}
            </span>
          )}
          <span className="cursor" onClick={handleExpanded}>
            {node.isFolder ? "📂" : "📄 "}{" "}
          </span>
          <span
            className={`${node.isFolder ? "cursor" : ""}`}
            onClick={handleExpanded}
          >
            {" "}
            {node.name}{" "}
          </span>
          {node.isFolder && (
            <span
              onClick={() => {
                addNodeToList(node.id);
                handleExpanded(node.name, true);
              }}
            >
              🆕
            </span>
          )}

          <span className="cursor" onClick={() => deleteNodeFromList(node.id)}>
            {" "}
            <img
              src="https://cdn-icons-png.flaticon.com/512/484/484662.png"
              alt="bin"
              height={15}
            />
          </span>
          {isExpanded?.[node.name] && node?.children && (
            <List
              list={node.children}
              addNodeToList={addNodeToList}
              deleteNodeFromList={deleteNodeFromList}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default function FileExplorer() {
  const [data, setData] = useState(json);

  const addNodeToList = (parenId) => {
    const name = prompt("Enter Folder Name");
    const updateTree = (list) => {
      return list.map((node) => {
        if (node.id === parenId) {
          return {
            ...node,
            children: [
              ...node.children,
              { id: Date.now().toString(), name, isFolder: true, children: [] },
            ],
          };
        }
        if (node.children) {
          return { ...node, children: updateTree(node.children) };
        }
        return node;
      });
    };

    setData((prev) => updateTree(prev));
  };

  const deleteNodeFromList = (itemId) => {
    const updateTree = (list) => {
      return list
        .filter((node) => node.id !== itemId)
        .map((node) => {
          if (node.children) {
            return { ...node, children: updateTree(node.children) };
          }
          return node;
        });
    };
    setData((prev) => updateTree(prev));
  };
  return (
    <div className="App">
      <h1>File/Folder Explorer</h1>
      <List
        list={data}
        addNodeToList={addNodeToList}
        deleteNodeFromList={deleteNodeFromList}
      />
    </div>
  );
}
