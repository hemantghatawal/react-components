import { useState } from "react";
import Interests from "./Interests";
import Profile from "./Profile";
import Settings from "./Settings";

import "./TabForm.styles.css";

const TabForm = () => {
  const [data, setData] = useState({
    name: "Hemant",
    age: 28,
    email: "ghatawal35@gmail.com",
    interests: ["coding", "video editing"],
    theme: "dark",
  });

  const [errors, setErrors] = useState({});
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      name: "Profile",
      component: Profile,
      validate: () => {
        const err = {};
        if (!data.name || data.name.length < 2) {
          err.name = "Name is not valid";
        }

        if (!data.age || data.age < 18) {
          err.age = "Age is not valid";
        }

        if (!data.email || data.email.length < 2) {
          err.email = "Email is not valid";
        }

        setErrors(err);

        return err.name || err.age || err.email ? false : true;
      },
    },
    {
      name: "Interests",
      component: Interests,
      validate: () => {
        const err = {};
        if (data.interests.length < 1) {
          err.interests = "Select atleast one interest";
        }
        setErrors(err);
        return err.interests ? false : true;
      },
    },
    {
      name: "Settings",
      component: Settings,
      validate: () => {
        return true;
      },
    },
  ];

  const ActiveTabComponent = tabs[activeTab].component;

  const handlePrevClick = () => {
    if (tabs[activeTab].validate()) {
      setActiveTab((a) => a - 1);
    }
  };

  const handleNextClick = () => {
    if (tabs[activeTab].validate()) {
      setActiveTab((a) => a + 1);
    }
  };

  return (
    <div>
      <div className="heading-container">
        {tabs.map((tab, index) => (
          <div
            key={tab.name}
            className="heading"
            style={{ border: `${activeTab === index ? "1px solid red" : ""}` }}
            onClick={() => {
              tabs[activeTab].validate() && setActiveTab(index);
            }}
          >
            {tab.name}
          </div>
        ))}
      </div>
      <div className="tab-body">
        <ActiveTabComponent data={data} setData={setData} errors={errors} />
      </div>
      <div>
        {activeTab > 0 && <button onClick={handlePrevClick}> Previous </button>}
      </div>
      <div>
        {activeTab < tabs.length - 1 && (
          <button onClick={handleNextClick}> Next </button>
        )}
      </div>
      <div>
        {activeTab === tabs.length - 1 && (
          <button onClick={() => console.log(data)}> Submit </button>
        )}
      </div>
    </div>
  );
};

export default TabForm;
