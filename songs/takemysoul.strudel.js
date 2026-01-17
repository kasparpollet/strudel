setCpm(122/4)

// https://www.looperman.com/acapellas/detail/23973/take-my-soul-by-odarka-122bpm-dance-acapella

samples({
  takemysoul: '/samples/takemysoul/take-my-soul.mp3'
}, 'github:kasparpollet/strudel/main');

$drums: stack(
  s("bd:1!2").decay(.3).gain(.4),
  s("cp").beat("4,12",16).gain(.8),
  s("oh:2").struct("~ x".fast(4)).gain(.8)
)._scope()

$: chord("<Am G F D>").offset(0).voicing()
  .s("gm_epiano1:1")
  .s("sawtooth")
  .gain(.8)
  .phaser(4).room(.5)
._punchcard()



_$vox: s("takemysoul").scrub("0.025/16").gain(1)
_$vox: s("takemysoul").scrub("0.122/2").gain(2)
_$vox: s("takemysoul").scrub("0.225/24").gain(2)
_$vox: s("takemysoul").scrub("0.221/8").gain(2)
_$vox: s("takemysoul").scrub("0.234/8").gain(2)



_$vox: s("takemysoul")
  .scrub(berlin.fast(16).seg(16).rib("<8@3 11>",1))
  // .delay(.25).delaytime(rand)
  // .room(1.2)
  .gain(1.6)
  ._scope()
