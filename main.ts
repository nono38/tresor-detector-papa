radio.setGroup(1)
basic.forever(function () {
    radio.sendString("mama")
    basic.pause(5000)
})
