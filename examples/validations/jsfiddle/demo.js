/**
 * This JS file used for demoing the TShirt Forms example in JSFiddle.
 * Check out all of the examples on GitHub.
 *
 * https://github.com/stephencookdev/react-t-shirt-forms/tree/master/examples
 */
const { addValidation, yupSupport } = TShirtForm; // import { addValidation, yupSupport } from "react-t-shirt-forms";
TShirtForm = TShirtForm.default; // import TShirtForm from "react-t-shirt-forms";

// this tells T-Shirt Forms to use `yup` for any validations
// it also adds default validations for common fields
addValidation(yup, yupSupport);

const App = () => (
  <TShirtForm
    schema={{
      name: {
        type: "string",
        label: "Name",
        initialValue: "Cat Woman",
        validation: yup.string().oneOf(["Batman", "Bruce Wayne"])
      },
      description: {
        type: "string",
        label: "Description",
        initialValue: "Shadowy protector",
        // T-Shirt Forms provides yup transforms for `required`, so your validation
        // gets the information, and so does your component
        required: false
      },
      email: {
        // we don't specify a `validation` here, but `yupSupport` automatically
        // adds in basic email validation for any `type: "email"`
        type: "email",
        // here we indicate that we do want email to be a required field, but
        // that the "required" validation should only kick on when the form is
        // actually submitted.
        // this is nice when trying to reduce the noise on your form, such as for
        // a log-in form
        required: { onSubmit: true }
      },
      password: {
        type: "password",
        validation: yup.string().min(10),
        required: true
      },
      confirmPassword: {
        type: "password",
        label: "Confirm password",
        validation: yup
          .string()
          .oneOf([yup.ref("password")], "Password doesn't match!")
      }
    }}
    handleSubmit={async ({ formArgs }) => {
      console.log("If we get this far, then it means all validations passed!");
    }}
  />
);

ReactDOM.render(<App />, document.getElementById("app"));
