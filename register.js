//adds header and nav
$.get("Header+NavBar.html",function (data) {
    $("#head_placeholder").replaceWith(data);
});
//adds footer
$.get("footer.html",function (data) {
    $("#foot_div").replaceWith(data);
});
//validates form inputs
$("#mainform").validate({
   rules: {
       email: {
           required: true,
           email:true
       },
       name: {
           required: true,
           minlength: 2
       },
       Telephone: {
           required: true,
           minlength: 8
       },
       pass: {
           required: true,
           minlength: 6
       }
   },
    messages: {
       email: {
           required:"Please enter a email address",
           email:"Please enter a valid email"
       }
    }
});


























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
