function validationForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var date = document.getElementById("date").value;
    var occup_Stud = document.getElementById("occup_Stud").value;
    var occup_emp = document.getElementById("occup_emp").value;
    var termsnconditions = document.getElementById("termsnconditions").checked;
  
    // Check if any field is empty or terms are not accepted
    if (name === "" || email === "" || password === "" || confirmPassword === "" || date === "" || occup_Stud === "" || occup_emp === "" || !termsnconditions) {
      alert("Please fill out all the details and accept the terms and conditions.");
    } else {
      alert("Form is submitted successfully.");
    }
  }
      