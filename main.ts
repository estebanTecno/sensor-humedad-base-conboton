input.onPinPressed(TouchPin.P2, function () {
    // no revise que número es el que detecta la humedad
    if (pins.analogReadPin(AnalogPin.P0) > 100) {
        basic.showIcon(IconNames.Happy)
        basic.pause(1000)
        basic.clearScreen()
    } else {
        basic.showIcon(IconNames.Sad)
        basic.pause(1000)
        basic.clearScreen()
    }
})
