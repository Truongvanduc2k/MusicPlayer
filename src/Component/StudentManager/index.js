import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './SudentManager.module.css';
import { useState, useEffect } from 'react';
import axios from 'axios';


function StudentManager() {
    const [listStudent, setListStudent] = useState([]);
    const [error, setError] = useState([]);
    // const [statusInput, setStatusInput] = useState('add');

    useEffect(() => {
        axios
            .get("http://localhost:9000/student/")
            .then((response) => setListStudent(response.data))
            .catch((error) => setError(error.message))
            .finally(() => console.log("finished"));
    }, []);

    const inforSchema = Yup.object().shape({
        studentCode: Yup.string().required('Required'),
        fullname: Yup.string().required('Required'),
        gender: Yup.string().required('Required').oneOf(['nam', 'nữ']),
        birthday: Yup.date().required('Required'),
        phone: Yup.string().required('Required'),
        email: Yup.string().required('Required'),
        address: Yup.string().required('Required'),
    });
    const Add = (values) => {
        // console.log(values);
    };
    // const Edit = (index, item) => {
    //     setId(item.id);
    //     setName(item.name);
    //     setDescription(item.description);
    //     setStatusInput('edit');
    // };
    // const ExitUpdate = () => {
    //     setId('');
    //     setName('');
    //     setDescription('');
    //     setStatusInput('add');
    // };
    // const Update = (id, name, description) => {
    //     const newInfor = { name: name, description: description };
    //     console.log(newInfor)
    //     axios.patch(`http://localhost:9000/categories/${id}`, newInfor)
    //         .then((response) => {
    //             console.log(response.data)
    //         })
    //         .catch((error) => {
    //             console.log(error)
    //         })
    //     setInfor({});
    //     setId('');
    //     setName('');
    //     setDescription('');
    //     setStatusInput('add');
    // };
    // const Delete = (item) => {
    //     axios.delete(`http://localhost:9000/categories/${item.id}`)
    //         .then((response) => {
    //             console.log(response.data)
    //         })
    //         .catch((error) => {
    //             console.log(error)
    //         })
    //     setInfor({});
    // };
    return (
        <div className={styles.container}>
            <div className={styles.form}>
                <h2>Student Infor</h2>
                <Formik
                    validationSchema={inforSchema}
                    initialValues={{
                        studentCode: '',
                        fullname: '',
                        gender: '',
                        birthday: '',
                        phone: '',
                        email: '',
                        address: '',
                    }}
                    onSubmit={Add}
                >
                    <Form>
                        <label htmlFor='studentCode'>Student code</label>
                        <Field id='studentCode' name='studentCode' placeholder='Please enter student code' type='studentCode' />
                        <div style={{ color: 'red' }}>
                            <ErrorMessage name='studentCode' />
                        </div>
                        <label htmlFor='fullname'>Fullname</label>
                        <Field id='fullname' name='fullname' placeholder='Please enter fullname' type='fullname' />
                        <div style={{ color: 'red' }}>
                            <ErrorMessage name='fullname' />
                        </div>
                        <label htmlFor='gender'>Gender</label>
                        <Field id='gender' name='gender' placeholder='Please enter gender' type='gender' />
                        <div style={{ color: 'red' }}>
                            <ErrorMessage name='gender' />
                        </div>
                        <label htmlFor='birthday'>Birthday</label>
                        <Field id='birthday' name='birthday' placeholder='Please enter birthday' type='birthday' />
                        <div style={{ color: 'red' }}>
                            <ErrorMessage name='birthday' />
                        </div>
                        <label htmlFor='phone'>Phone</label>
                        <Field id='phone' name='phone' placeholder='Please enter phone' type='phone' />
                        <div style={{ color: 'red' }}>
                            <ErrorMessage name='phone' />
                        </div>
                        <label htmlFor='email'>Email</label>
                        <Field id='email' name='email' placeholder='Please enter email' type='email' />
                        <div style={{ color: 'red' }}>
                            <ErrorMessage name='email' />
                        </div>
                        <label htmlFor='address'>Address</label>
                        <Field id='address' name='address' placeholder='Please enter address' type='address' />
                        <div style={{ color: 'red' }}>
                            <ErrorMessage name='address' />
                        </div>
                        <button type='submit'>Login</button>
                    </Form>
                </Formik>
            </div>
            <div className={styles.list}>
                <h2>Student List</h2>
                <table>
                    <tr>
                        <th>Number</th>
                        <th>Student code</th>
                        <th>Fullname</th>
                        <th>Gender</th>
                        <th>Birthday</th>
                        <th>Phone number</th>
                        <th>Email</th>
                        <th>Address</th>
                    </tr>
                    {
                        listStudent.map((item, index) => {
                            return (
                                <tr key={item.studentCode}>
                                    <td>{index + 1}</td>
                                    <td>{item.studentCode}</td>
                                    <td>{item.fullname}</td>
                                    <td>{item.gender}</td>
                                    <td>{item.birthday}</td>
                                    <td>{item.phone}</td>
                                    <td>{item.email}</td>
                                    <td>{item.address}</td>
                                </tr>
                            )
                        })
                    }
                </table>
            </div>
        </div>
    );
}

export default StudentManager;
