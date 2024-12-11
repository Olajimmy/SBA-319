const React = require("react");

class edit extends React.Component {
  render() {
    return (
      <form
        action={`/api/jobPosting/add/${this.props.id}?_method=PUT`}
        method="POST"
      >
        ID: <input type="text" name="name" defaultValue={this.props.id} />{" "}
        <br />
        Name: <input
          type="text"
          name="name"
          defaultValue={this.props.title}
        />{" "}
        <br />
        Color:{" "}
        <input
          type="text"
          name="color"
          defaultValue={this.props.description}
        />{" "}
        <br />
        Is Ready to Eat:
        {this.props.readyToHire ? (
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

module.exports = edit;
