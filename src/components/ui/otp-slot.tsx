import { SlotProps } from "input-otp";

function OtpSlot({ slot }: { slot: SlotProps }) {
  return (
    <div
      className={`flex h-12 w-15 items-center justify-center text-(--text) border border-(--border-dark) rounded-xl ${slot.isActive && "outline-1 outline-accent-(--text)"}`}
    >
      {slot.char}
    </div>
  );
}
export default OtpSlot;
