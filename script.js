// Globals
var screen = "0"
var equation = ""
var op = ""
var result = ""

// Functions
function isOperand(screen) {
    return screen === "%" || screen === "*" || screen === "/" || screen === "-" || screen === "+"
}

// If there are more than 7 digits
$("*").click(function() {
    if (String(screen).length > 7) {
        screen = ""
        $("#screen").html("No digit")
    }
})

$("*").mouseup(function() {
    $(".btn-num, .btn-zero").css("background-color", "hsl(200, 14%, 91%)")
    $(".btn-op").css("background-color", "#FFB61D")
})


// Click events
$("#one").click(function() {
    $(this).css("background-color", "hsl(192, 5%, 80%)")

    if (result !== "") {
        equation = ""
        result = ""
        screen = ""
    }

    if (isOperand(screen)) {
        equation += screen + " "
        screen = "1"
        $("#history").html(equation)
    } else {
        screen += "1"
        screen = Number(screen)
    }
    $("#screen").html(screen)
})

$("#two").click(function() {
    $(this).css("background-color", "hsl(192, 5%, 80%)")

    if (result !== "") {
        equation = ""
        result = ""
        screen = ""
    }

    if (isOperand(screen)) {
        equation += screen + " "
        screen = "2"
        $("#history").html(equation)
    } else {
        screen += "2"
        screen = Number(screen)
    }
    $("#screen").html(screen)
})

$("#three").click(function() {
    $(this).css("background-color", "hsl(192, 5%, 80%)")
    if (result !== "") {
        equation = ""
        result = ""
        screen = ""
    }
    if (isOperand(screen)) {
        equation += screen + " "
        screen = "3"
        $("#history").html(equation)
    } else {
        screen += "3"
        screen = Number(screen)
    }
    $("#screen").html(screen)
})

$("#four").click(function() {
    $(this).css("background-color", "hsl(192, 5%, 80%)")
    if (result !== "") {
        equation = ""
        result = ""
        screen = ""
    }
    if (isOperand(screen)) {
        equation += screen + " "
        screen = "4"
        $("#history").html(equation)
    } else {
        screen += "4"
        screen = Number(screen)
    }
    $("#screen").html(screen)
})

$("#five").click(function() {
    $(this).css("background-color", "hsl(192, 5%, 80%)")
    if (result !== "") {
        equation = ""
        result = ""
        screen = ""
    }
    if (isOperand(screen)) {
        equation += screen + " "
        screen = "5"
        $("#history").html(equation)
    } else {
        screen += "5"
        screen = Number(screen)
    }
    $("#screen").html(screen)
})

$("#six").click(function() {
    $(this).css("background-color", "hsl(192, 5%, 80%)")
    if (result !== "") {
        equation = ""
        result = ""
        screen = ""
    }
    if (isOperand(screen)) {
        equation += screen + " "
        screen = "6"
        $("#history").html(equation)
    } else {
        screen += "6"
        screen = Number(screen)
    }
    $("#screen").html(screen)
})

$("#seven").click(function() {
    $(this).css("background-color", "hsl(192, 5%, 80%)")
    if (result !== "") {
        equation = ""
        result = ""
        screen = ""
    }
    if (isOperand(screen)) {
        equation += screen + " "
        screen = "7"
        $("#history").html(equation)
    } else {
        screen += "7"
        screen = Number(screen)
    }
    $("#screen").html(screen)
})

$("#eight").click(function() {
    $(this).css("background-color", "hsl(192, 5%, 80%)")
    if (result !== "") {
        equation = ""
        result = ""
        screen = ""
    }
    if (isOperand(screen)) {
        equation += screen + " "
        screen = "8"
        $("#history").html(equation)
    } else {
        screen += "8"
        screen = Number(screen)
    }
    $("#screen").html(screen)
})

$("#nine").click(function() {
    $(this).css("background-color", "hsl(192, 5%, 80%)")
    if (result !== "") {
        equation = ""
        result = ""
        screen = ""
    }
    if (isOperand(screen)) {
        equation += screen + " "
        screen = "9"
        $("#history").html(equation)
    } else {
        screen += "9"
        screen = Number(screen)
    }
    $("#screen").html(screen)
})

$("#zero").click(function() {
    $(this).css("background-color", "hsl(192, 5%, 80%)")
    if (result !== "") {
        equation = ""
        result = ""
        screen = ""
    }
    if (isOperand(screen)) {
        equation += screen + " "
        screen = "0"
        $("#history").html(equation)
    } else {
        screen += "0"
        screen = Number(screen)
    }
    $("#screen").html(screen)
})

$("#comma").click(function() {
    $(this).css("background-color", "hsl(192, 5%, 80%)")
    if (result !== "") {
        equation = ""
        result = ""
        screen = ""
    }
    if (isOperand(screen)) {
        equation += screen + " "
        screen = "0."
        $("#history").html(equation)
    } else {
        screen += "."
            // screen = Number(screen)
    }
    $("#screen").html(screen)
})

$("#ac").click(function() {
    $(this).css("background-color", "#d99b19")
    $("#screen").html(0)
    $("#history").html(0)
    screen = "0"
    op = ""
    equation = ""
    result = ""
})

$("#c").click(function() {
    $(this).css("background-color", "#d99b19")
    $("#screen").html(0)
    screen = "0"
})

$("#percent").click(function() {
    $(this).css("background-color", "#d99b19")
    if (result !== "") {
        equation = result
        screen = ""
        result = ""
    }
    if (!isOperand(screen)) {
        op = "%"
        equation += screen + " "
        screen = op
        $("#screen").html(screen)
        $("#history").html(equation)
    }
})

$("#divide").click(function() {
    $(this).css("background-color", "#d99b19")
    if (result !== "") {
        equation = result
        screen = ""
        result = ""
    }
    if (!isOperand(screen)) {
        op = "/"
        equation += screen + " "
        screen = op
        $("#screen").html(screen)
        $("#history").html(equation)
    }
})

$("#multiple").click(function() {
    $(this).css("background-color", "#d99b19")
    if (result !== "") {
        equation = result
        screen = ""
        result = ""
    }
    if (!isOperand(screen)) {
        op = "*"
        equation += screen + " "
        screen = op
        $("#screen").html(screen)
        $("#history").html(equation)
    }
})

$("#minus").click(function() {
    $(this).css("background-color", "#d99b19")
    if (result !== "") {
        equation = result
        screen = ""
        result = ""
    }
    if (!isOperand(screen)) {
        op = "-"
        equation += screen + " "
        screen = op
        $("#screen").html(screen)
        $("#history").html(equation)
    }
})

$("#plus").click(function() {
    $(this).css("background-color", "#d99b19")
    if (result !== "") {
        equation = result
        screen = ""
        result = ""
    }
    if (!isOperand(screen)) {
        op = "+"
        equation += screen + " "
        screen = op
        $("#screen").html(screen)
        $("#history").html(equation)
    }
})

$("#eq").click(function() {
    $(this).css("background-color", "#d99b19")
    if (!isOperand(screen)) {
        equation += screen + " "
        result = eval(equation)
        op = "="
        screen = result
        equation += op + " " + screen
        $("#screen").html(screen)
        $("#history").html(equation)
    }
})