const fs = require('fs');
const MidiWriter = require('midi-writer-js');
const midiConverter = require('midi-converter');
const lang = require('./lang');

const TIME_SIG = 4;
const PPQN = 240;

function getMidiTimestamp(measure, beat, beatIndexOffset = 1) {
  let timestamp = beat - beatIndexOffset;
  timestamp += (measure - 1) * TIME_SIG;
  return Math.floor(timestamp * PPQN);
};

// sorts notes by timestamp and adds duration and wait to each object
function withMidiInfo(notes) {
  const result = [];
  const sortedInput = notes.sort((a, b) => a.timestamp - b.timestamp);

  let prevTime = 0;
  for(let note of sortedInput) {
    if(result.length && note.timestamp === prevTime) {
      result[result.length - 1].pitch.push(note.pitch[0]);
    }
    else {
      if(result.length) {
        prevTime += 0.25;
      }
      result.push({
        ...note,
        duration: 16, // TODO: variable
        wait: `T${(note.timestamp - prevTime) * 128}`
      });
    }
    prevTime = note.timestamp;
  }
  console.table(result)
  return result;
}

// lang 3
const clip = [
  {
    patternLang: lang.ks,
    pattern: [
      'k--ks-k--gk-sk-1'.repeat(3),
      'k--ks-k--s-kskss',
    ],
    tick: 16,
  },

   // this pattern will know to repeat until the clip is over (all patterns have finished)
  {
    patternLang: lang.c,
    pattern: 'Hh'.repeat(16),
    tick: 8
  }
];

const midiNoteNames = {
  kick: 'c2',
  snare: 'd2',
  hiHat: 'a#2',
  tom1: 'b2',
  tom2: 'a2',
  tom3: 'g2',
  floorTom: 'f2',
}

// lang 1
let notes = [];
clip.forEach(clipPart => {
  let tickPosition = 0;
  const tickLength = 512 / clipPart.tick; // midiwriter uses 128 ticks per beat

  for(let pattern of clipPart.pattern) {
    for(let noteChar of pattern) {
      console.log(noteChar);
      if(noteChar !== '-') {
        const mapping = clipPart.patternLang.mapping[noteChar];
        const midiNote = midiNoteNames[mapping.noteName];
        const noteEvent = {
          pitch: [midiNote],
          duration: `${clipPart.tick}`,
          // duration: `T${tickLength}`, // these both should do the same thing
          velocity: mapping.velocity,
          // startTick: tickPosition,
          timestamp: tickPosition / 128 // PPQN-neutral timestamps
        }
        notes.push(noteEvent);
      }
      tickPosition += tickLength;
    }
  }
});

notes = withMidiInfo(notes);
console.table(notes);

const track = new MidiWriter.Track();

for (note of notes) {
  track.addEvent(new MidiWriter.NoteEvent(note));
}

const write = new MidiWriter.Writer(track);
write.saveMIDI('test');

const midiSong = fs.readFileSync('test.mid', 'binary');
const jsonSong = midiConverter.midiToJson(midiSong);
fs.writeFileSync('test.json', JSON.stringify(jsonSong, null, 2));


// 1/4 = 16/1
// 1/2 = 8/1
// 1/1 = 4/1
// 4/1 = 1/1


// start with 4
// divide by the time length
