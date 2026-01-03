// $: s("[bd <hh oh>]*2").bank("tr909").dec(.4)

setcpm(140/4)

_$: s("hh:6!1").gain(.01)._punchcard()

_$: s("hh:2!16").gain(rand.range(.3,.6))
  ._punchcard()


$: s("sbd!4").gain(.5)
._scope()



const chords = chord("<Bm A G G>")

$: chords.offset(-1).voicing().s("gm_epiano1:1")
  .phaser(4).room(.5)
._punchcard()

$: note("<[b1 b2, - d3]*4 [a1 a2, - c#3]*4 [g1 g2, - b2]*4 [g1 g2, - b2]*4>")
  .sound("sawtooth:8").detune(.5)
  .unison(4)
  .decay(.25).release(1).sustain(.2)
  .gain(rand.range(1.2,1.5))
._punchcard()

$: note("<d2*8>")
  .sound("sawtooth:6").detune(.5)
  .unison(4)
  .gain(1.5)
._punchcard()


// Define your chord progression using the scale function
$: n("{0 2 5 2 0 2 5 2}!2")
  .scale("<B:minor A:major G:major G:major>")
  .s("sawtooth:8")
  .gain(rand.range(.6, 1))
  .detune(.2)
  .unison(2)
  .decay(.1)
  .release(.3)
._punchcard()

_$: s("piano").seg(8).n(irand(12))
  .scale("<B:minor A:major G:major G:major>")
    .gain(rand.range(1, 1.4))
  .detune(rand.range(-0.2, 0.2))
._punchcard()