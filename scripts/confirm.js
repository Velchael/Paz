document.addEventListener('DOMContentLoaded', async function () {
    const confirmationMessage = document.getElementById('confirmationMessage');
    const confirmButton = document.getElementById('confirmButton');
        confirmButton.addEventListener('click', async function () {
        const urlParams = new URLSearchParams(window.location.search);
        const token = urlParams.get('token');
        if (!token) {
            confirmationMessage.textContent = 'Token no encontrado';
            confirmationMessage.style.color = 'red';
            confirmationMessage.style.display = 'block';
            return;
        }
        //console.log('Token encontrado:', token);
        try {
            //localhost:3307
            const response = await fetch(`http://intelsiteweb.com/appnode/users/confirm`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                // No es necesario enviar el token en el cuerpo si está en la URL
                credentials: 'include', 
                body: JSON.stringify({ token: token })
            });
            if (response.ok) {
                const data = await response.json();
                confirmationMessage.textContent = data.message;
                confirmationMessage.style.color = 'blue';
                //setEmailConfirmed(); 
            } else {
                const errorData = await response.json();
                console.error(errorData); // Imprime información adicional en la consola
                confirmationMessage.textContent = errorData.message || 'Error al confirmar el correo';
                confirmationMessage.style.color = 'red';
            }
        } catch (error) {
            console.error('Error al parsear JSON:', error);
            confirmationMessage.textContent = `Error: ${error.message}`;
            confirmationMessage.style.color = 'red';
            
        } finally {
            // Realiza la redirección después de que se complete la operación
            setTimeout(function () {
                window.location.href = "./inicio-sesion.html";
            }, 3000);
        }
        confirmationMessage.style.display = 'block';
  
    });
});