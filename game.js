let area = 0
$("#key").hide()
$(".interface").hide()
$("#dir-right").hide()
$("#directions").hide()
$("#dir-up").hide()
$("#dir-down").hide()
let hasKey = false



let Sounds = [ "assets/sounds/footstep.mp3", "assets/sounds/key.mp3", "assets/sounds/door.mp3"]

 function playSound(sound) {
 const soundEffect = new Audio(sound)
     soundEffect.play()
};

$("#start").click(function() {
    $(".screen").css("margin-top","0%")
    $(".interface").show()
    $("#title").hide()
    $("#start").hide()
    $(".screen").css("background-image", "url(assets/room1/prison.jpeg)")
    $("#directions").show()

})

// first room

$("#dir-left").click(function() {
    switch (area) {
    case 0:
        area = 1
 
    break;

    case 4:
        area = 3
    break;
    case 6:
        area = 5
    break;  
   }
    console.log('Area:' + area)
})

$("#dir-right").click(function() {
    switch (area) {

    case 1:
    area = 0
    break;

    case 3:
    area = 4
    break;

    case 4:
    area = 5

    break;
    case 5:
    area = 6
    break;

   }
     console.log('Area:' + area)
})

$("#dir-up").click(function() {
    switch (area) {

    case 1:
        area = 2
    break;

    case 2:
        area = 3
    break;
    case 6:
        area = 7
    break;
    case 7:
        area = 8
        break;
   }
     console.log('Area:' + area)
})

$("#dir-down").click(function() {
   switch (area) {
    case 2:
        area = 1

    break;

    case 3:
        area = 2
    break;
    case 5:
        area = 4;
    break;

    case 7:
        area = 6;
    break;
   }
     console.log('Area:' + area)
})

$("#key").click(function() {
    playSound(Sounds[1])
    $("#key").hide()
    hasKey = true
    $(".interface").html("<img src='assets/items/key.png' width='5%' height='auto' alt='key'>");


})

$("#dir-left, #dir-right, #dir-up, #dir-down").click(function() {
    playSound(Sounds[0])
    switch (area) {
    case 0:
        $("#dir-right").hide()
        $(".screen").css("background-image", "url(assets/room1/prison.jpeg)")
        $("#directions").css("flex-direction", "row")
        $("#dir-left").show()
        $("#dir-up").hide();
    break;
    case 1:
        $(".screen").css("background-image", "url(assets/room1/prison2.jpeg)")
        $("#dir-left").hide()
        $("#dir-down").hide()
        $("#directions").css("flex-direction", "row-reverse")
        $("#dir-right").show()
        $("#dir-up").show()
    break;
    case 2:
        $("#dir-right").hide()
        $("#dir-left").hide()
        $(".screen").css("background-image", "url(assets/room1/prison3.jpeg)")
        $("#dir-down").show()
        $("#dir-up").show()
        $("#key").hide()     
    break;
    case 3:
        $("#dir-up").hide()
        $("#dir-left").hide()
        $(".screen").css("background-image", "url(assets/room1/prison4.jpeg)")
        $("#dir-right").show()
        $("#dir-down").show()
        $("#directions").css("flex-direction", "row-reverse")
        if (!hasKey) {
            $("#key").show()
        }
  
    break;
    case 4:
        $("#key").hide()
        $("#dir-up").hide();
        $("#dir-down").hide();
        $("#directions").css("flex-direction", "row")
        $(".screen").css("background-image", "url(assets/room1/prison5.jpeg)")
        $("#dir-left").show();
    break;
    case 5: 
        $("#dir-up").hide();
        $("#dir-left").hide()
        $(".screen").css("background-image", "url(assets/room1/prison6.jpeg)")
        $("#dir-down").show();
        $("#directions").css("flex-direction", "row-reverse")
        $("#dir-right").show();
    break;
    case 6:
        $("#directions").css("flex-direction", "row")
        $("#dir-right").hide()
        $("#dir-down").hide();
        $(".screen").css("background-image", "url(assets/room1/prison7.jpeg)")
        $("#dir-left").show();
        $("#dir-up").show()
    break;
    case 7:
        $(".screen").css("background-image", "url(assets/room1/prison8.jpeg)")
        $("#dir-up").hide()
        $("#dir-left").hide()
        $("#dir-down").show()

     if (hasKey) {
       $("#dir-up").show()  
     }
    break;
    case 8:
        playSound(Sounds[2])
        $("#dir-down").hide()
        $("#dir-up").hide()
        $(".screen").css("background-image", "url(assets/background/end.jpeg)")
        $(".interface").hide()
        $("#title").show()
        $("#title").html("<h1> <p> END </p> </h1>")
        $(".screen").css("margin-top","3%")


        

    break;
    }
})

