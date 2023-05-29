import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import uniqid from "uniqid";
import * as Yup from "yup";
import { useFormSelector } from "../store/selector/formSelectors";
import { addUser } from "../store/action/formActions";
import styles from "../form/styles.module.scss";

interface IFormValues {
  firstName: string;
  lastName: string;
  email: string;
}

const initialValues: IFormValues = {
  firstName: "",
  lastName: "",
  email: "",
};

const validationSchema = Yup.object({
  firstName: Yup.string()
    .required("Required")
    .min(3, "First Name is too short"),
  lastName: Yup.string().required("Required").min(3, "Last Name is too short"),
  email: Yup.string().email("Please enter correct email").required("Required"),
});

export const FormikForm = () => {
  const MyFormUsers = useFormSelector();
  const dispatch = useDispatch();

  const onSubmit = (values: IFormValues) => {
    dispatch(
      addUser({
        id: uniqid(),
        username: values.firstName,
        userlastname: values.lastName,
        useremail: values.email,
      })
    );
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {() => {
        return (
          <>
            <Form className={styles["container"]}>
              <label>
                First Name:
                <Field
                  className={styles["m-10"]}
                  type="text"
                  name="firstName"
                />
              </label>
              <ErrorMessage
                component="div"
                name="firstName"
                className={styles["error"]}
              />

              <label>
                Last Name:
                <Field className={styles["m-10"]} type="text" name="lastName" />
              </label>
              <ErrorMessage
                component="div"
                name="lastName"
                className={styles["error"]}
              />

              <label>
                E-mail:
                <Field className={styles["m-10"]} type="text" name="email" />
              </label>
              <ErrorMessage
                component="div"
                name="email"
                className={styles["error"]}
              />

              <button type="submit" className={styles["btn"]}>
                Submit
              </button>

              {MyFormUsers.map((item) => (
                <table key={item.id}>
                  <tbody>
                  <tr>
                    <td>{item.username}</td>
                    <td>{item.userlastname}</td>
                    <td>{item.useremail}</td>
                  </tr>
                  </tbody>
                </table>
              ))}
            </Form>
          </>
        );
      }}
    </Formik>
  );
};
