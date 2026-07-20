import Hero from "@/components/features/dashboard/hero";
import Steps from "@/components/features/dashboard/steps";
export default function Home() {
  return (
    <div className="flex flex-col flex-1 max-w-5xl mx-auto items-center justify-center gap-15">
      <Hero></Hero>
      <Steps></Steps>
    </div>
  );
}
