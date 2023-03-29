// login function

const login = document.querySelector('.login');
login.onclick = (e) => {
    e.preventDefault();
    // cautch the valu which is type user login page
    const emailAddress = document.getElementById("emailAddress").value;
    const passWord = document.getElementById("passWord").value;


    // let's get value in localstorage which store user in registration field
    const Email = localStorage.getItem("Email");
    const Password = localStorage.getItem("Password");

    if( emailAddress == "" && passWord == ""){
      swal({
        title: "¡Opps...!",
        text: "¡Ingrese todos los campos!",
        icon: "error",
      });
    }
    else
    {
        if(emailAddress == Email && passWord == Password){
          swal("¡Bienvenido!", "¡Inicio de sesión Exitosa!", "success");
            setTimeout(()=>{
                window.location = "/html/Productos.html"
                },1000)
        }else
        {
          swal({
            title: "Opps...!",
            text: "¡Algo está mal!",
            icon: "error",
          });
        }
    };


};