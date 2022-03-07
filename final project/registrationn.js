$(document).ready(function() {
    $("#register").click(function() {
    var name = $("#name").val();
    var email = $("#email").val();
    var password = $("#password").val();
    var cpassword = $("#cpassword").val();
    if (name == '' || email == '' || password == '' || cpassword == '') {
    alert("Please fill all fields!");
    } else if ((password.length) < 8) {
    alert("Password should atleast 8 character in length");
    } else if (!(password).match(cpassword)) {
    alert("Your passwords don't match. Try again?");
    }else if ( password == '12345678') {
        alert("Are your serious bro? Too difficult password");
        }  else {
    $.post("register.php", {
    name1: name,
    email1: email,
    password1: password
    }, function(data) {
    if (data == 'You have Successfully Registered.....') {
    $("form")[0].reset();
    }
    alert(data);
    });
    }
    });
    });





    function soundClick() {
        var audio = new Audio(); // Создаём новый элемент Audio
        audio.src = 'ES_Car Engine Rev 5 - SFX Producer.mp3'; // Указываем путь к звуку "клика"
        audio.autoplay = true; // Автоматически запускаем
      }







      function bigImg(x) {
        x.style.height = "370px";
        x.style.width = "580px";
      }
      
      function normalImg(x) {
        x.style.height = "300px";
        x.style.width = "510px";
      }



      $(document).ready(function(){
        $("#btn1").click(function(){
        $(".divClass").slideToggle("slow",function()
        {

        });
      });
    });
    document.getElementById("myBtn").addEventListener("click", function() {
      alert("Hello World!");
    });




    