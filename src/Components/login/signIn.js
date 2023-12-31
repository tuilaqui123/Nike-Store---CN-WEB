import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import { useContext, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import clsx from 'clsx';
import './login.css';
import { AppContext } from '../../Context/AppContext';

const validationSchema = Yup.object({
    phone: Yup.string().required('Trường này bắt buộc')
        .matches(/^[\+|0]([0-9]{9,14})\b/, 'Số điện thoại không hợp lệ'),
    password: Yup.string().required('Vui lòng nhập nhập mật khẩu!'),
});

const SignIn = () => {
    const [loading, setLoading] = useState(false);
    const [validateOnChange, setValidateOnChange] = useState(false);
    const navigate = useNavigate()
    const {setCustomer} = useContext(AppContext) 
    const form = useFormik({
        initialValues: {
            phone: '',
            password: '',
        },
        validationSchema,
        onSubmit: handleFormsubmit,
        validateOnBlur: false,
        validateOnChange: validateOnChange,
    })

    function handleFormsubmit(values) {
        setLoading(true);
        fetch('http://localhost:5000/api/customer/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
        })
            .then((res) => res.json())
            .then((resJson) => {
                if (resJson.success) {
                    toast.success('Đăng nhập thành công')
                    setCustomer(resJson.customer)
                    navigate('/');
                } else {
                    toast.error("Đăng nhập không thành công")
                }
            })
            .catch(() => {
                toast.error("Đăng nhập không thành công")
            })
            .finally(() => {
                setLoading(false);
            });
    }
    return (
        <form 
            className="login-container"
            onSubmit={(e) => {
                setValidateOnChange(true);
                form.handleSubmit(e);
            }}
        >
            <h1>SIGN IN</h1>
            <div className="input-container">
                <div className="input-box">
                    <p>Phone number:</p>
                    <input type="text"
                        className={clsx({
                            'invalid': form.errors.phone
                        })}
                        placeholder="Email or Phone number" 
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        value={form.values.phone}
                        name='phone'/>
                    <span
                        className={clsx('error-message', {
                            'show': form.errors.username,
                        })}
                    >
                        {form.errors.phone || 'No message'}
                    </span>
                </div>
                <div className="input-box">
                    <p>Password:</p>
                    <input type="password"
                        className={clsx({
                            'invalid': form.errors.password
                        })}
                        placeholder="Password"
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        value={form.values.password}
                        name='password'/>
                    <span
                        className={clsx('error-message', {
                            'show': form.errors.password,
                        })}
                    >
                        {form.errors.password || 'No message'}
                    </span>
                </div>
            </div>
            <button type='submit' className={clsx("submit-button", {
                'disabled': loading
            })} >
                <p>SIGN IN</p>
            </button>
        </form>
    );
};

export default SignIn;
