const React = require("react");

class New extends React.Component {
  render() {
    return (
      <form action="/api/jobPosting" method="POST">
        Job Title: <input type="text" name="title" /> <br />
        Description: <input type="text" name="description" /> <br />
        Is Ready to Eat: <input type="checkbox" name="readyToHire" /> <br />
        <input type="submit" name="" value="Post Job" />
      </form>
    );
  }
}
//

module.exports = New;
