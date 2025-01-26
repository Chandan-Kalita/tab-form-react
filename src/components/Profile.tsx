import { UseFormRegister, UseFormRegisterReturn } from "react-hook-form";
import { FormInputs } from "./TabFormContainer";

const Profile = ({ register }: { register: UseFormRegister<FormInputs> }) => {
  return (
    <>
      <h1>Profile </h1>
      <FormGroup label="Name" register={{ ...register("name") }} />
      <FormGroup label="Email" register={{ ...register("email") }} />
    </>
  );
};

export const FormGroup = ({
  label,
  register,
}: {
  label: string;
  register: UseFormRegisterReturn;
}) => {
  return (
    <div>
      <label>{label}</label>
      <input {...register} />
    </div>
  );
};

export default Profile;
