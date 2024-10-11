import './button.css'

const button=({type,btntext,onclickhandler})=>{
  if (type==='success') {
    return <button className="btn btn-success mybtn" onClick={onclickhandler}>{btntext}</button>
  }else if (type==='danger'){
    return <button className="btn btn-danger" onClick={onclickhandler}>{btntext}</button>
  }else{
    return <button className="btn btn-primary" onClick={onclickhandler}>{btntext}</button>
  }
}
export default button;