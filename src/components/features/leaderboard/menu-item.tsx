import React from "react";

function MenuItem({
  children,
  isActive,
  onClick,
}: {
  children: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <div
      className={`text-sm font-light cursor-pointer p-2 ${isActive ? "text-(--text) bg-(--border-dark) rounded-xl" : "text-(--text-light) hover:text-(--text)"}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
export default MenuItem;
