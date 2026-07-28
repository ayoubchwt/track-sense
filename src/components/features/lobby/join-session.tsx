"use client";
import Button from "@/components/ui/button";
import Label from "@/components/ui/label";
import OtpSlot from "@/components/ui/otp-slot";
import { OTPInput } from "input-otp";
import RoomList from "./room-list";

function JoinSession() {
  return (
    <div className="flex flex-col w-full gap-10">
      <div className="flex flex-col gap-2">
        <Label>Enter code</Label>
        <OTPInput
          maxLength={6}
          containerClassName="group flex items-center has-[:disabled]:opacity-30"
          render={({ slots }) => {
            return (
              <div className="flex gap-5">
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
      </div>
      <RoomList></RoomList>
    </div>
  );
}
export default JoinSession;
