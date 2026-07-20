import Label from "./label";

function Checkbox({ text }: { text: string }) {
    return <div className="flex items-center gap-2">
        <input type="checkbox" />
        <Label>{text}</Label>
    </div>
}
export default Checkbox;