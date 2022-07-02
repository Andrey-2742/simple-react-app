import {useContext} from "react";
import {AuthContext} from "../context/context";
import MyButton from "../components/UI/button/MyButton";
import MyInput from "../components/UI/input/MyInput";

function Login() {

    const {isLogged, setLogged} = useContext(AuthContext)

    function login(e) {
        e.preventDefault();
        setLogged(true);
        localStorage.setItem('logged', 'true');
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={login}>
                <MyInput type='text' placeholder='login'/>
                <MyInput type='password' placeholder='password'/>
                <MyButton>Submit</MyButton>
            </form>
        </div>
    );
}

export default Login;
