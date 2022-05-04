import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Register.css";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import Loading from "../../Shared/Loading/Loading";

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, UpdateError] = useUpdateProfile(auth);

  const navigate = useNavigate();

  const navigateLogin = () => {
    navigate("/login");
  };

  if (user) {
    console.log(user);
  }

  if (loading || updating) {
    return <Loading></Loading>;
  }

  const handleRegister = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    console.log("Updated profile");
    navigate("/home");
  };
  return (
    <div className="register-form">
      <h2 className="text-center">Please Register</h2>
      <form onSubmit={handleRegister}>
        <input type="text" name="name" placeholder="Your Name" /> <br />
        <input type="email" name="email" placeholder="Email Address" /> <br />
        <input type="password" name="password" placeholder="Password" /> <br />
        <input
          className="w-25 btn btn-dark mx-auto d-block"
          type="submit"
          value="Register"
        />
      </form>
      <p className="mt-2">
        Already have an account?{" "}
        <Link
          to="/login"
          className="text-primary pe-auto text-decoration-none"
          onClick={navigateLogin}
        >
          Please Login
        </Link>
      </p>

      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Register;
