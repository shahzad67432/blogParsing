export const SkeletonLoader = () => {
  return (
    <div style={{ padding: '1rem 2rem', backgroundColor: '#F3F4F6', borderRadius: '8px', marginBottom: '1rem' }}>
      <div style={{ marginBottom: '1rem' }}>
        <div style={{ height: '1.5rem', width: '80%', backgroundColor: '#E5E7EB', borderRadius: '4px' }}></div>
      </div>
      <div style={{ display: 'flex', marginBottom: '1rem' }}>
        <div style={{ width: '50%', marginRight: '1rem' }}>
          <div style={{ height: '1rem', width: '100%', backgroundColor: '#E5E7EB', borderRadius: '4px' }}></div>
        </div>
        <div style={{ width: '50%' }}>
          <div style={{ height: '1rem', width: '100%', backgroundColor: '#E5E7EB', borderRadius: '4px' }}></div>
        </div>
      </div>
      <div>
        <div style={{ height: '10rem', width: '100%', backgroundColor: '#E5E7EB', borderRadius: '4px' }}></div>
      </div>
    </div>
  );
};
