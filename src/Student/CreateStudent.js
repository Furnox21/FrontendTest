import React, { Component } from "react";
import StudentService from "../Services/StudentService";

const style = {
  color: "white",
  fontFamily: "Trebuchet MS",
  fontSize: "20px",
  fontWeight: "italic",
};

class CreateStudent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      name: "",
      major: "",
      passion: "",
    };
    this.setValueName = this.setValueName.bind(this);
    this.setValueMajor = this.setValueMajor.bind(this);
    this.setValuePassion = this.setValuePassion.bind(this);
  }

  deleteStudent(id) {
    console.log(id);

    StudentService.deleteStudent(id).then((res) => {
      this.setState({
        students: this.state.students.filter((student) => student._id !== id),
      });
    });
  }

  componentDidMount() {
    if (this.state.id === "_add") {
      return;
    } else {
      StudentService.getStudentById(this.state.id).then((res) => {
        let student = res.data;
        this.setState({
          name: student.name,
          major: student.major,
          passion: student.passion,
          status: student.status,
        });
      });
    }
  }
  saveOrUpdateStudent = (e) => {
    e.preventDefault();
    let student = {
      name: this.state.name,
      major: this.state.major,
      passion: this.state.passion,
    };
    console.log("student => " + JSON.stringify(student));

    if (this.state.id === "_add") {
      StudentService.createStudent(student).then((res) => {
        this.props.history.push("/students");
      });
    } else {
      StudentService.updateStudent(student, this.state.id).then((res) => {
        this.props.history.push("/students");
      });
    }
  };

  setValueName = (event) => {
    this.setState({ name: event.target.value });
  };

  setValueMajor = (event) => {
    this.setState({ major: event.target.value });
  };

  setValuePassion = (event) => {
    this.setState({ passion: event.target.value });
  };

  cancel() {
    this.props.history.push("/students");
  }
  getTitle() {
    if (this.state.id === "_add") {
      return <h3 className="text-center">Add Student</h3>;
    } else {
      return <h3 className="text-center">Update Student</h3>;
    }
  }

  render() {
    return (
      <div>
        <br></br>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              {this.getTitle()}
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label> Student Name: </label>
                    <input
                      placeholder="Student Name..."
                      name="studentName"
                      className="form-control"
                      value={this.state.name}
                      onChange={this.setValueName}
                    />
                  </div>
                  <br />
                  <div className="form-group">
                    <label> Major : </label>
                    <input
                      placeholder="Student Major.."
                      name="studentMajor"
                      className="form-control"
                      value={this.state.major}
                      onChange={this.setValueMajor}
                    />
                  </div>
                  <br />
                  <div className="form-group">
                    <label> Student Passion: </label>
                    <input
                      placeholder="Student Passion..."
                      name="studentPassion"
                      className="form-control"
                      value={this.state.passion}
                      onChange={this.setValuePassion}
                    />
                  </div>
                  <br />
                  <br />
                  <button
                    style={style}
                    className="btn btn-success"
                    onClick={this.saveOrUpdateStudent}
                  >
                    Save
                  </button>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <button
                    className="btn btn-danger"
                    onClick={this.cancel.bind(this)}
                    style={style}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default CreateStudent;
