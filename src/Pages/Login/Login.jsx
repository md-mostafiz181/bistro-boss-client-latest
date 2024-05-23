import Container from "../../components/Container/Container";
import  "./Login.css"
import loginImg from "../../assets/others/authentication2.png"
import { Helmet } from "react-helmet-async";

import { loadCaptchaEnginge, LoadCanvasTemplate,validateCaptcha } from 'react-simple-captcha'
import { useContext, useEffect, useRef, useState } from "react";
import Swal from 'sweetalert2'
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";


const Login = () => {
    const [disabled,setDisabled]=useState(true)
    const captchaRef=useRef()

    const {signIn}=useContext(AuthContext)

    useEffect(()=>{
        loadCaptchaEnginge(6); 
    },[])

    const handleToLogin= (event) =>{
        event.preventDefault()
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email,password)
        // form.reset()
        signIn(email,password)
        .then(result =>{
            const user =result.user;
            console.log(user)
        })

    }

    const handleValidateCaptcha =()=>{
        const user_validate_captcha=captchaRef.current.value;
        console.log(user_validate_captcha)
        if(validateCaptcha(user_validate_captcha)){
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Captcha Matched",
                showConfirmButton: false,
                timer: 1500
              });
            setDisabled(false)
            
        }else{
            setDisabled(true)
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Captcha didn't matched",
                
              });
        }

    }
    
    return (

        
        <div id="login-part">
            <Helmet>
                <title>Bistro || Login</title>
            </Helmet>
            <Container>
            <div className="hero ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center w-full  md:w-1/2 lg:text-left">
        <img src={loginImg} alt="" />

    </div>

    
    <div className="card w-full md:w-1/2 shrink-0 py-2  max-w-sm shadow-2xl bg-base-100">

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
        <div className="form-control">
          <label className="label">
          <LoadCanvasTemplate />
          </label>
          <input type="text" placeholder="Write captcha" name="captcha" ref={captchaRef} className="input input-bordered" required />

        </div>

        <button onClick={handleValidateCaptcha} className="btn btn-outline ">Validation</button>
        <input disabled={disabled}  className="btn bg-[#D1A054] fontPrimary uppercase text-white" type="submit" value="Login" />
      </form>

      <Link to="/signup">
      <h1 className="fontPrimary text-[#D1A054] text-center">New here? Create a new account</h1></Link>
    </div>
  </div>
</div>
            </Container>
        </div>
    );
};

export default Login;