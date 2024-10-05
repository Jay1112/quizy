import Input from "../ui/Input";
import Button from "../ui/Button";
import { SyntheticEvent } from "react";
import { Link } from "react-router-dom";

function SignInForm() {

    function handleFormSubmission(e:SyntheticEvent){
        e.preventDefault();
        console.log(e.target);
    }

  return (
    <form onSubmit={handleFormSubmission} className="max-w-[350px] md:max-w-[500px] w-full">
      <h1 className="text-4xl font-semibold poppins text-left md:text-left w-full my-6">
        Sign-In
      </h1>
      <Input
        label="Email"
        labelIcon="envelope"
        type="email"
        placeholder="Ex. john.doe@gmail.com"
        className="p-2 poppins w-full outline-none rounded-sm border-2 border-gray-200 focus:border-slate-800 my-2"
        autoComplete="off"
        required={true}
      />
      <Input
        label="Password"
        labelIcon="key"
        type="password"
        placeholder="Enter Your Password..."
        className="p-2 poppins w-full outline-none rounded-sm border-2 border-gray-200 focus:border-slate-800 my-2"
        autoComplete="off"
        required={true}
      />
      <Button className="p-2 border-2 w-full md:w-auto border-transparent bg-indigo-600 text-white poppins my-2 rounded-sm px-4 hover:border-indigo-600 hover:bg-transparent hover:text-indigo-600">
        Submit
      </Button>
      <p>Don't have an Account ? do <Link to={'/sign-up/'}><span className="text-indigo-500">sign-up</span></Link></p>
    </form>
  );
}

export default SignInForm;
