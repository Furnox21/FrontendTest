import React, { Component } from "react";
import { Table, Button } from "reactstrap";
import StudentService from "../Services/StudentService";
class Content extends Component {
  constructor(props) {
    super(props);

    this.state = {
      students: [],
    };
    // this.addStudent = this.addStudent.bind(this);
    // this.editStudent = this.editStudent.bind(this);
  }

  componentDidMount() {
    StudentService.getStudent().then((res) => {
      this.setState({ students: res.data });
    });
  }

  render() {
    return (
      <div>
        <br />
        <br />
        <div className="row" style={{ padding: 10 }}>
          <button class="btn btn-primary" onClick={this.addStudent}>
            Tambah Student
          </button>
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
                  &nbsp; &nbsp;
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
      </div>
    );
  }
}
export default Content;
