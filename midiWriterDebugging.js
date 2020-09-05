// both of these should produce the same results
// the top one produces expected result, bottom one does not

track.addEvent(new MidiWriter.NoteEvent({pitch: ['c2'], duration: 16}))
track.addEvent(new MidiWriter.NoteEvent({pitch: ['c2'], duration: 16, wait: 16}))
track.addEvent(new MidiWriter.NoteEvent({pitch: ['d2'], duration: 16, wait: 16}))
track.addEvent(new MidiWriter.NoteEvent({pitch: ['c2'], duration: 16, wait: 16}))
track.addEvent(new MidiWriter.NoteEvent({pitch: ['c2'], duration: 16}))
track.addEvent(new MidiWriter.NoteEvent({pitch: ['d2'], duration: 16, wait: 16}))
track.addEvent(new MidiWriter.NoteEvent({pitch: ['c2'], duration: 16}))
track.addEvent(new MidiWriter.NoteEvent({pitch: ['c2'], duration: 16}))
track.addEvent(new MidiWriter.NoteEvent({pitch: ['d2'], duration: 16}))


track.addEvent(new MidiWriter.NoteEvent({pitch: ['c2'], duration: 'T32', startTick: 0}))
track.addEvent(new MidiWriter.NoteEvent({pitch: ['c2'], duration: 'T32', startTick: 64}))
track.addEvent(new MidiWriter.NoteEvent({pitch: ['d2'], duration: 'T32', startTick: 128}))
track.addEvent(new MidiWriter.NoteEvent({pitch: ['c2'], duration: 'T32', startTick: 192}))
track.addEvent(new MidiWriter.NoteEvent({pitch: ['c2'], duration: 'T32', startTick: 224}))
track.addEvent(new MidiWriter.NoteEvent({pitch: ['d2'], duration: 'T32', startTick: 288}))
track.addEvent(new MidiWriter.NoteEvent({pitch: ['c2'], duration: 'T32', startTick: 320}))
track.addEvent(new MidiWriter.NoteEvent({pitch: ['c2'], duration: 'T32', startTick: 352}))
track.addEvent(new MidiWriter.NoteEvent({pitch: ['d2'], duration: 'T32', startTick: 384}))
