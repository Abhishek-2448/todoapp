import './login.css';

export default function Login() {

    return (

        <>

            <div id='loginContainer' className="loginContainer">

                <div id="loginHeader" className="loginHeader">Login</div>

                <input type='email' value={'email'} onChange={() => { }} />

                <input type="password" value={'password'} onChange={() => { }} />

            </div>

        </>

    )

}