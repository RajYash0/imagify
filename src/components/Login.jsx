import axios from "axios";
import { motion } from "motion/react";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";

const Login = () => {
  const [state, setState] = useState("Login");

  const { setShowLogin, backendUrl, setToken, setUser } =
    useContext(AppContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      if (state === "Login") {
        const { data } = await axios.post(backendUrl + "/api/user/login", {
          email,
          password,
        });
        if (data.success) {
          setToken(data.token);
          setUser(data.user);
          localStorage.setItem("token", data.token);
          setShowLogin(false);
        } else {
          toast.error(data.message);
        }
      } else {
        const { data } = await axios.post(backendUrl + "/api/user/register", {
          name,
          email,
          password,
        });
        if (data.success) {
          setToken(data.token);
          setUser(data.user);
          localStorage.setItem("token", data.token);
          setShowLogin(false);
        } else {
          toast.error(data.message);
        }
      }
    } catch (error) {
      toast.error(data.message);
    }
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center">
      <motion.form
        onSubmit={onSubmitHandler}
        initial={{ opacity: 0.2, y: 50 }}
        transition={{ duration: 0.3 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative bg-white p-10 rounded-xl text-slate-500"
      >
        <h1 className="text-center text-2xl text-neutral-700 font-medium">
          {state}
        </h1>
        <p className="text-sm text-center">
          {state === "Login"
            ? "Welcome back! Please sign in to continue"
            : "Welcome! Please create a new account"}
        </p>

        {state !== "Login" && (
          <div className="border px-6 p-2 flex items-center gap-2 rounded-full mt-5">
            <img className="w-6 h-6" src={assets.user_icon} alt="" />
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              className="outline-none text-sm"
              placeholder="Full Name"
              required
            />
          </div>
        )}
        <div className="border px-6 p-2 flex items-center gap-2 rounded-full mt-4">
          <img className="w-6 h-6" src={assets.email_icon} alt="" />
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            className="outline-none text-sm"
            placeholder="Email id"
            required
          />
        </div>
        <div className="border px-6 p-2 flex items-center gap-2 rounded-full mt-4">
          <img className="w-6 h-6" src={assets.lock_icon} alt="" />
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            className="outline-none text-sm"
            placeholder="Password"
            required
          />
        </div>
        {state === "Login" && (
          <p className="text-sm text-blue-600 my-4 cursor-pointer">
            Forgot password?
          </p>
        )}
        <button
          className={`bg-blue-600 w-full text-white py-2 rounded-full cursor-pointer ${
            state !== "Login" ? "mt-4" : ""
          }`}
        >
          {state === "Login" ? "Login" : "Create Account"}
        </button>
        {state === "Login" ? (
          <p className="mt-5 text-center">
            Don't have an account?{" "}
            <span
              className="text-blue-600 cursor-pointer"
              onClick={() => setState("Sign Up")}
            >
              Sign up
            </span>
          </p>
        ) : (
          <p className="mt-5 text-center">
            Already have an account?{" "}
            <span
              className="text-blue-600 cursor-pointer"
              onClick={() => setState("Login")}
            >
              Login
            </span>
          </p>
        )}

        <img
          onClick={() => setShowLogin(false)}
          src={assets.cross_icon}
          alt=""
          className="absolute top-5 right-5 cursor-pointer"
        />
      </motion.form>
    </div>
  );
};

export default Login;
