interface SignalTransitionProps {
  index: string;
  label: string;
}

const needles = Array.from({ length: 15 }, (_, index) => index);

export function SignalTransition({ index, label }: SignalTransitionProps) {
  return (
    <div className="signal-transition" aria-hidden="true">
      <div className="signal-transition-meta">
        <span>{index}</span>
        <span>{label}</span>
      </div>

      <div className="signal-track">
        <span className="signal-line" />
        <span className="signal-scan" />
        <span className="signal-core" />
        <div className="signal-needles">
          {needles.map((needle) => (
            <span key={needle} />
          ))}
        </div>
      </div>
    </div>
  );
}
