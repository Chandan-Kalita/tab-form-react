import { UseFormRegister } from "react-hook-form";
import { FormInputs } from "./TabFormContainer";

const Settings = ({ register }: { register: UseFormRegister<FormInputs> }) => {
  return (
    <>
      <h1>Settings </h1>
      <input type="checkbox" {...register("sendNotifications")} />
    </>
  );
};

export default Settings;
