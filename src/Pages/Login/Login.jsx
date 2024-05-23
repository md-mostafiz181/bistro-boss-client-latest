import Container from "../../components/Container/Container";
import  "./Login.css"
import loginImg from "../../assets/others/authentication2.png"
const Login = () => {

    const handleToLogin= (event) =>{
        event.preventDefault()
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email,password)

    }
    
    return (
        
        <div id="login-part">
            <Container>
            <div className="hero ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center w-full  md:w-1/2 lg:text-left">
        <img src={loginImg} alt="" />

    </div>

    
    <div className="card w-full md:w-1/2 shrink-0  max-w-sm shadow-2xl bg-base-100">

        <h1 className="text-5xl font-bold text-center py-3" >Login</h1>
       
      <form onSubmit={handleToLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <input className="btn bg-[#D1A054] fontPrimary uppercase text-white" type="submit" value="Login" />
      </form>
    </div>
  </div>
</div>
            </Container>
        </div>
    );
};

export default Login;