const React = require("react");

class edit2 extends React.Component {
  render() {
    return (
      <form
        action={`/api/jobPosting/add/${this.props._id}?_method=PUT`}
        method="POST"
      >
        ID: <input type="text" name="_id" defaultValue={this.props._id} />{" "}
        <br />
        Name: <input
          type="text"
          name="name"
          defaultValue={this.props.name}
        />{" "}
        <br />
        Color:{" "}
        <input type="text" name="color" defaultValue={this.props.color} />{" "}
        <br />
        Is Ready to Eat:
        {this.props.readyToEat ? (
          <input type="checkbox" name="readyToEat" defaultChecked />
        ) : (
          <input type="checkbox" name="readyToEat" />
        )}
        <br />
        <input type="submit" name="" value="Update Information" />
      </form>
    );
  }
}

module.exports = edit2;
