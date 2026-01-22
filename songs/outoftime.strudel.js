setCpm(122/4)

// https://www.looperman.com/acapellas/detail/24101/out-of-time-122-bpm-c-min-by-odarka-122bpm-dance-acapella

samples({
  outoftime: '/samples/outoftime/out-of-time.mp3'
}, 'github:kasparpollet/strudel/main');

let drums = stack(
  s("bd:1!4").decay(.3).gain(.6),
  s("cp").beat("4,12",16).gain(.4),
  //s("oh:2").struct("~ x".fast(4)).gain(.8),
  s("hh:4!8").almostNever(ply("2")).gain(rand.range(.2, .6))
)._scope()

let bass = s("supersaw!16").note("<c c g f>/2".add("0").sub("[12]"))
  .orbit(3)
  .lpenv("2")
  .lpf(300)
  //.diode("2:.25")
  .fm(time.mod("<2@3 [2 4]>"))
  .gain(.8)
  ._punchcard()


let chords = chord("<Cm Cm Gm F>/2").offset(-1).voicing()
  .s("gm_epiano1:1")
  .s("sawtooth")
  // .lpf(300)
  .gain(.4)
  .phaser(4).room(.5)
._punchcard()


let b_melody = n("{0 4 7 0 9 0 4 7 0 4 7 0 9 0 4 7 0 4 7 0 9 0 4 11 0 9 0 7 0 4 7 4}/2")
  .scale("<C:minor C:minor G:minor F:major>/2")
  .s("sawtooth:8")
  .gain(rand.range(.4, .75))
  .detune(.2)
  .unison(2)
  .decay(.1)
  .release(.3)
._punchcard()


let vox_8 = s("outoftime").scrub("0.00/8").gain(1.2).early(0.1)
let vox_16 = s("outoftime").scrub("0.00/16").gain(1.2).early(0.1)

_$vox: s("outoftime").scrub("0.482/4").gain(1.2).early(0.1)

_$vox: s("outoftime")
  .scrub(berlin.fast(8).seg(16).rib("<2@3 11>",1))
  // .delay(.25).delaytime(rand)
  // .room(1.2)
  .gain(1.2)
  ._scope()
_$vox: s("outoftime")
  .scrub(berlin.fast(8).seg(16).rib("<2>",1))
  //.delay(.25).delaytime(rand)
  //.room(1.2)
  .gain(1.4)
  ._scope()

arrange(
  // [8, stack(vox_8)],
  // [8, stack(chords, vox_8)],
  // [16, stack(drums, chords, bass, vox_16)],
  [16, stack(drums, chords, bass, b_melody, vox_16)]
)



// $: s("outoftime").scrub("0.00/32").gain(1.2)//.early(0.1)