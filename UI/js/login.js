$(document).ready(() => {
  var inputs = document.querySelectorAll(".input");

  function focusFunc() {
    let parent = this.parentNode.parentNode;
    parent.classList.add("focus");
  }

  function blurFunc() {
    let parent = this.parentNode.parentNode;
    if (this.value == "") {
      parent.classList.remove("focus");
    }
  }
  function changeFunc() {
    let parent = this.parentNode.parentNode;
    if (this.value != "") {
      parent.classList.add("focus");
    }
  }

  inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
    input.addEventListener("change", changeFunc);
  });

  var checkForm = () => {
    var email = $("#user-email").val();
    var password = $("#user-password").val();

    if (email != null && password != null) {
      console.log(email, password);
    }
  };

  $("#login-form").submit((e) => {
    e.preventDefault();
    checkForm();
  });
});
