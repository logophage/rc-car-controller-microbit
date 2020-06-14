radio.setGroup(1)
basic.showLeds(`
    . # . # .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `)
basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        radio.sendValue("forward", 1)
    } else {
        if (input.buttonIsPressed(Button.A)) {
            radio.sendValue("left", 1)
        }
        if (input.buttonIsPressed(Button.B)) {
            radio.sendValue("right", 1)
        }
    }
})
