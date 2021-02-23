const validChars = `abcdefghijklmnopqrstuvwxyz0123456789$+-*/=%"'#&_(),.;:?!\\|{}<>[]^~`;
const minStreamSize = 15;
const maxStreamSize = 50;

const getRandomCharInRange = (min, max) =>
  Math.floor(Math.random() * (max - min)) + min;

const getRandomChar = () =>
  validChars.charAt(Math.floor(Math.random() * validChars.length));

const generateStream = () => {
  let chars = new Array(getRandomCharInRange(minStreamSize, maxStreamSize));
  chars.map((char) => {
    return getRandomChar();
  });
};

const Stream = () => {
  const raindrop = generateStream();
  const lief = "liefjamescain";
  return (
    <div
      style={{
        fontFamily: "modernWakandan",
        color: "#664eae",
        writingMode: "vertical-rl",
        textOrientation: "upright",
        whiteSpace: "nowrap",
        userSelect: "none",
        textShadow: "0px 0px 8px rgba(102, 78, 174, 0.8)",
        fontSize: 42,
      }}
    >
      {/* {raindrop.map((char, index) => (
        <span
          style={{
            color: index === raindrop.length - 1 ? "#fff" : undefined,
            opacity: index < 6 ? 0.1 + index * 0.15 : 1,
            textShadow:
              index === raindrop.length - 1 ? "0px 0px 20px #fff" : undefined,
            marginTop: -12,
          }}
        >
          {char}
        </span>
      ))} */}
      {lief.split().map((char, index) => (
        <span
          key={char.toString()}
          style={{
            color: index === lief.length - 1 ? "#fff" : undefined,
            // opacity: index < 6 ? 0.1 + index * 0.15 : 1,
            textShadow:
              index === lief.length - 1 ? "0px 0px 20px rgba(255, 255, 255, 1)" : undefined,
            marginTop: -12,
          }}
        >
          {char}
        </span>
      ))}
    </div>
  );
};

export default Stream;
