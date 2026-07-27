"use client";
import Button from "@/components/ui/button";
import Label from "@/components/ui/label";
import OtpSlot from "@/components/ui/otp-slot";
import { OTPInput } from "input-otp";
import RoomList from "./room-list";

function JoinSession() {
  return (
    <div className="flex flex-col flex-1 w-full max-w-4xl">
      <div className="flex flex-col gap-1">
        <Label>Enter code</Label>
        <OTPInput
          maxLength={6}
          containerClassName="group flex items-center has-[:disabled]:opacity-30"
          render={({ slots }) => {
            return (
              <div className="flex gap-2">
                {slots.map((slot, idx) => (
                  <OtpSlot key={idx} slot={slot}></OtpSlot>
                ))}
              </div>
            );
          }}
        ></OTPInput>
        <Button variant="optional" className="border border-(--border-dark)">
          Join Session
        </Button>
        <RoomList></RoomList>
      </div>
    </div>
  );
}
export default JoinSession;
