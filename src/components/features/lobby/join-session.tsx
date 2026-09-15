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
import ErrorText from "@/components/ui/error-text";
import { useState } from "react";
import { joinSessionAction } from "@/actions/lobby";
import { useRouter } from "next/navigation";
import Spinner from "@/components/ui/spinner";
function JoinSession() {
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const router = useRouter();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<JoinSession>({
    resolver: zodResolver(JoingSessionSchema),
    defaultValues: {
      id: "",
      sessionCode: "",
      isPublic: false,
    },
  });
  const joinSession = async (data: JoinSession) => {
    setIsLoading(true);
    setServerError(null);
    const response = await joinSessionAction(data);
    if (response.success && response.data) {
      setIsLoading(false);
      router.push(`/play/${encodeURIComponent(response.data?.id)}`);
    } else {
      setIsLoading(false);
      setServerError(response.error || "Server Error");
    }
  };
  return (
    <div className="flex flex-col w-full gap-10 justify-start min-h-120">
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
          <ErrorText>{errors.sessionCode.message}</ErrorText>
        )}
        {serverError && <ErrorText>{serverError}</ErrorText>}
        <Button variant="optional" className="border border-(--border-dark)">
          {isLoading ? (
            <Spinner
              size="sm"
              className="border-t-(--text-light) border-l-(--text-light)"
            ></Spinner>
          ) : (
            <>Join Session</>
          )}
        </Button>
      </form>
      <RoomList></RoomList>
    </div>
  );
}
export default JoinSession;
