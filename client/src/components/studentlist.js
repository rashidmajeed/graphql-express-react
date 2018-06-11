import React, { Component } from 'react'
import * as apiCall from './../api';
import StudentItems from './studentItems';

class StudentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: []
    };
  }
  componentDidMount() {
    this.loadStudentList();
  }

  async loadStudentList() {
    let students = await apiCall.fetchStudents();
    this.setState({ students });
    console.log(students);
  }
  render() {
    const studentslist = this.state.students.map((student, i) => {
      ;
      return (
        <StudentItems key={student.id} data={student} />
      )
    })
    return (
      <div>
          {studentslist}
      </div>
    )
  }
}

export default StudentList;
