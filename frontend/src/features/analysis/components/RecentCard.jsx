import React from 'react';

const badgeColor = (score) => {
  if (score >= 80) return 'bg-emerald-500';
  if (score >= 60) return 'bg-amber-500';
  return 'bg-rose-500';
};

const RecentCard = ({ title, date, score }) => {
  return (
    <div className="glass soft-glow hover-lift rounded-xl px-4 py-3 min-w-[220px] max-w-[240px] transition-all duration-300 relative">
      <div className="flex items-center justify-between">
        <div className={`w-2 h-2 rounded-full ${badgeColor(score)}`} />
        <div className="text-[11px] text-white/60">Analyzed: {date}</div>
      </div>
      <div className="mt-2 text-white/90 text-sm truncate">{title}</div>
      <div className="mt-2 flex items-center justify-between text-white/70 text-xs">
        <span>Fairness Score</span>
        <span className="font-semibold">{score}%</span>
      </div>
      <button
        className="absolute -bottom-3 right-3 text-cyan-300/90 hover:text-cyan-200 text-xs bg-cyan-300/10 border border-cyan-300/20 px-2 py-1 rounded-md backdrop-blur-sm transition-colors"
        title="View Details"
      >
        View Details
      </button>
    </div>
  );
};

export default RecentCard;
