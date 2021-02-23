import React, { useEffect, useRef, useState } from 'react';
import useInterval from '@use-it/interval';

const valid_chars = `abcdefghijklmnopqrstuvwxyz0123456789$+-*/="'#_(),.;:?!\\|{}<>[]^~`;
const mutation_odds = 0.02;

const min_stream_size = 15;
const max_stream_size = 50;

const min_delay = 50;
const max_delay = 100;

const min_stream_delay = 0;
const max_stream_delay = 8000;

const getRandomCharInRange = (min, max) =>
  Math.floor(Math.random() * (max - min)) + min;

const getRandomChar = () =>
  valid_chars.charAt(Math.floor(Math.random() * valid_chars.length));

const generateRandomStream = () =>
  new Array(getRandomCharInRange(min_stream_size, max_stream_size))
    .fill()
    .map((char) => getRandomChar());

const getMutatedStream = (stream) => {
  const newStream = [];
  for (let i = 1; i < stream.length; i++) {
    if (Math.random() < mutation_odds) {
      newStream.push(getRandomChar());
    } else {
      newStream.push(stream[i]);
    }
  }
  newStream.push(getRandomChar());
  return newStream;
};

const RainStream = (props) => {
  const [stream, setStream] = useState(generateRandomStream());
  const [topPadding, setTopPadding] = useState(stream.length * -50);
  const [intervalDelay, setIntervalDelay] = useState(null);

  // initialize intervalDelay
  useEffect(() => {
    setTimeout(() => {
      setIntervalDelay(getRandomCharInRange(min_delay, max_delay));
    }, getRandomCharInRange(min_stream_delay, max_stream_delay));
  }, []);

  useInterval(() => {
    if (!props.height) return;
    if (!intervalDelay) return;

    // if stream is off the screen, reset it after timeout
    if (topPadding > props.height) {
      setStream([]);
      const newStream = generateRandomStream();
      setStream(newStream);
      setTopPadding(newStream.length * -44);
      setIntervalDelay(null);
      setTimeout(
        () => setIntervalDelay(getRandomCharInRange(min_delay, max_delay)),
        getRandomCharInRange(min_stream_delay, max_stream_delay)
      );
    } else {
      setTopPadding(topPadding + 44);
    }
    // setStream(stream => [...stream.slice(1, stream.length), getRandomChar()]);
    setStream(getMutatedStream);
  }, intervalDelay);

  return (
    <div
      style={{
        fontFamily: 'modernWakandan',
        color: '#664eae',
        writingMode: 'vertical-rl',
        textOrientation: 'upright',
        userSelect: 'none',
        whiteSpace: 'nowrap',
        marginTop: topPadding,
        marginLeft: -15,
        marginRight: -15,
        textShadow: '0px 0px 8px rgba(102, 78, 174, 0.8)',
        fontSize: 42,
      }}
    >
      {stream.map((char, index) => (
        <a
          style={{
            marginTop: -12,
            // reduce opacity for last few chars
            opacity: index < 6 ? 0.1 + index * 0.15 : 1,
            // first char is white
            color: index === stream.length - 1 ? '#fff' : undefined,
            textShadow:
              index === stream.length - 1
                ? '0px 0px 20px rgba(255, 255, 255, 1)'
                : undefined,
          }}
        >
          {char}
        </a>
      ))}
    </div>
  );
};

const WakandanMatrix = (props) => {
  const containerRef = useRef(null);
  const [containerSize, setContainerSize] = useState(null); // {width, height}

  useEffect(() => {
    const boundingClientRect = containerRef.current.getBoundingClientRect();
    setContainerSize({
      width: boundingClientRect.width,
      height: boundingClientRect.height,
    });
  }, []);

  const streamCount = containerSize ? Math.floor(containerSize.width / 16) : 0;

  return (
    <div
      style={{
        background: 'black',
        position: 'fixed',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        overflow: 'ignore',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
      }}
      ref={containerRef}
    >
      {new Array(streamCount).fill().map((char) => (
        <RainStream height={containerSize?.height} />
      ))}
    </div>
  );
};

export default WakandanMatrix;
