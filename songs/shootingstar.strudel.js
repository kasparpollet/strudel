setCpm(124/4)

$drums: stack(
  s("bd:1!4").duck("2,3").duckattack(.2).duckdepth(.9).decay(.3),
  s("cp").beat("4,12",16).gain(.8),
  s("oh:2").struct("~ x".fast(4)).gain(.8)
)._scope()

$: chord("<A#m G# Fm F#>").offset(-1).voicing()
  .s("gm_epiano1:1")
  .s("sawtooth")
  .gain(.8)
  .phaser(4).room(.5)
._punchcard()

$bass: s("supersaw!8").note("<a# g# f f#>".add("0,7").sub("[12]".fast(4)))
  .orbit(3)
  .lpenv("2")
  .diode("2:.25")
  // .fm(time.mod("<2>"))
  // .gain(1.2)
  ._punchcard()

_$ld: s("supersaw").note(
    "<c#4 ~ c#4 f4 ~ f4 ~ ~ d#4 ~ c#4 c4 ~ ~ ~ ~ g#3 ~ g#3 c4 ~ d#4 ~ ~ c#4 c4 ~ a#3 ~ ~ ~ ~>"
  ).fast(8)
  .orbit(3)
  .lpenv("2")
  .delay(.25).delaytime(.5)
  .room(2)//.roomsize(.2)
  .diode("3:.25")
  //.fm(time.mod("<4>"))
  //.gain(2.4)
  ._punchcard()


$vox: s("shootingstar").scrub("0.01/4").gain(2)
_$vox: s("shootingstar").scrub("0.01/16").gain(2)
_$vox: s("shootingstar").scrub("0.41/4").gain(2)

$vox: s("shootingstar")
  .scrub(berlin.fast(16).seg(16).rib("<11@3 <4 3>>",1))
  // .delay(.25).delaytime(rand)
  // .room(1.2)
  .gain(1.4)
  ._scope()

_$riser: s("pulse!16").dec(.1).fm(time).fmh(time).orbit(5)
