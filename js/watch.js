$(document).ready(function(){
     $("#myBtn").on("click", function(){
          read();
     });


//إخفاء وإظهار الردود
$(".reply").click(function() {
     $(this).parents("div.row").next("div.card").toggle();
     });

});

//إظهار النص المختفي 
function read(){
     let dots = document.getElementById("dots");
     let more = document.getElementById("more");
     let btnText = document.getElementById("myBtn");

     if(dots.style.display === "none") {
          dots.style.display = "inline";
          btnText.innerHTML = "عرض المزيد";
          more.style.display = "none";
     } else {
          dots.style.display = "none";
          btnText.innerHTML = "عرض عناصر أقل";
          more.style.display = "inline";
     }
}