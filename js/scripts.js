document.getElementById("submit").addEventListener("click",function(event){
      event.preventDefault()
    })
    
    function getStarted(){
    var dd = document.getElementById("dd").value;
    var mm = document.getElementById("mm").value;
    var yy = document.getElementById("yy").value;
    var gender = document.getElementById("gender").value;
    
    var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var maleNames = ["Kwasi", "Kwado", "Kwabena","Kwaku", "Yaw", "Kofi", "Kwame"];
    var femaleNames = ["Akosua","Adwoa", "Abena", "Akua", "Yaa", "Afua", "Ama"];
    var birthday = new Date(mm + '/' + dd + '/' + yy);
    var dayOfTheWeek = birthday.getDay();
    
      if (dd === "---"){
      document.getElementById("Invalid").innerText = "Please enter a valid date!"
      document.getElementById("Invalid").style.color ="blue"
      } else if(mm === "---"){
      document.getElementById("Invalid1").innerText = "Please select a month!"
      document.getElementById("Invalid1").style.color ="blue"
      } else if(yy <= 1899 || yy> 2020){
      document.getElementById("Invalid2").innerText = "Please enter a valid year!"
      document.getElementById("Invalid2").style.color ="blue"
      }else if (gender === "Male"){
      document.getElementById("Result").innerHTML = "🎉️🎉️You were born on a " + days[dayOfTheWeek] + ".\n" +  "Your Akan name is " + maleNames[dayOfTheWeek] + "🎉️🎉️"
      document.getElementById("Result").style.fontSize = "50px"
      document.getElementById("Result").style.textAlign = "center"
      document.getElementById("Result").style.color ="Brown"
      document.getElementById("Result").style.fontFamily ="'Kaushan Script', cursive"
      }else if (gender === "Female"){
      document.getElementById("Result").innerHTML = "🎉️🎉️You were born on a " + days[dayOfTheWeek] + ".\n" + "Your Akan name is " + femaleNames[dayOfTheWeek] + "🎉️🎉️"
      document.getElementById("Result").style.fontSize = "50px"
      document.getElementById("Result").style.textAlign = "center"
      document.getElementById("Result").style.color ="Purple"
      document.getElementById("Result").style.fontFamily ="'Kaushan Script', cursive"
      }else {
      document.getElementById("Invalid3").innerText = "Please select Gender!"
      document.getElementById("Invalid3").style.color ="blue"
      }
    }