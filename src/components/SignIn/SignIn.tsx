import { Lock } from "../Lock/Lock.tsx";
import { Mail } from "../Mail/Mail";
import "./style.css";
import React, {useState} from "react";
import {BasicAlert} from "../Alert/BasicAlert.tsx";

const SignIn = () => {

    const [userName, setUserName] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    /**
     * 登录按钮单击事件
     */
    const handleSignInClick = (): void => {
        if (!userName) {
            BasicAlert.error({
                content: 'Please enter you UserName'
            })
            return;
        }
        if (!password) {
            BasicAlert.error({
                content: 'Please enter you UserName'
            })
            return;
        }
        BasicAlert.success({
            content: 'Sign In Success',
            autoHideDuration: 2000
        })
        setUserName('')
        setPassword('')
    }

    const handleUserNameInput = (event: React.FormEvent<HTMLInputElement>):void => {
        const target = event.target as HTMLInputElement
        setUserName(target.value)
    }

    const handlePasswordInput = (event: React.FormEvent<HTMLInputElement>) => {
        const target = event.target as HTMLInputElement
        setPassword(target.value)
    }

    return (
        <>
        <div className="index">

            <div className="group-wrapper">
                <div className="group">

                    <div className="overlap-group">
                        <div className="rectangle" />
                        <img
                            className="image"
                            alt="Image"
                            src="https://cdn.animaapp.com/projects/652df3c13a37cc0469b5faaa/releases/654723f27fdc3538947dcbb1/img/image-1.png"
                        />
                        <div className="text-wrapper">Sign In</div>
                        <img
                            className="rectangle-2"
                            alt="Rectangle"
                            src="https://cdn.animaapp.com/projects/652df3c13a37cc0469b5faaa/releases/654723f27fdc3538947dcbb1/img/rectangle-2.png"
                        />
                        <div className="div">UserName</div>
                        <input value={userName} onInput={(e) => handleUserNameInput(e)} placeholder='example@gmail.com' className="rectangle-3" />
                        <Mail
                            className="mail-instance"
                            shape="https://cdn.animaapp.com/projects/652df3c13a37cc0469b5faaa/releases/654723f27fdc3538947dcbb1/img/shape-2.svg"
                        />
                        <div className="text-wrapper-3">Password</div>
                        <input value={password} onInput={(e) => handlePasswordInput(e)} placeholder='****************' className="rectangle-4" />
                        <div className="text-wrapper-5">Forgot password?</div>
                        <Lock
                            className="lock-instance"
                            shape="https://cdn.animaapp.com/projects/652df3c13a37cc0469b5faaa/releases/654723f27fdc3538947dcbb1/img/shape-3.svg"
                        />
                        <img
                            className="rectangle-5"
                            alt="Rectangle"
                            src="https://cdn.animaapp.com/projects/652df3c13a37cc0469b5faaa/releases/654723f27fdc3538947dcbb1/img/rectangle-5.svg"
                        />
                        <div className="text-wrapper-6" onClick={handleSignInClick}>Sign In</div>
                        <p className="don-t-have-an">
                            <span className="span">Don’t have an account?</span>
                            <span className="text-wrapper-7">&nbsp;</span>
                            <span className="text-wrapper-8">Sign up</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default SignIn;