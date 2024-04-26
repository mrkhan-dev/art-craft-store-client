import {Link} from "react-router-dom";
import image from "../../assets/Humaaans - Wireframe.png";
import {useForm} from "react-hook-form";
import {useState} from "react";
import {FaRegEye, FaRegEyeSlash} from "react-icons/fa";

const SignUp = () => {
  const [signUpError, setSignUpError] = useState();
  const [showPassword, setShowPassword] = useState(null);
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const handleForm = (data) => {
    const {password} = data;

    if (password.length < 6) {
      setSignUpError("Password must be 6 character or longer");
      return;
    } else if (!/^(?=.*[a-z])(?=.*[A-Z]).*$/.test(password)) {
      setSignUpError("Password must be one uppercase & lowercase character");
      return;
    }
  };

  return (
    <div className="max-w-7xl mx-auto md:flex">
      <div className="w-1/2">
        <img className="w-full h-auto rounded-l-lg" src={image} alt="" />
      </div>
      {/* form */}
      <div className="md: w-1/2">
        <h1 className="text-center text-4xl">Sign Up for better experience</h1>
        <p className="text-center text-lg">
          Already have an account?
          <Link> Sign In </Link>
        </p>
        <form onSubmit={handleSubmit(handleForm)} className="ml-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              name="name"
              className="input input-bordered"
              {...register("name", {required: true})}
            />
            {errors.name && (
              <span className="text-[#FF900E] text-sm mt-1 ml-1">
                This field is required!
              </span>
            )}
          </div>
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
              <span className="label-text">Photo</span>
            </label>
            <input
              type="text"
              placeholder="Photo URL"
              name="name"
              className="input input-bordered"
            />
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
              value="Sign Up"
            />
          </div>
        </form>
        {signUpError && (
          <p className="text-center text-sm mt-2 text-[#FF900E] mb-3">
            {signUpError}
          </p>
        )}
      </div>
    </div>
  );
};

export default SignUp;
