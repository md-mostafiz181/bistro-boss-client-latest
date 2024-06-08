import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import { app } from "../../firebase/firebase.config";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const {googleSignIn}=useAuth(app)
    const axiosPublic=useAxiosPublic()
    const navigate=useNavigate()

    const handleGoogleSignIn=()=>{
        googleSignIn()
        .then(result=>{
            console.log(result.user)
            const userInfo={
                name:result.user?.name,
                email:result.user?.email
            }

            axiosPublic.post("/users", userInfo)
            .then(res=>{
                console.log(res.data)
                navigate("/")
            })
           
        })

    }
    return (
        <div>
            <button onClick={handleGoogleSignIn} className="btn  w-full bg-[#D1A054] font-normal primaryFont text-white uppercase"> <FcGoogle className="w-[20px] h-[20px]"></FcGoogle>  </button>
        </div>
    );
};

export default SocialLogin;