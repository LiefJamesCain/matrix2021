const VALID_CHARS = `abcdefghijklmnopqrstuvwxyz0123456789$+-*/=%"'#&_(),.;:?!\\|{}<>[]^~`;
// const VALID_CHARS = `abcdefghijklmnopqrstuvwxyz0123456789`;

const MIN_STREAM_SIZE = 15;
const MAX_STREAM_SIZE = 50;

const getRandomCharInRange = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const getRandomChar = () => {
  VALID_CHARS.charAt(Math.floor(Math.random() * VALID_CHARS.length));
}

const generateStream = () => {
  new Array(getRandomCharInRange(MIN_STREAM_SIZE, MAX_STREAM_SIZE))
    .fill()
    .map(_ => getRandomChar());
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
      {'cain'.split().map(char => (
        <span style={{marginTop: -12}}>{char}</span>
      ))}
    </div>
  )
}

export default Stream;