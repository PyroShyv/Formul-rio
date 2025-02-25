document.getElementById('btninscrever').addEventListener('click', function(event) {
    event.preventDefault();  
    var email = document.getElementById('inputEmail4').value;
    alert("O seu e-mail é: " + email);
});
