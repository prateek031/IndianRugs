function validateForm() {
    let x = document.forms["myForm"]["name"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
    let y = document.forms["myForm"]["email"].value;
    if (y == "") {
      alert("email must be filled out");
      return false;
    }
    let z = document.forms["myForm"]["number"].value;
    if (z == "") {
      alert("number must be filled out");
      return false;
    }
    let t = document.forms["myForm"]["address"].value;
    if (t == "") {
      alert("address must be filled out");
      return false;
    }
  }