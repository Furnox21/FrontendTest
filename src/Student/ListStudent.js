import React, { Component } from "react";
import { Table, Button } from "reactstrap";
import StudentService from "../Services/StudentService";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { NavbarBrand } from "reactstrap";

const style = {
  color: "white",
  fontFamily: "Trebuchet MS",
  fontSize: "20px",
  fontWeight: "italic",
  paddingLeft: "-10%",
  paddingLRight: "0%",
  marginRight: "78%",
};

const style2 = {
  color: "white",
  fontFamily: "Trebuchet MS",
  fontSize: "20px",
  fontWeight: "italic",
  paddingLeft: "4%",
  paddingRight: "60%",
};

const style3 = {
  color: "black",
  fontFamily: "Trebuchet MS",
  fontSize: "60px",
  fontWeight: "bold",
};

const style4 = {
  color: "white",
  fontFamily: "Trebuchet MS",
  fontSize: "20px",
  fontWeight: "italic",
};
const style5 = {
  color: "white",
  fontFamily: "Trebuchet MS",
  fontSize: "20px",
  fontWeight: "italic",
  marginLeft: "65%",
  marginTop: "-4%",
};

export default class ListStudent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      students: [],
      search_student: "",
    };
    this.addStudent = this.addStudent.bind(this);
    this.editStudent = this.editStudent.bind(this);
    this.deleteStudent = this.deleteStudent.bind(this);
    this.searchStudent = this.searchStudent.bind(this);
    this.details = this.details.bind(this);
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
    StudentService.getStudent().then((res) => {
      this.setState({ students: res.data });
    });
  }
  addStudent() {
    this.props.history.push("/add-student/_add");
  }
  details() {
    this.props.history.push("/details");
  }
  editStudent(id) {
    this.props.history.push("/add-student/" + id);
  }

  setSearch(value) {
    this.setState({ search_student: value });
  }

  searchStudent() {
    if (this.state.search_student !== "") {
      this.setState({
        students: this.state.students.filter((student) =>
          student.name.includes(this.state.search_student)
        ),
      });
    } else {
      StudentService.getStudent().then((res) => {
        this.setState({ students: res.data });
      });
    }
  }

  render() {
    return (
      <div>
        <br />
        <br />
        <NavbarBrand href="/">
          <h1 style={style3}>STUDENT LIST</h1>
        </NavbarBrand>
        <br />
        <div>
          <button
            style={style}
            class="btn btn-primary"
            onClick={this.addStudent.bind(this)}
          >
            + Add New Student
          </button>
        </div>

        <button
          style={style5}
          class="btn btn-primary"
          onClick={this.details.bind(this)}
        >
          Flickr API Image
        </button>

        <br />
        <div style={style2}>
          <InputGroup>
            <Form.Control
              placeholder="Type Student Name...."
              aria-label="Type Student Name...."
              aria-describedby="basic-addon2"
              onChange={(e) => this.setSearch(e.target.value)}
            />
            <Button id="basic-addon2" onClick={() => this.searchStudent()}>
              Search Student
            </Button>
          </InputGroup>
        </div>
        <br />
        <Table hover>
          <thead>
            <tr>
              <th>Student Name</th>
              <th>Major</th>
              <th>Student Passion</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.students.map((student) => (
              <tr>
                <td> {student.name}</td>
                <td> {student.major}</td>
                <td> {student.passion}</td>
                <td>
                  <Button
                    onClick={() => this.editStudent(student._id)}
                    color="warning"
                  >
                    Edit Data
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      class="bi bi-pencil-square"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                      <path
                        fill-rule="evenodd"
                        d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                      />
                    </svg>
                  </Button>
                  &nbsp;&nbsp;
                  <Button
                    onClick={() => this.deleteStudent(student._id)}
                    color="danger"
                  >
                    Delete Data
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      class="bi bi-trash-fill"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"
                      />
                    </svg>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <br />
        <br />
        <br />
      </div>
    );
  }
}
