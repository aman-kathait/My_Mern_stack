import './App.css'
import Heading from './assets/components/Heading'
import Paragraph from './assets/components/Paragraph'
import Button from './assets/components/Button'
import Dynamic from './assets/components/Dynamic'
import StudentList from './assets/components/StudentList'

function App() {
  const red=()=>{
    console.log('red button click');
  }
  const green=()=>{
    console.log('green button click');
  }
  const blue=()=>{
    console.log('blue button click');
  }
  const student=["Aman","RAM","SHYAM"];
  return (
    <>
      <Heading titletext="This is my new heading"/>
      <Heading titletext="this is my second heading"/>
      <Paragraph/> 
      <Button type={'success'} btntext={'Save'} onclickhandler={green}/>
      <Button type={'danger'} btntext={' Delete'} onclickhandler={red}/>
      <Button btntext={'Default'} onclickhandler={blue}/>
      <Dynamic/>
      <StudentList student={student}/>
    </>
  )
}

export default App
