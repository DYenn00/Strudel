// "OMGGREG"
// song @by EVZ (ProdBy) ElevatedFilmz
// script @by DYenn


$:note("c2 <eb2 <g2 g1>>".fast(8))
.sound("z_pink pulse:<32 16 8 4>")
._scope()
$ :note("{f a c e}%8").s("triangle").tremsync(4).tremolophase("<0 .25 .66>")
$ :sound("bd*2,<white pink brown>*8")
.decay(.04).sustain(0)._scope()
$ :sound("bd c2 g2 bd").bank("RolandTR808")
