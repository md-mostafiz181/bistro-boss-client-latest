import { Helmet } from "react-helmet-async";
import Container from "../../components/Container/Container";
import signUpImg from "../../assets/others/authentication2.png";
import "./signUp.css";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";




const SignUp = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const navigate =useNavigate()

  const {createUser,updateUserProfile}=useContext(AuthContext)


  const onSubmit = (data) => {
    console.log(data)
    createUser(data.email, data.password)
    .then(result=>{
      const loggedUser=result.user;
      console.log(loggedUser)
      updateUserProfile(data.name, data.photoUrl)
      .then(()=>{
        console.log("user profile updated")

      })
      navigate("/")
    })
    reset();
  };

 

  // console.log(watch("example"))

  return (
    <div id="signUp-part">
      <Helmet>
        <title>Bistro || signUp</title>
      </Helmet>
      <Container>
        <div className="hero ">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center w-full md:w-1/2 lg:text-left">
              <img src={signUpImg} alt="" />
            </div>
            <div className="card shrink-0  w-full  md:w-1/2  max-w-sm shadow-2xl bg-base-100">
              <h1 className="text-5xl font-bold text-center py-3">Sign Up</h1>
              <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    {...register("name", { required: true })}
                    className="input input-bordered"
                  />

                  {errors.name && (
                    <span className="text-red-500">This name is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    {...register("email", { required: true })}
                    className="input input-bordered"
                  />
                  {errors.email && (
                    <span className="text-red-500">Email is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Photo Url"
                    {...register("photoUrl", { required: true })}
                    className="input input-bordered"
                  />
                  {errors.photoUrl && (
                    <span className="text-red-500">Photo Url is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    {...register("password", {
                      required: true,
                      maxLength: 20,
                      minLength: 6,
                      pattern:/(?=.*[A-Z])(?=.*[a-z])(?=.)[a-zA-Z0-9!#$@^%&?]/,
                    })}
                    className="input input-bordered"
                  />
                  {errors.password && (
                    <span className="text-red-500">
                      Password must be in 6 characters and max is 20 characters
                    </span>
                  )}
                  {errors.pattern && (
                    <span className="text-red-500">
                      Password must be a lowercase an uppercase, a special characters
                    </span>
                  )}
                </div>
                <div className="form-control mt-6">
                  <input
                    className="btn bg-[#D1A054] fontPrimary uppercase text-white"
                    type="submit"
                    value="Sign Up"
                  />
                </div>

                <p className="primaryFont text-yellow-500">Already have an account? Please <Link to="/login">Login</Link> </p>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SignUp;

