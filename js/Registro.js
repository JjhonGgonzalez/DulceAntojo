const submit_button = document.querySelector(".button");
submit_button.onclick = (e) => {
    e.preventDefault();
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const email = document.getElementById("email").value;
    const pass = document.getElementById("pass").value;
    const cpass = document.getElementById("cpass").value;

    localStorage.setItem('FirstName', fname);
    localStorage.setItem('LastName', lname);
    localStorage.setItem('Email', email);
    localStorage.setItem('Password', pass);
    localStorage.setItem('Cpassword', cpass);
    if(fname == "" && lname == "" && email == "" && pass == "" && cpass == ""){
        swal({
            title: "¡Opps...!",
            text: "¡Ingrese todos los campos!",
            icon: "error",
          });
    }
    else
    {
        if(pass.length >= 6 && pass.length <= 20)
    {
        if( pass !== cpass){
            swal({
                title: "Opps...!",
                text: "¡La contraseña no coincide!",
                icon: "error",
              });
        }
        else
        {
            swal("¡Bienvenido!", "You clicked the button!", "success");
        }
    }
    else
    {
        swal({
            title: "Opps...!",
            text: "¡Ingrese la contraseña mínima de seis dígitos!",
            icon: "error",
          });
    }
    }
    


}