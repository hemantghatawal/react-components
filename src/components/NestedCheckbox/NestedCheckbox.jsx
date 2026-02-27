import { useState } from "react";
import "./NestedCheckbox.styles.css";

const checkboxesData = [
  {
    id: 1,
    name: "Fruits",
    children: [
      {
        id: 2,
        name: "Citrus",
        children: [
          { id: 3, name: "Orange" },
          { id: 4, name: "Lemon" },
          { id: 5, name: "Lime" },
        ],
      },
      {
        id: 6,
        name: "Berries",
        children: [
          { id: 7, name: "Strawberry" },
          { id: 8, name: "Blueberry" },
          { id: 9, name: "Raspberry" },
        ],
      },
    ],
  },
  {
    id: 10,
    name: "Vegetables",
    children: [
      {
        id: 11,
        name: "Leafy",
        children: [
          { id: 12, name: "Spinach" },
          { id: 13, name: "Lettuce" },
        ],
      },
      {
        id: 14,
        name: "Root",
        children: [
          { id: 15, name: "Carrot" },
          { id: 16, name: "Beetroot" },
        ],
      },
    ],
  },
  {
    id: 17,
    name: "Dairy",
    children: [
      { id: 18, name: "Milk" },
      { id: 19, name: "Cheese" },
      { id: 20, name: "Yogurt" },
    ],
  },
];

const Checkbox = ({ checkboxes, checkedState, setCheckedState }) => {
  const handleChange = (isChecked, cb) => {
    setCheckedState((c) => {
      const newState = { ...c, [cb.id]: isChecked };

      // ✅ 1. Update all children
      const updateChildren = (node) => {
        node.children?.forEach((child) => {
          newState[child.id] = isChecked;

          updateChildren(child);
        });
      };
      updateChildren(cb);

      //  if all the children are checked then mark parent as check

      const verifyChecked = (node) => {
        // leaf node (no children)
        if (!node.children) {
          return newState[node.id] || false;
        }

        const allChildrenChecked = node.children.every((child) =>
          verifyChecked(child),
        );
        newState[node.id] = allChildrenChecked;
        return allChildrenChecked;
      };

      checkboxesData.forEach((node) => verifyChecked(node));

      return newState;
    });
  };

  return (
    <div>
      {checkboxes.map((cb) => (
        <div key={cb.id} className="checkbox">
          <input
            type="checkbox"
            name=""
            id={cb.id}
            checked={checkedState[cb.id]}
            onChange={(e) => handleChange(e.target.checked, cb)}
          />
          <label htmlFor={cb.id}>{cb.name}</label>
          {cb?.children && (
            <div>
              <Checkbox
                checkboxes={cb.children}
                checkedState={checkedState}
                setCheckedState={setCheckedState}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default function NestedCheckbox() {
  const [checkboxes] = useState(checkboxesData);
  const [checkedState, setCheckedState] = useState({});

  return (
    <div className="App">
      <h1>Nested Checkboxes</h1>
      <div className="checkbox-container">
        <Checkbox
          checkboxes={checkboxes}
          checkedState={checkedState}
          setCheckedState={setCheckedState}
        />
      </div>
    </div>
  );
}
