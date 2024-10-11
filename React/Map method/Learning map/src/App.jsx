import './App.css'
import List from '../components/List';
import Footer from '../components/Footer';
function App() {
  const studentArr=["Aman","Akash","Gopi","Abhijeet"];
  return (
    <>
      
      <h1>Learning Map</h1>
      <List list={studentArr}></List>
      <Footer/>
      
    </>
  )
}

export default App
