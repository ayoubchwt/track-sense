import Label from "@/components/ui/label";
import NumberSelector from "./number-selector";
import GenreSelector from "./genre-selector";
import Button from "@/components/ui/button";
import { Copy } from "lucide-react";
import { useForm, Controller, useWatch } from "react-hook-form";
import FormField from "@/components/ui/form-field";
import { type CreateSession } from "@/types/lobby";
import { generateCode } from "@/lib/utils/helpers";
import { createSessionSchema } from "@/lib/validations/lobby";
import { zodResolver } from "@hookform/resolvers/zod";
import { createSessionAction } from "@/actions/lobby";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Spinner from "@/components/ui/spinner";
import ErrorText from "@/components/ui/error-text";
import Checkbox from "@/components/ui/checkbox";

function CreateSession() {
  const [serverError, setServerError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isPublic, setIsPublic] = useState(false);
  const router = useRouter();
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
      isPublic: false,
    },
  });
  const sessionCode = useWatch({
    control: control,
    name: "sessionCode",
  });
  const createSession = async (data: CreateSession) => {
    setIsLoading(true);
    const response = await createSessionAction(data);
    if (response.success) {
      setIsLoading(false);
      router.push("/play");
    } else {
      setIsLoading(false);
      setServerError(response.error || "Server Error");
    }
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
      <div className="flex flex-col gap-1">
        <Label>Session accessibility</Label>
        <Controller
          name="isPublic"
          control={control}
          render={({ field }) => (
            <Checkbox
              text="Public Session"
              onChange={(value) => {
                field.onChange(value);
                setIsPublic(value);
              }}
            ></Checkbox>
          )}
        ></Controller>
      </div>
      {!isPublic && (
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
      )}
      <Button variant="primary">
        {isLoading ? (
          <Spinner
            size="sm"
            className="border-t-(--bg) border-l-(--bg)"
          ></Spinner>
        ) : (
          <>Launch Session</>
        )}
      </Button>
      {serverError && <ErrorText>{serverError}</ErrorText>}
    </form>
  );
}
export default CreateSession;
