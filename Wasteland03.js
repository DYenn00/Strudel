// @title WasteLand03
// @by EVZ
// script by @Dyenn
// @licese CC BY-NC-SA 4.0

setCps(90/55/2)
setDefaultVoicings('east')
samples('shabda:bass:4,hihat:4,rimshot:2')
$: n("0 1 2 3 0 1 2 3").s('snare')
$: n("0 1*4 4 9*2").s('hihat').clip(1)
$: n("~ 0 ~ 2 ~ 0 0 2").s('ddr_hh')
$: n("~ 0 ~ 2 ~ 0 0 2").s('rolandtr809_oh')
$: n("~ 0 ~ 4 ~ 0 0 4").s('rolandtr808_rim')
$: n("~ 0 ~ 4 ~ 0 0 4").s('zzfx')
$: s("~ 0 ~ 4 ~ 0 0 4").s('z_sine')
.color("lime green")
$: stack(
  "<8@8 2@14 >".pickRestart(["<[0 1]!2 [0 2] [0 3]>/4","<[4!2]@14>"]).pickRestart(
   ["<[7 6 5 6 7 5 6 7]!4>".add("<0 1>")
   ,"<[9 8 7 8]*3@1.5 [9 ~!1]@0.5>"
   ,"<9 [~ 7 8 6]>","<9 [~ 7 8 9]>"
   ,"<7@3 6@3 7@5 8 9 7 5@3 6@3 7@5 ~@5>*4"
  ]).n().scale("c4:major").transpose("<[0 -5]@16 [[0@7 -5@8]!2]@14 >").s("sine").vib(5).vmod(0.1).clip(0.85).attack(0.05).release(0.1).gain(0.6)
,"<0@16 [1!2]@14 >".pickRestart(["<[Am G C@2]!2 [Em D G@2]!2>/4","<Am@3 G@3 C@5 ~@3 Em@3 D@3 G@5 ~@5>*4"])
  .chord().anchor("C4").voicing().s("zzfx").lpf(1200).attack(0.01).gain(0.35)
,"<0@16 1@14 >".pickRestart(["[[bd <~!7 bd>] sd],<hh!31 oh>*4",
"<bd [sd bd] bd bd [sd bd] bd sd>*2,<hh!17 oh>*4"]).s().bank("yamaharm50_tb").clip(1).gain(0.4)
 .room(.5) 
.pianoroll() 
.color("indigo")
).room(0.5)
