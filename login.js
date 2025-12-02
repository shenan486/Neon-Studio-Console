let username;
let password;

function checkIfTrue() {
  username = document.getElementById("username").value;
  password = document.getElementById("password").value;
  console.log('done');

  checkIdentity(username, password);
};

function checkIdentity(user, pass) {

  if (user == 'N-Ynktgt') {
    if (pass == '25141120720') {
      alert(`Logged In As Shenan`);
      const url = "https://n-s-c.netlify.app/n/shenan-home.html";
      window.open(url);
    } else {
      alert('wrong password');
    }
  } else if (user == 'N-Xobozn') {
    if (pass == '24152152614') {
      alert(`Logged In As Rivith`);
      const url = "https://n-s-c.netlify.app/n/rivith-home.html/";
      window.open(url);
    } else {
      alert('wrong password');
    }
  } else if (user == 'N-Jceivmsi') {
    if (pass == '103592213199') {
      alert(`Logged In As Buwaneka`);
      const url = "https://n-s-c.netlify.app/n/buwaneka-home.html";
      window.open(url);
    } else {
      alert('wrong password');
    }
  } else if (user == 'N-Jktkzn') {
    if (pass == '101120112614') {
      alert(`Logged In As Deneth`);
      const url = "https://n-s-c.netlify.app/n/deneth-home.html";
      window.open(url);
    } else {
      alert('wrong password');
    }
  } else {
    alert(`Get Out! :)`);
  }


  

};
