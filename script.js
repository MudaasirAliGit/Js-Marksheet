let english = Number(prompt("Please enter your english marks out of 100:","80"));
let urdu = Number(prompt("Please enter your urdu marks out of 100:","80"));
let maths = Number(prompt("Please enter your maths marks out of 100:","80"));
let islamiat = Number(prompt("Please enter your islamiat marks out of 100:","80"));
let science = Number(prompt("Please enter your science marks out of 100:","80"));

let totalMarks = 500, obtainMarks = english + urdu + maths + islamiat + science;
let percentage = ((obtainMarks/totalMarks)*100), grade;

if(percentage >= 80){
    grade = "A+";
}else if(percentage >= 70){
    grade = "A";
}else if(percentage >= 60){
    grade = "B";
}else if(percentage >= 50){
    grade = "C";
}else{
    grade = "F";
}

alert("MARKSHEET\nEnglish: " + english + "/100\nUrdu: " 
    + urdu + "/100\nMaths: " + maths + "/100\nIslamiat: " +
     islamiat + "/100\nScience: " + science +
      "/100\nObtain Marks: " + obtainMarks +
       "/500\nPercentage: " + percentage +
        "%\nGrade: " + grade);