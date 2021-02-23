let validChars = `abcdefghijklmnopqrstuvwxyz0123456789$+-*/=%"'#&_(),.;:?!\\|{}<>[]^~`;
let minStreamSize = 15;
let maxStreamSize = 50;

const getRandomCharInRange = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const getRandomChar = () => validChars.charAt(Math.floor(Math.random() * validChars.length));

const generateStream = () => {
  new Array(getRandomCharInRange(minStreamSize, maxStreamSize)).fill().map(_ => getRandomChar());
}

const Stream = () => {
  return (
    <div style={{
      fontFamily: 'modernWakandan',
      color: '#664eae',
      writingMode: 'vertical-rl',
      textOrientation: 'upright',
      whiteSpace: 'nowrap',
      userSelect: 'none',
      textShadow: '0px 0px 8px rgba(102, 78, 174, 0.8)',
      fontSize: 50
    }}>
      {/* {generateStream().map(char => (<span key={char.toString()}>{char}</span>))} */}
      {'lief'.split().map(char => (<span key={char.toString()} style={{marginTop: -12}}>{char}</span>))}
    </div>
  )
}

export default Stream;