import Input from "@/components/ui/input";
import Label from "@/components/ui/label";

function CreateSession() {
    return <div className="flex flex-col">
        <h1 className="text-(--text-light) font-semibold text-md">CREATE</h1>
        <div className="flex flex-col gap-1">
            <Label>Session Name</Label>
            <Input type="text" placeholder="session id"></Input>
        </div>
        <div className="flex flex-col gap-1">
            <Label>Rounds</Label>
            
        </div>
    </div>
}
export default CreateSession;