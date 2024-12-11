const React = require("react");

class edit extends React.Component {
  render() {
    return (
      <div style={{ backgroundColor: "skyblue" }}>
        <h2>Update Your Information Here.</h2>
        <form
          action={`/api/jobPosting/add/${this.props.id}?_method=PUT`}
          method="POST"
        >
          ID: <input type="text" name="name" defaultValue={this.props.id} />{" "}
          <br />
          title:{" "}
          <input type="text" name="name" defaultValue={this.props.title} />{" "}
          <br />
          description:{" "}
          <input
            type="text"
            name="color"
            defaultValue={this.props.description}
          />{" "}
          <br />
          Is Ready to Hire:
          {this.props.readyToHire ? (
            <input type="checkbox" name="readyToEat" defaultChecked />
          ) : (
            <input type="checkbox" name="readyToEat" />
          )}
          <br />
          <input type="submit" name="" value="Update Information" />
        </form>
      </div>
    );
  }
}

module.exports = edit;
