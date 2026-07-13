import Hero from "@/components/features/dashboard/Hero";
import Steps from "@/components/features/dashboard/Steps";
export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-full items-center pt-30">
      <Hero></Hero>
      <Steps></Steps>
    </div>
  );
}
