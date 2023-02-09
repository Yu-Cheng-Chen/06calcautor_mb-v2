input.onButtonPressed(Button.A, function () {
    num = num + 1
    basic.showNumber(num)
    if (one == 1) {
        B = num
    }
    if (one == 0) {
        A = num
    }
})
input.onGesture(Gesture.Shake, function () {
    one = 0
    ANS = 0
    A = 0
    B = 0
    num = 0
    Arithmetic = 0
    basic.showString("C")
    basic.clearScreen()
    basic.showNumber(0)
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("=")
    if (Arithmetic == 1) {
        ANS = A + B
    } else if (Arithmetic == 2) {
        ANS = A - B
    } else if (Arithmetic == 3) {
        ANS = A * B
    } else if (Arithmetic == 4) {
        ANS = A / B
    } else if (Arithmetic == 5) {
        Arithmetic = 0
    }
    basic.showString("" + (ANS))
})
input.onButtonPressed(Button.B, function () {
    one = 1
    num = 0
    Arithmetic = Arithmetic + 1
    if (Arithmetic == 1) {
        basic.showString("+")
    } else if (Arithmetic == 2) {
        basic.showString("-")
    } else if (Arithmetic == 3) {
        basic.showString("*")
    } else if (Arithmetic == 4) {
        basic.showString("/")
    } else if (Arithmetic == 5) {
        Arithmetic = 0
    }
})
let Arithmetic = 0
let num = 0
let B = 0
let A = 0
let ANS = 0
let one = 0
basic.showNumber(0)
one = 0
ANS = 0
A = 0
B = 0
num = 0
Arithmetic = 0
