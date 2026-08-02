function TypingIndicator() {
  return (
    <div className="flex items-center justify-center gap-1 bg-(--border-dark) p-2 w-10 rounded-full">
      <div className="w-1 h-1 rounded-full bg-(--text-light) animate-bounce [animation-delay:-0.3s]"></div>
      <div className="w-1 h-1 rounded-full bg-(--text-light) animate-bounce [animation-delay:-0.15s]"></div>
      <div className="w-1 h-1 rounded-full bg-(--text-light) animate-bounce"></div>
    </div>
  );
}
export default TypingIndicator;
