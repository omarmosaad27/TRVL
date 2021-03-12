import React from 'react'
import "./Signup.css"
const Signup = () => {
    return (
        <div className="sign-up">
            <div className="sign-up-container">
                <h2>sign up</h2>
                <div className="sign-up-wrapper">
                    <div className="col-left">
                        <h3>we will need...</h3>
                        <form>
                            <div className="form-control">
                                <input type="text" placeholder="your name"/>
                                <i class="far fa-user-circle fa-lg"></i>
                            </div>
                            <div className="form-control">
                                <input type="email" placeholder="your email"/>
                                <i class="far fa-envelope-open fa-lg"></i>
                            </div>
                            <div className="form-control">
                                <input type="password" placeholder="password"/>
                                <i class="fas fa-lock fa-lg"></i>
                            </div>
                            <button className="sign-btn">sign up</button>
                        </form>
                    </div>
                    <div className="col-right">
                        <h3>also you can...</h3>
                        <div className="facebook-signup">
                            <h3>
                                Login on 
                            </h3>
                            <i class="fab fa-facebook-square fa-2x"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup
