var images= ["Images/0.jpg","Images/1.jpg","Images/2.jpg","Images/3.jpg","Images/4.jpg","Images/5.jpg","Images/6.jpg","Images/7.jpg","Images/8.jpg","Images/9.jpg"]
var answers = ["Brooklyn Bridge","Burj Al Arab","Burj Khalifa","Empire State Building","Golden gate Bridge","Hoover Dam","Space Needle","Statue of Liberty","Tower Bridge","Tower of Pisa"]
var imgContainer = document.createElement("img");
var i=0, marks = 0;
genQues();
genTimer();
function checkAns(){
    var input = document.getElementById("ans").value;
    document.getElementById("ans").value = "";
    if(answers[i].toLowerCase()==input.toLowerCase()){
        marks++;
    }
    i++;
    console.log(input," ", marks);
    genQues();
}
function genQues(){
    var loc = images[i];
    document.getElementById("image").setAttribute("src",loc);
}
function genTimer(){
    var timeleft = 45;
    var Timer = setInterval(function(){
      if(timeleft < 0){
        console.log(marks);
        document.getElementById("points").innerHTML = "\xa0"+ marks + "\xa0"; 
        $('#endGame').modal('show');
        clearInterval(Timer);
        //genQues();
      } else {
        document.getElementById("countdown").innerHTML = timeleft;
      }
      timeleft--;
    }, 1000);
}