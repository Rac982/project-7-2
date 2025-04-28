import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useApi } from '../hooks/useApi';
import { login as loginAction } from '../store/slices/authSlice';
import { useDispatch } from 'react-redux';

const Login = () => {
    const dispath = useDispatch();
    const navigate = useNavigate();
    const { login } = useApi();

    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const handleInput = ({ target: { name, value } }) => {
        setForm((form) => ({
            ...form,
            [name]: value,
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = await login({ ...form }); // { token, user }

        dispath(loginAction(payload)); // { token, user }

        navigate("/private");
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" value={form.email} onInput={handleInput} />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" value={form.password} onInput={handleInput} />
                </div>
                <div>
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    )
}

export default Login