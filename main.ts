input.onButtonPressed(Button.A, function () {
    basic.showNumber(min)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(max)
})
let min = 0
let max = 0
let Temp_Actual = input.temperature()
max = Temp_Actual
min = Temp_Actual
basic.forever(function () {
    basic.showString(".")
    Temp_Actual = input.temperature()
    if (Temp_Actual < min) {
        min = Temp_Actual
    }
    if (Temp_Actual > max) {
        max = Temp_Actual
    }
    basic.pause(1000)
    basic.clearScreen()
    basic.pause(1000)
})
