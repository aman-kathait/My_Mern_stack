import Button from "./Button"

const FormField=()=> {
  return <div className="container">
  <div class="mb-3">
    Grade
    <select class="form-select" aria-label="Default select example">Grade
    <option selected>Select your Grade</option>
    <option value="1">90</option>
    <option value="2">80</option>
    <option value="3">70</option>
    </select>
  </div>
  <div class="mb-3">
  Gender
  <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"></input>
  <label class="form-check-label" for="flexRadioDefault1">
    Male
  </label>
  </div>
  <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"></input>
  <label class="form-check-label" for="flexRadioDefault2">
    Female
  </label>
  </div>

  <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"></input>
  <label class="form-check-label" for="flexRadioDefault2">
    Other
  </label>
  </div>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
    <label class="form-check-label" for="exampleCheck1">I agree to the terms and conditions</label>
  </div>
  <Button/>
  </div>

  
};

export default FormField;
