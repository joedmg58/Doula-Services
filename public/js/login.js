$(document).ready(function() {
  // Getting references to our form and inputs
  var loginForm = $("#submitLogin");
  var adminNameInput = $("input#adminName");
  var adminPwdInput = $("input#adminPwd");

  

  // When the form is submitted, we validate there's a name and password entered
  loginForm.on("click", function(event) {
    console.log("There is not admin with this name");
    event.preventDefault();
    var adminData = {
      Admin_name: adminNameInput.val().trim(),
      Admin_pwd: adminPwdInput.val().trim()
    };
    console.log(adminData);

    if (!adminData.Admin_name || !adminPwdInput.Admin_pwd) {
    
      return;
     
    }

    // If we have an email and password we run the loginAdmin function and clear the form
    loginAdmin(adminData.Admin_name, adminPwdInput.Admin_pwd);
    adminNameInput.val("");
    adminPwdInput.val("");
  });

  // loginAdmin does a post to our "api/login" route and if successful,
  function loginAdmin(adminNameInput, adminPwdInput) {
    $.post("/api/contact", {
      Admin_name: adminNameInput,
      Admin_pwd: adminPwdInput,
    }).then(function(data) {
      window.location.replace(data);
      // If there's an error, log the error
    }).catch(function(err) {
      console.log(err);
    });
  }

});
