import React from 'react';
import { Formik } from 'formik';
import Button from 'material-ui/Button';


const LoginForm = (props) => {

    return (
     
        <div>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                }}
                validate={values => {
                    // same as above, but feel free to move this into a class method now.
                    let errors = {};
                    if (!values.email) {
                    errors.email = 'Required';
                    } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
                    ) {
                    errors.email = 'Invalid email address';
                    }
                    return errors;
                }}
                onSubmit={(
                    values,
                    { setSubmitting, setErrors /* setValues and other goodies */ }
                  ) => {
                      props.logMeIn(values)
                    //   .then( 
                    //   user => {
                    //     setSubmitting(false); 
                    //     // props.closeLoginModal();
                    //     // do whatevs...
                    //     // props.updateUser(user)
                    //   },
                    //   errors => {
                    //     setSubmitting(false);
                    //     // Maybe transform your API's errors into the same shape as Formik's
                    //     //setErrors(transformMyApiErrors(errors));
                    //     alert("No user with those credentials found");
                    //   }
                    // );
                }}
                render={({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                }) => (
                    <form onSubmit={handleSubmit}>
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                    />
                    {touched.email && errors.email && <div>{errors.email}</div>}
                    <br /><label>Password</label>
                    <input
                        type="password"
                        name="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                    />
                    {touched.password && errors.password && <div>{errors.password}</div>}
                    <Button variant="raised" color="secondary" type="submit" disabled={isSubmitting}>
                        Login
                    </Button>
                    </form>
                )}
            />
        </div>
    );
};

export default LoginForm;