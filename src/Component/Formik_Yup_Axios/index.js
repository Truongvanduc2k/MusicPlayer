import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axiosClient from '../../configs/axios';
import styles from './Formik_Yup_Axios.module.css'

const LoginSchema = Yup.object().shape({
    username: Yup.string().min(5).max(30).required('Required'),
    password: Yup.string().min(6).max(20).required('Required'),
});

const SignupSchema = Yup.object().shape({
    firstName: Yup.string().min(2).required('Required'),
    lastName: Yup.string().min(2).required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    username: Yup.string().min(5).max(30).required('Required'),
    password: Yup.string().min(6).max(20).required('Password is required'),
    repassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match'),
});

function FormikYupAxios() {
    React.useEffect(() => {
        axiosClient
            .get('/users')
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.login}>
                <Formik
                    validationSchema={LoginSchema}
                    initialValues={{
                        username: 'tungntqwer',
                        password: '123456789',
                    }}
                    onSubmit={async (values) => {
                        try {
                            const data = values;

                            const url = 'https://training.softech.cloud/api/training/users/login';
                            const response = await fetch(url, {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                                body: JSON.stringify(data),
                            });

                            // Xử lý kết quả JSON ở đây
                            const json = await response.json();
                            console.log(json);
                            if (json.login) {
                                alert('LOGIN OK (ASYNC / AWAIT)');
                            } else {
                                alert('LOGIN FAILED (ASYNC / AWAIT)');
                            }
                        } catch (error) {
                            // Nếu có lỗi
                            console.error(error);
                        }
                    }}
                >
                    <Form>
                        <label htmlFor='username'>Username</label>
                        <Field id='username' name='username' placeholder='Please enter your username' type='username' />
                        <div style={{ color: 'red' }}>
                            <ErrorMessage name='username' />
                        </div>

                        <label htmlFor='password'>Password</label>
                        <Field id='password' name='password' placeholder='Please enter your password' />
                        <div style={{ color: 'red' }}>
                            <ErrorMessage name='password' />
                        </div>

                        <button type='submit'>Login</button>
                    </Form>
                </Formik>
            </div>
            <div className={styles.signup}>
                <Formik
                    validationSchema={SignupSchema}
                    initialValues={{
                        fullName: 'Duc Truong',
                        email: 'ductv@gmail.com',
                        username: 'ductv',
                        password: '123456789',
                    }}
                    onSubmit={async (values) => {
                        try {
                            const data = values;

                            const url = 'https://training.softech.cloud/api/training/users/register';
                            const response = await fetch(url, {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                                body: JSON.stringify(data),
                            });

                            // Xử lý kết quả JSON ở đây
                            const json = await response.json();
                            console.log(json);
                            if (json.register) {
                                alert('SIGNUP OK (ASYNC / AWAIT)');
                            } else {
                                alert('SIGNUP FAILED (ASYNC / AWAIT)');
                            }
                        } catch (error) {
                            // Nếu có lỗi
                            console.error(error);
                        }
                    }}
                >
                    <Form>

                        <label htmlFor='fullName'>Full name</label>
                        <Field id='fullName' name='fullName' placeholder='Please enter your fullname' type='fullName' />
                        <div style={{ color: 'red' }}>
                            <ErrorMessage name='fullName' />
                        </div>

                        <label htmlFor='email'>Email</label>
                        <Field id='email' name='email' placeholder='Please enter your email' type='email' />
                        <div style={{ color: 'red' }}>
                            <ErrorMessage name='email' />
                        </div>

                        <label htmlFor='username'>Username</label>
                        <Field id='username' name='username' placeholder='Please enter your username' type='username' />
                        <div style={{ color: 'red' }}>
                            <ErrorMessage name='username' />
                        </div>

                        <label htmlFor='password'>Password</label>
                        <Field id='password' name='password' placeholder='Please enter your password' />
                        <div style={{ color: 'red' }}>
                            <ErrorMessage name='password' />
                        </div>
                        <label htmlFor='repassword'>Repassword</label>
                        <Field id='repassword' name='repassword' placeholder='Please enter your password agian' />
                        <div style={{ color: 'red' }}>
                            <ErrorMessage name='repassword' />
                        </div>

                        <button type='submit'>Signup</button>
                    </Form>
                </Formik>
            </div>
        </div>
    );
}

export default FormikYupAxios;