  // https://www.looperman.com/acapellas/detail/23819/summertime-forever-by-cleelu-170bpm-drum-and-bass-acapella
setCpm(170/4)

samples({
  summertime: '/samples/summertime/summertime-forever.mp3'
}, 'github:kasparpollet/strudel/main');

$drums: stack(
  s("bd:4").beat("0,7?,10",16),
  s("sd:1").beat("4,12",16),
  s("hh:4!8").almostNever(ply("2 | 4"))
)._scope()

$bass: s("supersaw!8")
  .n("<-14 -12 -13 [-13 -10]>").scale("a:minor")
  .diode("2:.5")
  .fm(time.mod("<1 _ _ 2>"))
  // .sub("[12 0]".fast(4))
  .orbit(3)
  .lpenv("2")
  .gain(1)
  ._punchcard()

_$: chord("<Am C B Em>").offset(-3).voicing()
  // .s("gm_epiano1:1")
  .s("supersaw")
  .gain(.6)
  .phaser(4).room(1.2).roomsize(2)
  // .delay(1.2)
._punchcard()
_$mel: s("supersaw:1").seg(8).n(irand(12).add(-5))
  .scale("a:minor:pentatonic")
  .rib(99,2)
  .gain(rand.range(.8, 1.2))
  .detune(rand.range(-0.2, 0.2))
._punchcard()


_$vox: s("summertime").scrub(".086/2").gain(1.2)
_$vox: s("summertime").scrub(".151/2")
_$vox: s("summertime").scrub(".087!1")
_$vox: s("summertime").scrub(".1!1")


$vox: s("summertime")
  .scrub(berlin.fast(16).seg(8).rib(101,2))
  // .fm(time.mod("16"))
  .delay(.25).delaytime(rand)
  .gain(1.2)
  ._scope()


_$riser: s("pulse!16").dec(.1).fm(time).fmh(time).orbit(5)