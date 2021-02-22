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
      {'test'.split().map(char => (
        <span style={{marginTop: -12}}>{char}</span>
      ))}
    </div>
  )
}

export default Stream;