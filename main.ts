basic.pause(2000)
for (let index = 0; index < 8; index++) {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 64)
    basic.pause(1000)
    maqueen.motorStop(maqueen.Motors.All)
    basic.pause(1000)
}
maqueen.motorStop(maqueen.Motors.All)
basic.pause(10000)
basic.showLeds(`
    . # # # .
    . # . # .
    . . # . .
    . # . # .
    . # # # .
    `)
