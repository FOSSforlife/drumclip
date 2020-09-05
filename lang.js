const b = {
  mapping: {
    'x': {
      alias: 'note',
      noteName: 'note',
      velocity: 100,
      subdivision: 1
    }
  }
}

const ks = {
  mapping: {
    'k': {
      alias: 'kick',
      noteName: 'kick',
      velocity: 100,
      subdivision: 1
    },
    'b': {
      alias: 'double kick',
      noteName: 'kick',
      velocity: 100,
      subdivision: 2
    },
    's': {
      alias: 'snare',
      noteName: 'snare',
      velocity: 100,
      subdivision: 1
    },
    'g': {
      alias: 'snare ghost note',
      noteName: 'snare',
      velocity: 40,
      subdivision: 1
    },
    'd': {
      alias: 'snare ghost note diddle',
      noteName: 'snare',
      velocity: 40,
      subdivision: 2
    },
    '1': {
      alias: 'tom 1',
      noteName: 'tom1',
      velocity: 100,
      subdivision: 1
    },
    '2': {
      alias: 'tom 2',
      noteName: 'tom2',
      velocity: 100,
      subdivision: 1
    },
    '3': {
      alias: 'tom 3',
      noteName: 'tom3',
      velocity: 100,
      subdivision: 1
    },
    '4': {
      alias: 'floor tom',
      noteName: 'floorTom',
      velocity: 100,
      subdivision: 1
    },
  }
}

const c = {
  mapping: {
    'H': {
      alias: 'hi hat',
      noteName: 'hiHat',
      velocity: 100,
      subdivision: 1,
    },
    'h': {
      alias: 'hi hat soft',
      noteName: 'hiHat',
      velocity: 50,
      subdivision: 1,
    }
  }
}

module.exports = {
  b,
  ks,
  c
}
