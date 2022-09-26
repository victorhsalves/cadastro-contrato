import './index.css';
import { Button, Form, Input } from 'antd';
import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { UserContext } from '../../Context/UserContext';
import api from '../../services/api';
import LoginInput from '../../Components/TextInput';


function Login() {

    const { setUser } = React.useContext(UserContext);
    const [ usernameInput, setUsernameInput ] = useState('');
    const [ passwordInput, setPasswordInput ] = useState('');
    const navigate = useNavigate();

    const onFinish = async (values: any) => {
        await api.post('/Login', {
            username: values.username,
            password: values.password
        }).then((data) => {
            console.log('Success:', data.data);
            localStorage.setItem('user', JSON.stringify(data.data.user));
            setUser(values);
            navigate("/");
        }).catch((error) => {
            console.log(error);
        });

    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className='login-div'>
            <Form
                name="basic-login" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}
                onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off" className='form'
            >
                <Form.Item label="Username" name="username"
                    rules={[{ required: true, message: 'Insira nome de usuário!' }]}
                >
                    {/* Componente de input de texto */}
                    <LoginInput  inputType='text' onChange={(value) => setUsernameInput(value)} />
                </Form.Item>

                <Form.Item label="Senha" name="password"
                    rules={[{ required: true, message: 'Insira a senha!' }]}
                >
                <LoginInput inputType='password' onChange={(value) => setPasswordInput(value)} />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}


export default Login;