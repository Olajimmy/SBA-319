const React = require("react");

class Delete extends React.Component {
  render() {
    //console.log(this.props._id); // Check if the ID is being passed correctly

    return (
      <div style={{ backgroundColor: "aquamarine" }}>
        <h1>We would love if you stay. please dont go.</h1>
        <form
          action={`/api/jobPosting/remove/${this.props._id}?_method=DELETE`}
          method="POST"
        >
          Enter ID:
          <input type="text" name="_id" defaultValue={this.props._id} /> <br />
          <button>Delete</button>
        </form>
      </div>
    );
  }
}

module.exports = Delete;

// //delete sample

// const React = require("react");
// // const DefaultLayout = require('../layout/Default')

// class Index extends React.Component {
//   render() {
//     const { jobPosting } = this.props;
//     // const fruits = this.props.fruits;

//     return (
//       // <DefaultLayout title={"Fruits Index Page"}>
//       <>
//         <nav>
//           <a href="/jobPosting/delete">Create a New Fruit</a>
//         </nav>
//         <ul>
//           {jobPosting.map((job, i) => {
//             return (
//               <li>
//                 The <a href={`api/jobPosting/${job._id}`}>{job.name}</a> is{" "}
//                 {job.color} <br></br>
//                 {job.readyToEat
//                   ? `It is ready to eat`
//                   : `It is NOT ready to eat`}
//                 <br />
//                 <a href={`/fruits/${job._id}/edit`}>Edit This Fruit</a>
//                 <form
//                   action={`api/jobPosting/${job._id}?_method=DELETE`}
//                   method="POST"
//                 >
//                   <input type="submit" value="DELETE" />
//                 </form>
//               </li>
//             );
//           })}
//         </ul>
//       </>
//       // </DefaultLayout>
//     );
//   }
// }

// module.exports = Index;
