const loginform = document.querySelector('.login-form');
const inputLoginName = document.querySelector('.login-name');
const inputLoginPassword = document.querySelector('.login-password');
const registrationMessage = document.querySelector('#registration-message');
const registerForm = document.querySelector('.register-form');
const inputName = document.querySelector('.register-name');
const inputEmail = document.querySelector('.register-email');
const inputPassword = document.querySelector('.register-password');
const registrationMessagedos = document.querySelector('#registration-messagedos');
const loginUser = async (event) => {
  registrationMessage.textContent = '';
  registrationMessagedos.textContent = '';
  inputName.value = '';
  event.preventDefault();
  const user = { username: inputLoginName.value, password: inputLoginPassword.value };
  try {
    const response = await fetch('http://localhost:3307/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json' // Especifica que el cuerpo de la solicitud es JSON
      },
      body: JSON.stringify(user) // Convierte el objeto user a JSON y lo envía en el cuerpo
    });
  
    if (response.status === 200) {
      registrationMessage.textContent = 'login com sucesso... pode continuar';
      registrationMessage.style.color = 'green';
      registrationMessage.style.display = 'block';
      setTimeout(function () {
        window.location.href = "./index.html";
      }, 2000);
    } else if (response.status === 404) {
      //console.error('Error al registrar el usuario:', response.status);
      registrationMessage.textContent = 'Usuario não existe. faça de novo.';
      registrationMessage.style.color = 'red';
      registrationMessage.style.display = 'block';
    } else {
      //console.error('Error al registrar el usuario:', response.status);
      registrationMessage.textContent = 'Erro de servidor. tente novamente mais tarde';
      registrationMessage.style.color = 'red';
      registrationMessage.style.display = 'block';
    }
  } catch (error) {
    //console.error('Error al registrar el usuario:', error);
    registrationMessage.textContent = 'Error de conexão. Tente novamente mais tarde.';
    registrationMessage.style.color = 'red';
    registrationMessage.style.display = 'block';
    setTimeout(function () {
      window.location.href = "./index.html";
    }, 2000);
  }

};
loginform.addEventListener('submit', loginUser)
// Verificación de existencia de usuario
const userExists = async (username, password) => {
  try {
    const response = await fetch('http://localhost:3307/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    });
    if (response.status === 200) {
      const user = await response.json();
      return !!user; // Regresa true si el usuario existe, false en caso contrario
    } else if (response.status === 404) {
      return false;
    }
  } catch (error) {
    console.error('Error al verificar el usuario:', error);
    setTimeout(function () {
      window.location.href = "./index.html";
    }, 2000);
    return false;
  }
};
// Registro de nuevo usuario
const registerUser = async (event) => {
  console.log('Función registerUser iniciada'); // Agrega un mensaje para verificar si la función se inicia
  registrationMessage.textContent = '';
  registrationMessagedos.textContent = '';
  inputLoginName.value = '';
  inputLoginPassword.value = '';
  event.preventDefault();
  // Crear el objeto user con los valores de los inputs
  const user = { username: inputName.value, email: inputEmail.value, password: inputPassword.value };
  console.log('Usuario creado:', user); // Agrega un mensaje para verificar si el objeto de usuario se crea correctamente
  if (await userExists(user.username, user.password)) {
    console.log('Usuario ya existe'); // Agrega un mensaje para verificar si se detecta que el usuario ya existe
    registrationMessagedos.textContent = 'Error: El usuario ya ha sido registrado';
    registrationMessagedos.style.color = 'red';
    registrationMessagedos.style.display = 'block';
    inputEmail.value = '';
    inputPassword.value = '';
    return;
  }
  try {
    const response = await fetch('http://localhost:3307/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    });
    if (response.ok) {
      registrationMessagedos.textContent = 'El registro se ha realizado con éxito';
      registrationMessagedos.style.color = 'green';
      registrationMessagedos.style.display = 'block';
    } else {
      console.error('Error al registrar el usuario:', response.status); // Agrega un mensaje de error en caso de un problema
      registrationMessagedos.textContent = 'Error: No se pudo registrar';
      registrationMessagedos.style.color = 'red';
      registrationMessagedos.style.display = 'block';
    }
  } catch (error) {
    console.error('Error de conexión:', error); // Agrega un mensaje de error en caso de una excepción
    registrationMessagedos.textContent = 'Error de conexión, inténtalo de nuevo más tarde';
    registrationMessagedos.style.color = 'red';
    registrationMessagedos.style.display = 'block';
    setTimeout(function () {
      window.location.href = "./index.html";
    }, 2000);
  }
  inputName.value = '';
  inputEmail.value = '';
  inputPassword.value = '';
  inputLoginPassword.value ='';
}
registerForm.addEventListener('submit', registerUser);
