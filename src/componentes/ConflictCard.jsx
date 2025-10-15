import React from "react";

function ConflictCard({ conflict }) {
  return (
    <div className="bg-background dark:bg-dark-primary border border-secondary/20 dark:border-dark-secondary/50 rounded-lg p-4 shadow-lg flex flex-col gap-2 transition-colors animate-fade-in">
      <div className="flex justify-between items-baseline">
        <h3 className="text-xl font-bold text-primary dark:text-dark-text">{conflict.title}</h3>
        <span className="text-xs text-secondary dark:text-dark-text/70">{conflict.date}</span>
      </div>
      <p className="text-secondary dark:text-dark-text/80 text-sm">
        {conflict.description}
      </p>
    </div>
  );
}

export default ConflictCard;