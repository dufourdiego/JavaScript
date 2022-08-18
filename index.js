
      let user = "Diego";
      let password = 123456;
      let user1, passw1, acceso = 0;

      // Tengo 5 oportunidades para ingresar usuario y contraseña correctas, si no se bloquea el ingreso
      // Si ingresa los datos correctos sale del bucle

      for(i=1; i<=5; i++){
            user1 = prompt(`Ingresa el nombre de usuario - Intento ${i}`);
            passw1 = parseInt(prompt("Ingresa la contraseña"));
            if(user1 === user){
                  if(passw1 === password){
                        alert(`Bienvenido ${user1}`);
                        acceso = 1;
                        break;
                  }
                  else{
                        alert("Usuario o contraseña incorrectos");
                        
                  }
            }
            
            else{ 
                  alert("Usuario o contraseña incorrectos");
                  
            }
            if(i===5) {
                  alert("Usuario bloqueado");
            }
                  
      }
      
      if(acceso){
            alert("Usuario logueado correctamente");
      }