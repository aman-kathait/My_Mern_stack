const FormTextField=()=>{
  return <div className="container">
    <div class="mb-3">
    <label for="inputName" class="form-label">Full Name</label>
    <input type="name" class="form-control" id="inputName" placeholder="Enter your full name" ></input>
  </div>
  <div class="mb-3">
    <label for="inputEmail" class="form-label">Email address</label>
    <input type="email" class="form-control" id="inputEmail" placeholder="Enter your email"></input>
  </div>
  <div class="mb-3">
    <label for="inputAge" class="form-label">Age</label>
    <input type="email" class="form-control" id="inputAge" placeholder="Enter your age"></input>
  </div>
  </div>
}
export default FormTextField;