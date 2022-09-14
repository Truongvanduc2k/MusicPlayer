import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './SudentManager.module.css';
import { useState, useEffect } from 'react';
import axios from 'axios';


function StudentManager() {
    const [listStudent, setListStudent] = useState([]);
    const [formData, setFormData] = useState(null);
    const [error, setError] = useState([]);
    const [status, setStatus] = useState(true); //true = 'add', flase = update

    const initialValues = {
        studentCode: '',
        fullname: '',
        gender: 'nam',
        birthday: '',
        phone: '',
        email: '',
        address: '',
    }
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
        birthday: Yup.string().required('Required'),
        phone: Yup.string().required('Required'),
        email: Yup.string().required('Required'),
        address: Yup.string().required('Required'),
    });
    const Add = (values) => {
        delete values._id;
        axios
            .post("http://localhost:9000/student/", values)
            .then((res) => {
                const newStudentID = res.data.result.insertedId;
                const newList = [...listStudent, { ...values, _id: newStudentID }];
                setListStudent(newList);
                setFormData(initialValues);
            })
            .catch((error) => setError(error.message))
            .finally(() => console.log("add finished"));
    };
    const Edit = (item) => {
        setStatus(false)
        setFormData(item);
    };
    const Update = (values) => {
        axios.patch(`http://localhost:9000/student/${values._id}`, values)
            .then((response) => {
                console.log(response)
                const newList = listStudent.map((item, index)=>{
                    if (item._id === values._id) {
                        return values;
                    } else return item;
                })
                setListStudent(newList);
            })
            .catch((error) => {
                console.log(error)
            })
    };
    const Delete = (item) => {
        axios.delete(`http://localhost:9000/student/${item._id}`)
            .then((res) => {
                console.log(res);
                const newList = listStudent.filter(i => i !== item);
                setListStudent(newList);
            })
            .catch((error) => {
                console.log(error)
            })
    };
    return (
        <div className={styles.container}>
            <div className={styles.form}>
                <h2>Student Infor</h2>
                <Formik
                    validationSchema={inforSchema}
                    initialValues={formData || initialValues}
                    onSubmit={status ? Add : Update}
                    enableReinitialize
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
                        <Field id='gender' name='gender' placeholder='Please enter gender' as='select' >
                            <option value="nam">nam</option>
                            <option value="nữ">nữ</option>
                        </Field>
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
                        <button type='submit' style={status ? {} : { display: 'none' }}>Add</button>
                        <button type='reset' style={status ? {} : { display: 'none' }}
                            onClick={() => setFormData(initialValues)}>Reset</button>
                        <button type='submit' style={!status ? {} : { display: 'none' }}
                            onClick={Update}
                        >Update</button>
                        <button type='reset' style={!status ? {} : { display: 'none' }}
                            onClick={() => {
                                setStatus(!status)
                                setFormData(initialValues)
                            }}>Cancle</button>
                    </Form>
                </Formik>
            </div>
            <div className={styles.list}>
                <h2>Student List</h2>
                <table>
                    <tbody>
                        <tr>
                            <th>Number</th>
                            <th>ID</th>
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
                                    <tr key={item.id}>
                                        <td>{index + 1}</td>
                                        <td>{item._id}</td>
                                        <td>{item.studentCode}</td>
                                        <td>{item.fullname}</td>
                                        <td>{item.gender}</td>
                                        <td>{item.birthday}</td>
                                        <td>{item.phone}</td>
                                        <td>{item.email}</td>
                                        <td>{item.address}</td>
                                        <td><button onClick={() => Edit(item)}>Edit</button></td>
                                        <td><button onClick={() => Delete(item, index)}>Delete</button></td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default StudentManager;
