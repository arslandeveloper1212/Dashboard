import React, { useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [passShow, setPassShow] = useState(false);

    const history = useNavigate();

    const [state, setState] = useState({

        email: "",
        password: "",

    });

    const [errors, setErrors] = useState({

        email: '',
        password: '',

    });

    const HandleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name, value);

        setState({ ...state, [name]: value });

    }




    const HandleSubmit = async (e) => {
        e.preventDefault();


        // Basic validation
        let hasError = false;
        const newErrors = { email: '', password: '' };



        if (state.email === '') {
            newErrors.email = 'Email is required';
            hasError = true;
        }

        if (state.password === '') {
            newErrors.password = 'Password is required';
            hasError = true;
        }




        if (hasError) {
            setErrors(newErrors);
        } else {
            // Here, you can perform your login logic
            console.log('Login data:', state);
        }



        const { email, password } = state;
        const res = await fetch("http://localhost:5000/signup", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                email, password
            })

        });

        const datahit = await res.json();
        if (datahit.status === 422 || !datahit) {
            alert("login not complete");
            console.log("not login");
        } else {
            //   toast.success("Registration Successfully done 😃!", {
            //     position: "top-center"
            // });
            // alert("registered completed successfully");

            console.log("login")
          
            history("/")
            setState({ ...state, email: "", password: "", })
        }

    }

    return (
        <div className='d-flex justify-content-center align-items-center' style={{ height: "80vh", margin: "auto" }}>
            <div className='handle_form d-flex flex-column p-3'>
                <div className='handle_content p-3  text-center'>
                    <h2>Login</h2>
                    <p>Hi, we are you glad you that you will be using Project Cloud to manage <br></br> your tasks! We hope that you will get like it</p>
                </div>

                <form method='POST' onSubmit={HandleSubmit}>
                    <div className='col-12 col-lg-10 m-auto'>




                        <div className="mb-3">
                            <label htmlFor="email" className="form-label" >Email</label>
                            <input type="text" className="form-control" name='email' value={state.email} onChange={HandleInput} placeholder='Enter your email' />
                            <span className="error" style={{ color: "red" }}>{errors.email}</span>
                        </div>
                        <div className="mb-3">

                            <label htmlFor="password" className="form-label">Password</label>


                            <div className='button_input_here'>
                                <input type={!passShow ? 'password' : "text"} name='password' value={state.password} onChange={HandleInput} className="form-control" />

                                <button className='btn btn-secondary' onClick={() => setPassShow(!passShow)}>
                                    {!passShow ? "Show" : "Hide"}
                                </button>

                            </div>
                            <span className="error" style={{ color: "red" }}>{errors.password}</span>
                            <div id="emailHelp" class="form-text">Password required 6 character</div>
                        </div>



                       


                        <div className="mb-3 mt-4">
                            <button type="submit" name='submit' className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default Login