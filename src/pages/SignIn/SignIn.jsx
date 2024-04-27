import image from "../../assets/loginPageImage.png";
import {useForm} from "react-hook-form";
import UseAuth from "../../Hooks/UseAuth";
import {useState} from "react";
import toast from "react-hot-toast";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {FaRegEye, FaRegEyeSlash} from "react-icons/fa";
import SocialLogin from "../../SocialLogin/SocialLogin";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(null);
  const {signInUser} = UseAuth();

  const location = useLocation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const handleForm = (data) => {
    const {email, password} = data;

    // sign in user
    signInUser(email, password)
      .then((result) => {
        console.log(result);
        if (result.user) {
          navigate(location?.state || "/");
        }
        toast.success("Sign Up Successful");
      })
      .catch(() => {
        toast.error("Invalid email or password");
      });
  };

  return (
    <div className="max-w-7xl mx-auto md:flex mt-16 ">
      <div className="w-1/2">
        <img
          className="w-full md:h-[469px] rounded-l-lg bg-cover border bg-slate-400"
          src={image}
          alt=""
        />
      </div>
      {/* form */}
      <div className="md: w-1/2">
        <h1 className="text-center text-4xl">Sign Up for better experience</h1>
        <p className="text-center text-lg">
          Already have an account?
          <Link> Sign Up </Link>
        </p>
        <form onSubmit={handleSubmit(handleForm)} className="ml-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="input input-bordered"
              {...register("email", {required: true})}
            />
            {errors.email && (
              <span className="text-[#FF900E] text-sm mt-1 ml-1">
                This field is required!
              </span>
            )}
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              name="password"
              className="input input-bordered"
              {...register("password", {required: true})}
            />
            {errors.email && (
              <span className="text-[#FF900E] text-sm mt-1 ml-1">
                This field is required!
              </span>
            )}
            <span
              className="absolute mt-[50px] ml-48 lg:ml-[590px] cursor-pointer text-lg"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
            </span>
          </div>
          <div className="form-control">
            <input
              className="bg-[#ECE3F0] input mt-4 text-lg cursor-pointer"
              type="submit"
              value="Sign In"
            />
          </div>
        </form>
        <SocialLogin />
      </div>
    </div>
  );
};

export default SignIn;
