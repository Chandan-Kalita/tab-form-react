import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Interests from "./Interests";
import Profile from "./Profile";
import Settings from "./Settings";
import TabBar from "./TabBar";

export type FormInputs = {
  name: string;
  email: string;
  sendNotifications: boolean;
  // interests: st
};

const TabFormContainer = () => {
  const [activeTab, setActiveTab] = useState("Profile");
  const { register, handleSubmit, watch, formState } = useForm<FormInputs>();

  const formComponents: Record<string, React.ReactElement> = {
    Profile: <Profile register={register} />,
    Settings: <Settings register={register} />,
    Interests: <Interests register={register} />,
  };

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log(data);
  };
  return (
    <>
      <h1>Hello </h1>
      <div style={{ width: "100%", border: "1px solid black" }}>
        <TabBar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          formComponents={formComponents}
        />
        <form onSubmit={handleSubmit(onSubmit)}>
          {formComponents[activeTab]}
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default TabFormContainer;
