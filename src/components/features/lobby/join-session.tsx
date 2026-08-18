"use client";
import Button from "@/components/ui/button";
import Label from "@/components/ui/label";
import OtpSlot from "@/components/ui/otp-slot";
import { OTPInput } from "input-otp";
import RoomList from "./room-list";
import { Controller, useForm } from "react-hook-form";
import { type JoinSession } from "@/types/lobby";
import { zodResolver } from "@hookform/resolvers/zod";
import { JoingSessionSchema } from "@/lib/validations/lobby";
function JoinSession() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<JoinSession>({
    resolver: zodResolver(JoingSessionSchema),
    defaultValues: {
      sessionCode: "",
    },
  });
  const joinSession = (data: JoinSession) => {
    console.log("join session informations : ", data);
  };
  return (
    <div className="flex flex-col w-full gap-10">
      <form
        onSubmit={handleSubmit(joinSession)}
        className="flex flex-col gap-2"
      >
        <Label>Enter code</Label>
        <Controller
          name="sessionCode"
          control={control}
          render={({ field }) => (
            <OTPInput
              value={field.value}
              onChange={field.onChange}
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
          )}
        />
        {errors.sessionCode?.message && (
          <p className="text-xs text-(--error) font-light min-h-2">
            {errors.sessionCode.message}
          </p>
        )}
        <Button variant="optional" className="border border-(--border-dark)">
          Join Session
        </Button>
      </form>
      <RoomList></RoomList>
    </div>
  );
}
export default JoinSession;
