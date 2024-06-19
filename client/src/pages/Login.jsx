import { useState} from "react";

export const Login = () => {

    const [user, setUser] = useState({
        email:"",
        password:"",

    });

//handling the form input
const handleInput =(e) => {
        console.log(e);
        let name = e.target.name;
        let value = e.target.value;

        setUser({
            ...user,
            [name]: value,
        });
};
//handling the form submit 
const handleSubmit = (e) =>{
    e.preventDefault();
}

    return (
        <>
            <section>
                <main>
                    <div className="section-login">
                        <div className="container grid grid-two-cols">
                            <div className="login-image">
                                <img src ="/images/lisp.png" alt="a simple login image" width="400" height="400"/>
                            </div>
                            <div className="login-form">
                                <h1 className="main-heading mb-3">Login form</h1>
                                <br/>
                                <form onSubmit ={ handleSubmit }>
                                    <div>
                                        <label htmlFor="email">email</label>
                                            <input 
                                            type="email" 
                                            name="email"
                                            placeholder="enter your email" 
                                            id="email" 
                                            required autoComplete="off"
                                            value={user.email}
                                            onChange={handleInput}
                                            />
                                    </div>
                                    <div>
                                        <label htmlFor="password">password</label>
                                            <input 
                                            type="password" 
                                            name="password"
                                            placeholder="enter your password" 
                                            id="password" 
                                            required autoComplete="off"
                                            value={user.password}
                                            onChange={handleInput}
                                            />
                                    </div>
                                    <br/>
                                    <button type="submit" className="btn btn-submit">Login Now</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </main>
            </section>
    
        </>
    );
}