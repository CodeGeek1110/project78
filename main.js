var name_of_students_length=[];
function submit() {
   
     var name1 = document.getElementById("name_1").value;
     var name2 = document.getElementById("name_2").value;
     var name3 = document.getElementById("name_3").value;
     var name4 = document.getElementById("name_4").value;
     var name5 = document.getElementById("name_5").value;
     var name6 = document.getElementById("name_6").value;
     var name7 = document.getElementById("name_7").value;
     var name8 = document.getElementById("name_8").value;
     var name9 = document.getElementById("name_9").value;
     var name10 = document.getElementById("name_10").value;
    name_of_students_length.push(name1);
    name_of_students_length.push(name2);
    name_of_students_length.push(name3);
    name_of_students_length.push(name4);
    name_of_students_length.push(name5);
    name_of_students_length.push(name6);
    name_of_students_length.push(name7);
    name_of_students_length.push(name8);
    name_of_students_length.push(name9);
    name_of_students_length.push(name10);
    console.log(name_of_students_length);
    document.getElementById("result").innerHTML=name_of_students_length;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}

function sort() {
    name_of_students_length.sort();
    console.log(name_of_students_length);
    document.getElementById("result").innerHTML=name_of_students_length;

}
