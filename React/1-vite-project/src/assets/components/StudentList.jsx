const StudentList=(props)=>{
 
  return <ol>{
    props.student.map((student,index) => <li key={index}>{student}</li>)
  }
  </ol>
}
export default StudentList;