import React, { useContext, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';
import { ContextAuth } from '../../Context/Context';
import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";

const SignIn = () => {
    const gProvider = new GithubAuthProvider();
    const provider = new GoogleAuthProvider();
    const [errorText, setErrorText] = useState(null)
    const { emailPassSignUp, upProfile, googleSignIn } = useContext(ContextAuth)
    const navigate = useNavigate()



    const notify = (x) => toast.success(x, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

    const formSubmit = e => {
        setErrorText(null)
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;


        if (password.length < 6) {
            return setErrorText('password is less than 6 characters')
        }
        if (!/[A-Z]/.test(password)) {
            return setErrorText("password don't have a capital letter")
        }

        if (!/[^A-Za-z0-9]/.test(password)) {
            return setErrorText("password don't have a special character")
        }
        emailPassSignUp(email, password)
            .then(res => {
                upProfile(name)
                    .then(() => {
                        notify("Congratulations! Your account has been successfully created")

                        setTimeout(function () {
                            navigate('/')
                        }, 1500);
                    }).catch((error) => {
                        console.log(error.message);
                        setErrorText("error:" + " " + error.message.split("/")[1].split(")")[0]);
                    });




            })
            .catch(error => {
                console.log(error.message);
                setErrorText("error:" + " " + error.message.split("/")[1].split(")")[0]);
            })


    }

    const googleHandel = (xProvider) => {
        googleSignIn(xProvider)
            .then(() => {
                notify("Congratulations! Your account has been successfully created")

                setTimeout(function () {
                    navigate('/')
                }, 1000);
            }).catch((error) => {
                console.log(error.message);
            });

    }



    return (
<div></div>
    );
};

export default SignIn;