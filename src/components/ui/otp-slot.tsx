import { SlotProps } from "input-otp";

function OtpSlot({ slot }: { slot: SlotProps }) {
  return <div>{slot.char}</div>;
}
export default OtpSlot;
