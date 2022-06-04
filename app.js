//make the navItems white
let navItems = $('.navItem').css("color",'white');

//make the background the color #145
let navigation = $("#nav").css("background-color","#145");


//make the even list numbers the color #ccc
let background = $("#contentContainer").children()[3];
for(i = 0; i < 11; i+=2){
let moreBackground = $(background).children()[i];
let evenBackground = $(moreBackground).css("background-color","#ccc");
}

//make the odd list numbers the color #aaa
for(i = 1; i < 10; i+=2){
    let moreBackground = $(background).children()[i];
    let evenBackground = $(moreBackground).css("background-color","#aaa");
    }

//add my name to the first name tag
let myName = $("#myInput").val("Joshua");