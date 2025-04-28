import React, { useState } from 'react'
import { useApi } from '../hooks/useApi';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const { post } = useApi();
    const navigate = useNavigate();

    const [form, setForm] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        confirm_password: "",
        phone: ""
    });

    const handleInput = ({ target: { name, value } }) => {
        setForm((form) => ({
            ...form,
            [name]: value,
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (form.password !== form.confirm_password) {
            alert("Le password non corrispondono");
            return;
        }

        const { confirm_password, ...payload } = form;

        await post("/users?role=user", payload);

        navigate("/");
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="first_name">Nome</label>
                    <input type="text" name="first_name" id="first_name" value={form.first_name} onInput={handleInput} />
                </div>
                <div>
                    <label htmlFor="last_name">Cognome</label>
                    <input type="text" name="last_name" id="last_name" value={form.last_name} onInput={handleInput} />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" value={form.email} onInput={handleInput} />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" value={form.password} onInput={handleInput} />
                </div>
                <div>
                    <label htmlFor="confirm_password">Conferma Password</label>
                    <input type="password" name="confirm_password" id="confirm_password" value={form.confirm_password} onInput={handleInput} />
                </div>
                <div>
                    <label htmlFor="phone">Telefono</label>
                    <input type="tel" name="phone" id="phone" value={form.phone} onInput={handleInput} />
                </div>
                <div>
                    <button type="submit">Register</button>
                </div>
            </form>
        </div>
    )
}

export default Signup