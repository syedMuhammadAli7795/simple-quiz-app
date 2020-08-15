function check(){
    var score =0;
const rightanswer1 = document.getElementById('q1a');
const rightanswer2 = document.getElementById('q1b');
const rightanswer3 = document.getElementById('q1c');
const rightanswer4 = document.getElementById('q1d');
 if(rightanswer1.checked == true){
  score++;
  alert("q1 is right")
  console.log("CHAL GYA")
 }
 else
 alert("Answer is wrong")




 const rightanswer2_1 = document.getElementById('q2a');
const rightanswer2_2 = document.getElementById('q2b');
const rightanswer2_3 = document.getElementById('q2c');
const rightanswer2_4 = document.getElementById('q2d');
 if(rightanswer2_3.checked == true){
  score++;
  alert("q1 is right")
  console.log("CHAL GYA")
 }
 else
 alert("Answer is wrong")




 const rightanswer3_1 = document.getElementById('q3a');
const rightanswer3_2 = document.getElementById('q3b');
const rightanswer3_3 = document.getElementById('q3c');
const rightanswer3_4 = document.getElementById('q3d');
 if(rightanswer3_4.checked == true){
  score++;
  alert("q1 is right")
  console.log("CHAL GYA")
 }
 else
 alert("Answer is wrong")



 alert("score is " + score++)
}