const React = require("react");

class New extends React.Component {
  render() {
    return (
      <div
        style={
          ({ border: "1px solid black" }, { backgroundColor: "lightcoral" })
        }
      >
        <h2>Welcome To Our Registration Page</h2>
        <h3 style={{}}>Enter Your Information in the Textbox Below</h3>
        <form action="/api/register" method="POST">
          User Name: <input type="text" name="title" /> <br />
          Email: <input type="text" name="email" /> <br />
          Confirm Email:
          <input type="text" name="confirmEmail" /> <br />
          Password: <input type="text" name="description" /> <br />
          Confirm Password: <input type="text" name="confirmPassword" /> <br />
          <input type="submit" name="" value="Register" />
        </form>
      </div>
    );
  }
}
//

module.exports = New;
