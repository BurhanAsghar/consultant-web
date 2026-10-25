// Signature visual motif: dotted "flight route" arcs connecting destination
// nodes, echoing the "65+ study destinations / global reach" positioning.
// Rendered as a quiet background layer — never the focal point.
export default function RouteMap({ className = '', tone = 'primary' }) {
  const stroke = tone === 'light' ? '#FFFFFF' : '#0B4EA2'
  const dot = tone === 'light' ? '#E6B84A' : '#C89B3C'

  const arcs = [
    'M40,260 Q220,80 420,190 T760,120',
    'M20,120 Q180,220 340,140 T680,260',
    'M120,320 Q300,260 480,320 T860,220',
  ]
  const nodes = [
    [40, 260], [420, 190], [760, 120], [20, 120], [340, 140],
    [680, 260], [120, 320], [480, 320], [860, 220], [230, 60],
  ]

  return (
    <svg
      viewBox="0 0 900 400"
      fill="none"
      className={className}
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      {arcs.map((d, i) => (
        <path
          key={i}
          d={d}
          stroke={stroke}
          strokeOpacity={tone === 'light' ? 0.28 : 0.14}
          strokeWidth="1.5"
          strokeDasharray="1 7"
          strokeLinecap="round"
          className="animate-drift"
        />
      ))}
      {nodes.map(([x, y], i) => (
        <circle
          key={i}
          cx={x}
          cy={y}
          r={i % 3 === 0 ? 3.5 : 2}
          fill={dot}
          opacity={tone === 'light' ? 0.55 : 0.35}
        />
      ))}
    </svg>
  )
}
