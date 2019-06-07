$.get("Header+NavBar.html",function (data) {
    $("#head_placeholder").replaceWith(data);
});
$.get("footer.html",function (data) {
    $("#foot").replaceWith(data);
});


document.getElementById("welcomeHeading").onclick=function () {
    document.getElementById("showcase").innerHTML = "<p>whatever</p>";
    document.getElementById("showcase").style.display = "none";
};

