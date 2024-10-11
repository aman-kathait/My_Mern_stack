import './button.css'

const button=({type,btntext,onclickhandler})=>{
  if (type==='success') {
    return <button className="greenbtn" onClick={onclickhandler}>{btntext}</button>
  }else if (type==='danger'){
    return <button className="redbtn" onClick={onclickhandler}>{btntext}</button>
  }else{
    return <button className="bluebtn" onClick={onclickhandler}>{btntext}</button>
  }
}
export default button;