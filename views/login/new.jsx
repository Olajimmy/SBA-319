const React = require("react");

class New extends React.Component {
  render() {
    return (
      <div
        style={
          ({ border: "1px solid black" }, { backgroundColor: "lightcoral" })
        }
      >
        <h2>Welcome To Our Login Page</h2>
        <h3 style={{}}>
          Enter Your User name and Password in the Textbox Below
        </h3>
        <form action="/api/login/" method="GET">
          User Name: <input type="text" name="title" /> <br />
          Password: <input type="text" name="description" /> <br />
          <input type="submit" name="" value="Login" />
        </form>
      </div>
    );
  }
}
//

module.exports = New;
