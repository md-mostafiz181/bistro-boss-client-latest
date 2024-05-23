import { Helmet } from "react-helmet-async";
import Container from "../../components/Container/Container";
import signUpImg from "../../assets/others/authentication2.png"
import "./signUp.css"

const SignUp = () => {
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
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />

        </div>
        <div className="form-control mt-6">
          {/* <button >Sign Up</button> */}

          <input className="btn bg-[#D1A054] fontPrimary uppercase text-white" type="submit" value="Sign Up" />
        </div>
      </form>
    </div>
  </div>
</div>
            </Container>
        </div>
    );
};

export default SignUp;