 ## "User01011Error"
// song @title User01011Error 
// song @by EVZ 
// script @by DYenn 

$:note("a2 <eb2 <a2 g1>>".fast(8))
.sound("z_pink pulse:<32 16 8 4>")
._scope()
$ :note("{f a c e}%8").s("triangle").tremsync(4).tremolophase("<0 .25 .66>")
$ :sound("bd*2,<white pink brown>*8")
.decay(.04).sustain(0)._scope()
$ :sound("bd c2 g2 bd").bank("RolandTR808")
$ :sound("bd hh*16 rim hh*8")
$ :s("triangle*4").decay(0.5).n(irand(12)).scale('C minor')
.room(1).roomsize(10)
//piano
$ :note("c a f e").color("white")
.punchcard()
.color("hotpink and orange")
//
$ :note("a5 b5 b5 f2 a5")
.euclid(5,8)
.s('sawtooth')
.lpenv(4).lpf(300)
.pianoroll({ labels: 1 })
