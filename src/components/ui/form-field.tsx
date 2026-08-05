import Input from "./input";
interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}
function FormField({ error, ...props }: FormFieldProps) {
  return (
    <div className="flex flex-col w-full gap-1">
      <Input {...props}></Input>
      {error && (
        <p className="text-sm text-(--error) font-light min-h-2">{error}</p>
      )}
    </div>
  );
}
export default FormField;
