const Spinner = () => {
  return (
    <div style={{ display: 'inline-block', position: 'relative', width: '80px', height: '80px' }}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        <div style={{ border: '4px solid rgba(0, 0, 0, 0.1)', borderRadius: '50%', borderTopColor: '#3498db', width: '60px', height: '60px', animation: 'spin 1s ease-in-out infinite' }}></div>
      </div>
    </div>
  );
};

export default Spinner;
