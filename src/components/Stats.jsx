const stats = [
  { value: '4.5+', label: 'Years experience' },
  { value: '4', label: 'Companies' },
  { value: '10K+', label: 'Concurrent users' },
  { value: '$1.5M+', label: 'ARR impact', accent: true },
];

export default function Stats() {
  return (
    <div className="stat-band">
      <div className="container">
        <div className="stat-grid">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-cell">
              <div className={`stat-value ${stat.accent ? 'accent' : ''}`}>{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
