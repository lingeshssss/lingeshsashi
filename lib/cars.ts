// The BMW M8 Competition Gran Coupe is the visual reference for this site.
// The owner's photos were used only as tracing references and are not
// published; these line drawings were traced over them in each photo's own
// pixel space. No model year, ownership, or specifications are implied.
export const car = {
  name: "BMW M8 Competition Gran Coupe",
  shortName: "M8 Competition Gran Coupe",
};
export type DrawingPath = { d: string; accent?: boolean; detail?: boolean };
export type CarDrawingData = {
  viewBox: string;
  label: string;
  paths: DrawingPath[];
};
export const drawings = {
  threeQuarter: {
    viewBox: "170 236 1280 534",
    label: "FRONT THREE-QUARTER",
    paths: [
      {
        d: "M190 440 C 198 392 220 362 256 350 C 300 322 360 292 432 278 C 520 262 640 258 752 270 C 840 292 958 360 1075 396 C 1200 422 1330 452 1395 495 C 1416 510 1426 535 1426 562",
      }, // silhouette
      {
        d: "M352 362 C 400 318 470 298 560 291 C 640 286 690 288 726 297 L 748 420 C 640 400 480 380 352 362 Z",
      }, // glasshouse
      { d: "M750 420 C 860 412 980 404 1085 398", detail: true }, // cowl
      { d: "M626 385 L 698 383 L 718 420 L 640 425 Z" }, // mirror
      { d: "M790 438 C 860 462 930 488 985 512", detail: true }, // fender
      {
        d: "M985 515 C 1020 505 1100 510 1185 530 L 1175 552 C 1110 560 1040 552 990 532 Z",
        accent: true,
      }, // headlight
      {
        d: "M1203 545 C 1205 528 1215 522 1235 521 L 1318 522 C 1326 530 1330 548 1328 592 L 1210 592 C 1203 578 1201 560 1203 545 Z",
      }, // kidneyL
      {
        d: "M1336 522 L 1392 524 C 1400 540 1402 560 1396 592 L 1336 592 C 1332 570 1332 545 1336 522 Z",
      }, // kidneyR
      { d: "M1055 602 L 1208 604 L 1195 667 L 1088 676 Z" }, // intakeL
      { d: "M1218 625 L 1385 618 L 1382 672 L 1228 683 Z" }, // intakeC
      { d: "M1080 692 C 1200 694 1330 690 1418 672" }, // lip
      { d: "M1426 562 C 1430 600 1428 640 1418 672" }, // frontEdge
      { d: "M998 582 C 1020 630 1045 670 1080 692" }, // bumperSide
      { d: "M808 560 C 830 522 878 508 922 512 C 964 518 990 545 998 582" }, // frontArch
      { d: "M815 640 A 92 110 0 1 0 999 640 A 92 110 0 1 0 815 640 Z" }, // frontTire
      {
        d: "M829 640 A 66 90 0 1 0 961 640 A 66 90 0 1 0 829 640 Z",
        detail: true,
      }, // frontRim
      { d: "M757 487 L 790 508 L 766 602 Z", detail: true }, // gill
      { d: "M748 420 L 758 650", detail: true }, // frontDoor
      { d: "M510 410 L 515 615", detail: true }, // bPillar
      { d: "M528 430 L 568 434", detail: true }, // handleF
      { d: "M355 402 L 390 407", detail: true }, // handleR
      { d: "M330 370 C 345 420 360 500 372 570", detail: true }, // rearDoor
      { d: "M372 590 C 520 612 680 640 812 664" }, // sill
      { d: "M235 522 C 244 478 278 456 314 456 C 352 457 380 482 390 520" }, // rearArch
      { d: "M240 554 A 64 91 0 1 0 368 554 A 64 91 0 1 0 240 554 Z" }, // rearTire
      {
        d: "M250 553 A 48 76 0 1 0 346 553 A 48 76 0 1 0 250 553 Z",
        detail: true,
      }, // rearRim
      { d: "M190 440 C 186 490 190 540 232 568" }, // rearBumper
    ],
  },
  headOn: {
    viewBox: "246 126 488 332",
    label: "HEAD-ON",
    paths: [
      { d: "M320 220 C 333 180 350 150 366 140 L 490 139" }, // aPillarL
      { d: "M 660 220 C 647 180 630 150 614 140 L 490 139" }, // aPillarR
      { d: "M330 214 C 345 175 360 152 372 147 L 490 146", detail: true }, // glassL
      { d: "M 650 214 C 635 175 620 152 608 147 L 490 146", detail: true }, // glassR
      { d: "M330 230 C 380 236 430 238 490 238", detail: true }, // hoodL
      { d: "M 650 230 C 600 236 550 238 490 238", detail: true }, // hoodR
      {
        d: "M257 203 L 312 202 L 310 231 L 267 231 C 260 226 256 215 257 203 Z",
      }, // mirrorL
      {
        d: "M 723 203 L 668 202 L 670 231 L 713 231 C 720 226 724 215 723 203 Z",
      }, // mirrorR
      {
        d: "M320 220 C 300 232 278 245 270 262 C 262 285 262 330 264 370 L 267 405",
      }, // fenderL
      {
        d: "M 660 220 C 680 232 702 245 710 262 C 718 285 718 330 716 370 L 713 405",
      }, // fenderR
      {
        d: "M274 273 C 300 276 335 284 365 292 L 344 305 C 320 304 296 300 282 297 C 276 292 273 283 274 273 Z",
        accent: true,
      }, // headlightL
      {
        d: "M 706 273 C 680 276 645 284 615 292 L 636 305 C 660 304 684 300 698 297 C 704 292 707 283 706 273 Z",
        accent: true,
      }, // headlightR
      {
        d: "M364 312 C 364 294 374 285 396 284 L 480 286 C 487 290 489 300 489 312 L 487 328 C 485 334 480 337 470 337 L 392 337 C 374 336 364 326 364 312 Z",
      }, // kidneyL
      {
        d: "M 616 312 C 616 294 606 285 584 284 L 500 286 C 493 290 491 300 491 312 L 493 328 C 495 334 500 337 510 337 L 588 337 C 606 336 616 326 616 312 Z",
      }, // kidneyR
      { d: "M283 330 L 364 332 L 360 392 L 286 392 Z" }, // intakeL
      { d: "M 697 330 L 616 332 L 620 392 L 694 392 Z" }, // intakeR
      { d: "M384 360 L 490 360 M384 360 L 392 400 L 490 400", detail: true }, // grilleL
      { d: "M 596 360 L 490 360 M 596 360 L 588 400 L 490 400", detail: true }, // grilleR
      { d: "M292 406 C 380 413 440 414 490 414" }, // lipL
      { d: "M 688 406 C 600 413 540 414 490 414" }, // lipR
      { d: "M268 402 L 268 444 L 330 446 L 332 410" }, // tireL
      { d: "M 712 402 L 712 444 L 650 446 L 648 410" }, // tireR
    ],
  },
} satisfies Record<string, CarDrawingData>;
// The traced roofline alone, cropped to its bounds; used as a section rule.
export const roofline = {
  viewBox: "180 250 1256 320",
  path: drawings.threeQuarter.paths[0].d,
};
