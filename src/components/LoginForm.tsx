'use client';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Image from 'next/image';
import lockImage from '../../public/LoginSider.webp';

const LoginForm:React.FC = async() => {
    const a = {name:'Rahul'}
    const b = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const initialValues = {
    formName: 'News-Login-Form',
    userName: '',
    password: '',
    rememberMe: false,
  };

  const validationSchema = Yup.object({
    userName: Yup.string().required('Username is required').matches(/^\d+$/, "Only Numbers are allowed"),
    password: Yup.string().required('Password is required'),
  });

  const handleSubmit = (values:any) => {
    console.log(values);
  };

  return (
    <div className="container-fluid vh-100 d-flex justify-content-center align-items-center bg-light" style={{backgroundColor: '#FDFEF6'}}>
    {/* <div> */}
      <div className="row w-75">
        <div className="col-md-6 d-none d-md-flex justify-content-center align-items-center me-3">
          <Image src={lockImage} alt="Lock Image" width={500} height={400} />
        </div>
        <div className="col-md-5 col-12">
          <div className="card p-4 shadow-sm" style={{backgroundColor:'#F5EFE3'}}>
            <h3 className="">Login</h3>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
              {() => (
                <Form className=''>
                  <div className="mb-3">
                    <label className="form-label">User Name:</label>
                    <Field type="text" name="userName" className="form-control Field" />
                    <ErrorMessage name="userName" component="div" className="text-danger" />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Password:</label>
                    <Field type="password" name="password" className="form-control" />
                    <ErrorMessage name="password" component="div" className="text-danger" />
                  </div>

                  <div className="mb-3 form-check">
                    <Field type="checkbox" name="rememberMe" className="form-check-input" />
                    <label className="form-check-label">Remember me next time</label>
                  </div>

                  <button type="submit" className="btn w-100" style={{backgroundColor:'#FF9219'}}>
                    Log In
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
