/**
 * This JS file used for demoing the TShirt Forms example in JSFiddle.
 * Check out all of the examples on GitHub.
 *
 * https://github.com/stephencookdev/react-t-shirt-forms/tree/master/examples
 */

TShirtForm = TShirtForm.default; // import TShirtForm from "react-t-shirt-forms";

const App = () => (
  <TShirtForm
    schema={{
      name: {
        type: "string",
        label: "Name",
        initialValue: "Bruce Wayne"
      },
      email: {
        type: "email"
      },
      dob: {
        type: "date",
        label: "Date of birth"
      }
    }}
    handleSubmit={async ({ formArgs }) => {
      // `formArgs.formState` contains the state of our form
      // we'll wait a bit, just to pretend we're sending it to a back-end
      await new Promise(resolve => setTimeout(resolve, 1000));

      // and then we'll just log out the form values to the console
      console.log(JSON.stringify(formArgs, null, 2));
    }}
  />
);

ReactDOM.render(<App />, document.getElementById("app"));
