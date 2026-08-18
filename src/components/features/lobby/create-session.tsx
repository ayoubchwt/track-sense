import Label from "@/components/ui/label";
import NumberSelector from "./number-selector";
import GenreSelector from "./genre-selector";
import Button from "@/components/ui/button";
import { Copy } from "lucide-react";
import { useForm, Controller, useWatch } from "react-hook-form";
// import { useState } from "react";
import FormField from "@/components/ui/form-field";
import { type CreateSession } from "@/types/lobby";
import { generateCode } from "@/lib/utils/helpers";
import { createSessionSchema } from "@/lib/validations/lobby";
import { zodResolver } from "@hookform/resolvers/zod";

function CreateSession() {
  // const [serverError, setServerError] = useState<string | null>(null);
  // const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateSession>({
    resolver: zodResolver(createSessionSchema),
    defaultValues: {
      sessionCode: generateCode(6),
      rounds: 5,
      genres: "pop",
    },
  });
  const sessionCode = useWatch({
    control: control,
    name: "sessionCode",
  });
  const createSession = (data: CreateSession) => {
    console.log("Create Session data :", data);
    console.log("Errors", errors);
  };
  return (
    <form
      onSubmit={handleSubmit(createSession)}
      className="flex flex-col gap-5 w-full"
    >
      <h1 className="text-(--text-light) font-semibold text-md">CREATE</h1>
      <div className="flex flex-col gap-1">
        <Label>Session Name</Label>
        <FormField
          type="text"
          placeholder="session id"
          {...register("sessionName")}
          error={errors.sessionName?.message}
        ></FormField>
      </div>
      <div className="flex flex-col gap-1">
        <Label>Rounds</Label>
        <Controller
          name="rounds"
          control={control}
          render={({ field }) => (
            <NumberSelector onChange={field.onChange}></NumberSelector>
          )}
        />
      </div>
      <div className="flex flex-col gap-1">
        <Label>Genres</Label>
        <Controller
          name="genres"
          control={control}
          render={({ field }) => (
            <GenreSelector onChange={field.onChange}></GenreSelector>
          )}
        />
      </div>
      <div className="flex flex-col">
        <Label>Session code</Label>
        <div className="flex items-center justify-between">
          <h2>{sessionCode}</h2>
          <Button
            type="button"
            onClick={() => navigator.clipboard.writeText(sessionCode)}
            variant="secondary"
            className="text-xs font-light flex items-center justify-center gap-1"
          >
            <Copy className="w-3 h-3" />
            Copy
          </Button>
        </div>
      </div>
      <Button variant="primary">Launch Session</Button>
    </form>
  );
}
export default CreateSession;
