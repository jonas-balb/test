basic.forever(function () {
    if (input.isGesture(Gesture.LogoDown)) {
        Environment.ledBrightness(AnalogPin.P9, true)
    } else {
        Environment.ledBrightness(AnalogPin.P9, false)
    }
})
