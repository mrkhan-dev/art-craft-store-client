import {FaGithub, FaGoogle} from "react-icons/fa";
import UseAuth from "../Hooks/UseAuth";
import {useLocation, useNavigate} from "react-router-dom";

const SocialLogin = () => {
  const {googleSingIn, githubSignIn} = UseAuth();

  const location = useLocation();
  const navigate = useNavigate();

  const socialLogin = (socialPro) => {
    socialPro().then((result) => {
      if (result.user) {
        navigate(location?.state || "/");
      }
    });
  };

  return (
    <div>
      <h2 className="text-center divider text-xl font-medium md:ml-[18px] mt-12">
        Login With
      </h2>
      <div className="flex justify-center gap-8 text-3xl">
        <div>
          <button onClick={() => socialLogin(googleSingIn)}>
            <FaGoogle />
          </button>
        </div>
        <div>
          <button onClick={() => socialLogin(githubSignIn)}>
            <FaGithub />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SocialLogin;
