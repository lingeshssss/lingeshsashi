// Reference photography of the BMW M8 Competition Gran Coupe, supplied by the
// owner as the visual inspiration for this portfolio. The car is a favorite,
// not a claim of ownership; no model year, modifications, or specifications
// are stated. Rights remain with the original photographers.
import frontThreeQuarter from "@/assets/cars/m8-front-three-quarter.jpg";
import headOn from "@/assets/cars/m8-head-on.jpg";
import frontLow from "@/assets/cars/m8-front-low.jpg";
import cockpit from "@/assets/cars/m8-cockpit.jpg";
import cluster from "@/assets/cars/m8-instrument-cluster.jpg";
import rearThreeQuarter from "@/assets/cars/m8-rear-three-quarter.jpg";

export const car = {
  name: "BMW M8 Competition Gran Coupe",
  shortName: "M8 Competition Gran Coupe",
  credit:
    "Vehicle photography supplied by Lingesh as reference imagery; rights remain with the original photographers.",
};

export const carPhotos = {
  frontThreeQuarter: {
    src: frontThreeQuarter,
    alt: "White BMW M8 Competition Gran Coupe, front three-quarter view, parked on an open rooftop deck",
    label: "FRONT THREE-QUARTER",
  },
  headOn: {
    src: headOn,
    alt: "White M8 Competition Gran Coupe seen head-on on a tree-lined street, with its twin kidney grille and headlights",
    label: "HEAD-ON",
  },
  frontLow: {
    src: frontLow,
    alt: "Grey M8 Competition Gran Coupe photographed low from the front, with black wheels and a dark kidney grille",
    label: "FRONT, LOW ANGLE",
  },
  cockpit: {
    src: cockpit,
    alt: "M8 cockpit with a leather steering wheel, digital instrument cluster, and carbon-fiber center console",
    label: "COCKPIT",
  },
  cluster: {
    src: cluster,
    alt: "M8 digital instrument cluster with dial graphics arranged around a central driving display",
    label: "INSTRUMENT CLUSTER",
  },
  rearThreeQuarter: {
    src: rearThreeQuarter,
    alt: "Silver M8 Competition Gran Coupe from the rear three-quarter, with quad exhaust tips and a rear spoiler",
    label: "REAR THREE-QUARTER",
    credit: "Photo © 2024 Exotic Car Trader (watermark retained)",
  },
};

// Contour lines traced over the front three-quarter photograph, in its
// 1600 × 1067 pixel space, so they align with the real car when overlaid.
export const heroContour = {
  width: 1600,
  height: 1067,
  paths: [
    "M190 440 C 198 392 220 362 256 350 C 300 322 360 292 432 278 C 520 262 640 258 752 270 C 840 292 958 360 1075 396 C 1200 422 1330 452 1395 495 C 1416 510 1426 535 1426 562",
    "M352 362 C 400 318 470 298 560 291 C 640 286 690 288 726 297 L 748 420 C 640 400 480 380 352 362 Z",
    "M372 590 C 520 612 680 640 812 664",
    "M235 522 C 244 478 278 456 314 456 C 352 457 380 482 390 520",
    "M808 560 C 830 522 878 508 922 512 C 964 518 990 545 998 582",
    "M985 515 C 1020 505 1100 510 1185 530 L 1175 552 C 1110 560 1040 552 990 532 Z",
    "M1203 545 C 1205 528 1215 522 1235 521 L 1318 522 C 1326 530 1330 548 1328 592 L 1210 592 C 1203 578 1201 560 1203 545 Z",
    "M1336 522 L 1392 524 C 1400 540 1402 560 1396 592 L 1336 592 C 1332 570 1332 545 1336 522 Z",
  ],
};
// The traced roofline alone, cropped to its bounds; used as a section rule.
export const roofline = {
  viewBox: "180 250 1256 320",
  path: heroContour.paths[0],
};
