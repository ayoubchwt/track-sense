import Input from "./input";
interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}
function FormField({ error, ...props }: FormFieldProps) {
  return (
    <div className="flex flex-col w-full gap-1">
      <Input {...props}></Input>
      {error && (
        <p className="text-sx text-(--text-light) font-light">{error}</p>
      )}
    </div>
  );
}
export default FormField;
