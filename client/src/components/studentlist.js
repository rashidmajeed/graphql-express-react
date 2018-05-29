import React, { Component } from 'react'
import * as apiCall from './../api';

 class StudentList extends Component {
    constructor(props) {
        super(props);
        this.state = {
         students: null
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
     
    return (

      <div>
        
      
      </div>
    )
  }
}


export default StudentList;
