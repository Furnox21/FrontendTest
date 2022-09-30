import axios from "axios";

const API_BASE_URL = "https://fierce-stream-83015.herokuapp.com/api/student";

class StudentService {
  getStudent() {
    return axios.get(API_BASE_URL);
  }
  createStudent(data) {
    return axios.post(API_BASE_URL, data);
  }
  getStudentById(dataId) {
    return axios.get(API_BASE_URL + "/" + dataId);
  }

  updateStudent(data, dataId) {
    return axios.put(API_BASE_URL + "/" + dataId, data);
  }
  deleteStudent(dataId) {
    return axios.delete(API_BASE_URL + "/" + dataId);
  }
}
export default new StudentService();
