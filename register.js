$.get("Header+NavBar.html",function (data) {
    $("#head_placeholder").replaceWith(data);
});

$.get("footer.html",function (data) {
    $("#foot_div").replaceWith(data);
});

document.getElementById("submit_btn").onclick = function () {
    var textentered;
    textentered = document.getElementById("name_input").value;
    alert(textentered);
    document.getElementById("namespan").innerText = "done";
};



























/*
var myarray = new Array();
myarray[0] = "pizza";
myarray[1] = "pepporoni";

var tweets = ["morning","noooooo"];

tweets.splice(1,2); //delete 2 items

tweets.splice(1,0,"adds item before 1");

tweets.splice(1,1,"replace 1st element","adds 2nd element after 1st");

tweets.push("yeahhhhh"); //adds at last
console.log(tweets);

//creating random numbers
console.log(Math.floor(Math.random()*5)+1);
*/
