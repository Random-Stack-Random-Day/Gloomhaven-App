import React from 'react';
import { Formik } from 'formik';
import Button from 'material-ui/Button';


const LoginForm = (props) => {

//     render() {
//         const {
//             values,
//             errors,
//             touched,
//             handleChange,
//             handleBlur,
//             handleSubmit,
//             isSubmitting
//         } = this.props;

//         if (isSubmitting) return <Loading />;

//         return (
//             <div className="form-container">
//                 <header onClick={this.props.onBackClick} className="register-header" style={{ display: "flex", alignItems: "center", width: '80%' }}>
//                     <Icon name="arrow_back" size={32}/>
//                     <h2 style={{ color: "#5a5a5a", fontWeight: 300 }}>Back to Login</h2>
//                 </header>

//                 <ErrorLabel error={errors.register} color='#D50000' />
//                 <form style={this.props.style} className="register-form" onSubmit={handleSubmit}>
//                     <Input
//                         label="Email"
//                         type="email"
//                         name="email"
//                         placeholder="you@yourmail.com"
//                         onChange={handleChange}
//                         onBlur={handleBlur}
//                         value={values.email}
//                         error={touched.email && errors.email}
//                     />

//                     <Input
//                         label="Password"
//                         type="password"
//                         name="password"
//                         placeholder="password"
//                         onChange={handleChange}
//                         onBlur={handleBlur}
//                         value={values.password}
//                     />

//                     <Input
//                         label="Password confirm"
//                         type="password"
//                         name="passwordConfirm"
//                         placeholder="password confirm"
//                         onChange={handleChange}
//                         onBlur={handleBlur}
//                         value={values.passwordConfirm}
//                         error={touched.passwordConfirm && errors.passwordConfirm}
//                     />

//                     <Button
//                         className="auth-button"
//                         type="submit"
//                         text="LOGIN"
//                         styleType="accent"
//                     />
//                 </form>
//             </div>
//         );
//     }
// }

//     export default withFormik({
//         mapPropsToValues: props => ({
//             email: props.email,
//             password: props.password,
//             passwordConfirm: props.passwordConfirm
//         }),

//         validate: (values, props) => {
//             const errors = {};
            
//             if (!values.email) {
//                 errors.email = "Required";
//             }
//             else if (!Util.isValidEmail(values.email)) {
//                 errors.email = "Invalid email address";
//             }

//             if (values.passwordConfirm !== values.password) {
//                 errors.passwordConfirm = "Passwords do not match";
//             }

//             return errors;
//         },

//         handleSubmit: async (values, { props, setSubmitting, setErrors, resetForm }) => {
//             try {
//                 await UserService.loginUserByEmail(values.email, values.password)
//                 // await firebase.auth().signInWithEmailAndPassword(values.email, values.password);
//                 // props.history.push('/sandbox');
//             }
//             catch (e) {
//                 setSubmitting(false);
//                 setErrors({ register: 'Email already in use' });
//             }
//         }
//     })(LoginForm);





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