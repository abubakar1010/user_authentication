import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRef, useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import auth from "../../firebase/firebase.config";

const Registration = () => {

    const [showPassword, setShowPassword] = useState(false)

    const [success, setSuccess] = useState("");
    const [registrationError, setRegistrationError] = useState("")

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const email = emailRef.current.value;

        const password = passwordRef.current.value;
        setRegistrationError("")
        setSuccess("")

        createUserWithEmailAndPassword( auth, email, password)
        .then( (result) => {
            console.log(result.user);
            setSuccess("Registration Successful")
        })
        .catch( (error) => {
            console.error(error.message);
            setRegistrationError(error.message)
        })
    }

  return (
    <>
      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Registration now!</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={(e) => handleSubmit(e)} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    ref={emailRef}
                    required
                  />
                  
                </div>
                <div className="form-control relative">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type={ showPassword? "text" : "password"}
                    placeholder="password"
                    className="input input-bordered"
                    ref={passwordRef}
                    required
                  />
                  <div onClick={handleShowPassword} className=" absolute top-14 right-6  ">
                    {
                        showPassword? <FaEye /> : <FaEyeSlash />
                    }

                  </div>
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>

                  <div>
                    {
                        success&& <p className=" text-red-600 text-xl font-medium">{success}</p>
                    }
                    {
                        registrationError&& <p className=" text-red-600 text-xl font-medium">{registrationError}</p>
                    }
                  </div>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Registration</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
