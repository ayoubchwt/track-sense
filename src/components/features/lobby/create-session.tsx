import Label from "@/components/ui/label";
import NumberSelector from "./number-selector";
import GenreSelector from "./genre-selector";
import Button from "@/components/ui/button";
import { Copy } from "lucide-react";
import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import FormField from "@/components/ui/form-field";
import { type CreateSession } from "@/types/lobby";

function CreateSession() {
  const [serverError, setServerError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateSession>();
  return (
    <form className="flex flex-col gap-5 w-full">
      <h1 className="text-(--text-light) font-semibold text-md">CREATE</h1>
      <div className="flex flex-col gap-1">
        <Label>Session Name</Label>
        <FormField
          type="text"
          placeholder="session id"
          {...register("sessionName")}
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
          <h2>7F.87H</h2>
          <Button
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
