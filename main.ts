input.onButtonPressed(Button.A, function () {
    basic.showNumber(maqueen.Ultrasonic(PingUnit.Centimeters))
})
input.onGesture(Gesture.Shake, function () {
    count = 0
    for (let index = 0; index < strip.length(); index++) {
        strip.setPixelColor(count, neopixel.rgb(count * 20, count * 40, count * 80))
        count += 1
    }
    strip.show()
})
input.onButtonPressed(Button.B, function () {
    if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0) {
        basic.showIcon(IconNames.Square)
    } else {
        basic.showIcon(IconNames.SmallSquare)
    }
})
let count = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
strip.setBrightness(10)
strip.showColor(neopixel.colors(NeoPixelColors.Red))
basic.forever(function () {
	
})
