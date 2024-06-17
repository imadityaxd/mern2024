export const Register = () =>{
    return <>
        <section>
            <main>
                <div className = "section-registration">
                    <div className="container grid grid-two-cols">
                        <div className="registration-image">
                            <img src ="/images/lisp.png" alt="a simple registraion image" width="400" height="400"/>

                        </div>
                        {/*let's crate registration form  */}
                        <div>
                            <div className= "registration-form">
                                <h1 className="main-heading mb-3">Registration form</h1>
                                <br/>
                                <form>
                                    <div>
                                        <label htmlFor="email">email</label>
                                        <input type="text" name="email" placeholder="email" id="email" required autoComplete="off"/>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
        </section>
    </>;
}