$(".date").text(moment().format("MMMM Do YYYY"))
$(".time").text(moment().format('LT'))

$("#time").text(moment().format('HH'))

$("#hour9").text(moment("09:00", "HH:mm", true).format("hh:mm A"))
$("#hour10").text(moment("10:00", "HH:mm", true).format("hh:mm A"))
$("#hour11").text(moment("11:00", "HH:mm", true).format("hh:mm A"))
$("#hour12").text(moment("12:00", "HH:mm", true).format("hh:mm A"))
$("#hour13").text(moment("13:00", "HH:mm", true).format("hh:mm A"))
$("#hour14").text(moment("14:00", "HH:mm", true).format("hh:mm A"))
$("#hour15").text(moment("15:00", "HH:mm", true).format("hh:mm A"))
$("#hour16").text(moment("16:00", "HH:mm", true).format("hh:mm A"))
$("#hour17").text(moment("17:00", "HH:mm", true).format("hh:mm A"))

if (localStorage.getItem("hourInput") == null) {
    var hourInput = {};
} else {
    var hourInput = JSON.parse(localStorage.getItem("hourInput"));
}


for (var h = 9; h <= 17; h++) {
    $("#input" + h).val(hourInput[h])

    if (moment().format("HH") > h) {
        // past
        $("#input" + h).addClass("past")
    } else if (moment().format("HH") == h) {
        //present
        $("#input" + h).addClass("present")
    } else {
        //future
        $("#input" + h).addClass("future")
    }

    (function() {
        var hr = h 
        $("#btn" + hr).on('click', function (e) {
            hourInput[hr] = $("#input" + hr).val()
            localStorage.setItem("hourInput", JSON.stringify(hourInput))
            console.log(hourInput)}
        ) 

    }) ()

}

