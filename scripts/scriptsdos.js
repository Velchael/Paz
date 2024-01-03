const loginform = document.querySelector('.login-form');
const inputLoginName = document.querySelector('.login-name');
const inputLogEmail = document.querySelector('.login-email');
const inputLoginPassword = document.querySelector('.login-password');
const registrationMessage = document.querySelector('#registration-message');
const registerForm = document.querySelector('.register-form');

const inputName = document.querySelector('.register-name');
const inputEmail = document.querySelector('.register-email');
const inputPassword = document.querySelector('.register-password');
const registrationMessagedos = document.querySelector('#registration-messagedos');
const usertarefa = document.querySelector('#usertarefa')
const confirmForm = document.querySelector('.register-form');

const loginUser = async (event) => {
  registrationMessage.textContent = '';
  registrationMessagedos.textContent = '';
  inputName.value = '';
  event.preventDefault();
  const user = { username: inputLoginName.value, email: inputLogEmail.value, password: inputLoginPassword.value };
  try {
    const response = await fetch('http://casadepazbak.kinghost.net:21030/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Especifica que el cuerpo de la solicitud es JSON
      },
      credentials: 'include', 
      body: JSON.stringify(user), // Convierte el objeto user a JSON y lo envía en el cuerpo
    });
    const responseData = await response.json();
    if (response.ok) {
     if (responseData.user && responseData.user.length > 0 && responseData.user[0].confirmed === 1) {
      registrationMessage.textContent = 'login com sucesso... pode continuar';
      registrationMessage.style.color = 'green';
      registrationMessage.style.display = 'block';
      var tarefauser = inputLoginName.value;
      // Almacena el estado del usuario en el localStorage
      localStorage.setItem('userConfirmed', 'true');
      //localStorage.setItem('userId', responseData.user[0].id);
      localStorage.setItem('userName', tarefauser); // Guarda el nombre del usuario
      var usertarefa = document.getElementById('usertarefa'); // Asegúrate de que haya un elemento con el id "usertarefa" en tu página.
      if (usertarefa) {
        usertarefa.innerHTML = 'Seja bem-vindo: <span style="color: black;">' + tarefauser + '</span>';
        usertarefa.style.color = 'green';
        usertarefa.style.display = 'block';
      }
      setTimeout(function () {
        window.location.href = "./index.html";
      }, 5000);
      } else {
        registrationMessage.textContent = 'Confirme seu email para continuar ou registrese com un correo valido';
        registrationMessage.style.color = 'red';
        registrationMessage.style.display = 'block';
      }
    } else if (response.status === 404) {
      registrationMessage.textContent = 'Usuario não existe. faça login de novo.';
      registrationMessage.style.color = 'red';
      registrationMessage.style.display = 'block';
    } else {
      registrationMessage.textContent = 'Erro de servidor. tente novamente mais tarde';
      registrationMessage.style.color = 'red';
      registrationMessage.style.display = 'block';
    }
  } catch (error) {
    console.error('Error al registrar el usuario:', error);
    registrationMessage.textContent = 'Error de conexão. Tente novamente...';
    registrationMessage.style.color = 'red';
    registrationMessage.style.display = 'block';
   // setTimeout(function () {
    //  window.location.href = "./index.html";
    //}, 2000);
  }
  setTimeout(function () {
    registrationMessage.textContent = '';
    registrationMessagedos.textContent = '';
  }, 7000); 
};
loginform.addEventListener('submit', loginUser);
// Verificación de existencia de usuario
const userExists = async (username, email, password) => {
  try {
    const response = await fetch('https://casadepazbak.kinghost.net:21030/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include', 
      body: JSON.stringify({ username, email, password })
    });
    if (response.status === 200) {
      const user = await response.json();
      return !!user; // Regresa true si el usuario existe, false en caso contrario
    } else if (response.status === 404) {
      return false;
    }
  } catch (error) {
    console.error('Error al verificar el usuario:', error);
   // setTimeout(function () {
   //   window.location.href = "./index.html";
   // }, 2000);
    return false;
  }
};
// Registro de nuevo usuario
const registerUser = async (event) => {
  registrationMessage.textContent = '';
  registrationMessagedos.textContent = '';
  inputLoginName.value = '';
  inputLoginPassword.value = '';
  inputLogEmail.value = '';
  event.preventDefault();
  const user = { username: inputName.value, email: inputEmail.value, password: inputPassword.value };
  
  if (await userExists(user.username, user.email, user.password)) {
    //console.log('Usuario ya existe'); // Agrega un mensaje para verificar si se detecta que el usuario ya existe
    registrationMessagedos.textContent = 'Error: El usuario ya ha sido registrado';
    registrationMessagedos.style.color = 'red';
    registrationMessagedos.style.display = 'block';
    inputEmail.value = '';
    inputPassword.value = '';
    setTimeout(function () {
      registrationMessage.textContent = '';
      registrationMessagedos.textContent = '';
      // Aquí colocas el código que se ejecutará después del tiempo especificado
    }, 4000);
    return;
  }
  try {
    const response = await fetch('https://casadepazbak.kinghost.net:21030/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include', 
      body: JSON.stringify(user)
    });
    if (response.ok) {
      registrationMessagedos.textContent = 'Um e-mail chegará em sua conta de correio para concluir seu cadastro, confirme...';
      registrationMessagedos.style.color = 'green';
      registrationMessagedos.style.display = 'block';
    } else {
      console.error('Error al registrar el usuario:', response.status); // Agrega un mensaje de error en caso de un problema
      registrationMessagedos.textContent = 'Error: No se pudo registrar';
      registrationMessagedos.style.color = 'red';
      registrationMessagedos.style.display = 'block';
      //setTimeout(function () {
      //  window.location.href = "./index.html";
      //}, 3000);
    }
  } catch (error) {
    registrationMessagedos.textContent = 'Error de conexión, inténtalo de nuevo';
    registrationMessagedos.style.color = 'red';
    registrationMessagedos.style.display = 'block';
   // setTimeout(function () {
    //  window.location.href = "./index.html";
    //}, 3000);
  }
  inputName.value = '';
  inputEmail.value = '';
  inputPassword.value = '';
  inputLoginPassword.value ='';
}
registerForm.addEventListener('submit', registerUser);