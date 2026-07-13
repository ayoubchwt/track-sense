import StepCard from "./StepCard";

function Steps() {
    return <div className="flex items-center justify-around">
        <StepCard number={"01"} title={"Open a room"} description={"Create a session, share the code."} ></StepCard>
        <StepCard number={"02"} title={"Hear a snippet"} description={"12 seconds. Type the title."}></StepCard>
        <StepCard number={"03"} title={"Bank points"} description={"Wins add to your global score"}></StepCard>
    </div>
}
export default Steps;