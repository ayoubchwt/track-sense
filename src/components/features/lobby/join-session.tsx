"use client";
import Label from "@/components/ui/label";
import OtpSlot from "@/components/ui/otp-slot";
import { OTPInput } from "input-otp";

function JoinSession() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-1">
        <Label>Enter code</Label>
        <OTPInput
          maxLength={6}
          containerClassName="group flex items-center has-[:disabled]:opacity-30"
          render={({ slots }) => {
            return (
              <>
                {slots.map((slot, idx) => (
                  <OtpSlot key={idx} slot={slot}></OtpSlot>
                ))}
              </>
            );
          }}
        ></OTPInput>
      </div>
    </div>
  );
}
export default JoinSession;
