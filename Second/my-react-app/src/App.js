import React from "react"
import './App.css';
import { faUser } from "../node_modules/@fortawesome/free-solid-svg-icons";
import { faLock } from "../node_modules/@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "../node_modules/@fortawesome/react-fontawesome";
import { Formik, Field, Form} from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid e-mail")
    .required("Поле обязательно к заполнению!"),
  password: Yup.string()
    .min(6, "Invalid password (min 6 - max 24)")
    .max(24, "Invalid password (min 6 - max 24)")
    .required("This field is required!"),
});

const App = () => {

  return (
    <div className="App">
      <h1>Bank <span className="header-span">Support Portal</span></h1>
        <div className="form-wrapper">
          <faCoffee icon="fas fa-ad"/>
          <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={(data) => {
            console.log(data);
          }}
        >
          {({ touched, errors }) => (
            <Form className="form">
              <div>
                  <div className="field-block">
                    <FontAwesomeIcon icon={faUser}/>
                    <Field className={touched.email && (touched.email && errors.email ? "error" : "success") } name="email" type="email" placeholder="E-mail"></Field>
                    {touched.email && errors.email && (
                      <div className="error">{errors.email}</div>
                    )}
                    {touched.email && errors.email && (
                      <div className="cross">Krestik</div>
                    )}
                    {touched.email && !errors.email && (
                      <div className="Succesed">galochka</div>
                    )}
                  </div>
              </div>
              <div>
                  <div className="field-block">
                        <FontAwesomeIcon icon ={faLock}/>
                        <Field className={touched.password && (touched.password && errors.password ? "error" : "success") } name="password" type="password" placeholder="Password"></Field>
                        {touched.password && errors.password && (
                          <div className="error">{errors.password}</div>
                        )}
                        {touched.password && errors.password && (
                          <div className="cross">Krestik</div>
                        )}
                        {touched.password && !errors.password && (
                          <div className="success">{!errors.password}</div>
                        )}
                        {touched.password && !errors.password && (
                          <div className="Succesed">galochka</div>
                        )}
                  </div>
              </div>
              <button type="submit" >Login</button>
            </Form>
          )}
        </Formik>
            <p className="form-wrapper__paragraph">Forgot your password? <a href="#." className="form-wrapper__link">Reset it here.</a></p>
        </div>  
    </div>
  );
}

export default App;
