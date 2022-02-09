// SOUNDS
import snare from './resources/sounds/snare.mp3';
import snare2 from './resources/sounds/snare-drum2.mp3';
import highTom from './resources/sounds/high-pitched-tom.mp3';
import hiHat1 from './resources/sounds/hi-hat1.mp3';
import hiHat from './resources/sounds/hi-hat.mp3';
import cymbale4 from './resources/sounds/cymbale4.mp3';
import cymbale2 from './resources/sounds/cymbale2.mp3';
import bassTom from './resources/sounds/bassTom.mp3';
import bassDrum from './resources/sounds/bass-drum.mp3';

export const soundsArr = [
  {
    id: 1,
    kbrd: 'Q',
    sound: snare,
    name: 'snare',
    code: 81,
  },
  {
    id: 2,
    kbrd: 'W',
    sound: snare2,
    name: 'snare-2',
    code: 87,
  },
  {
    id: 3,
    kbrd: 'E',
    sound: highTom,
    name: 'high-tom',
    code: 69,    
  },
  {
    id: 4,
    kbrd: 'A',
    sound: hiHat1,
    name: 'hi-hat-1',
    code: 65,
  },
  {
    id: 5,
    kbrd: 'S',
    sound: hiHat,
    name: 'hi-hat',
    code: 83,
  },
  {
    id: 6,
    kbrd: 'D',
    sound: cymbale4,
    name: 'cymbale-4',
    code: 68,
  },
  {
    id: 7,
    kbrd: 'Z',
    sound: cymbale2,
    name: 'cymbale-2',
    code: 90,
  },
  {
    id: 8,
    kbrd: 'X',
    sound: bassTom,
    name: 'bass-tom',
    code: 88,
  },
  {
    id: 9,
    kbrd: 'C',
    sound: bassDrum,
    name: 'bass-drum',
    code: 67,
  },
];