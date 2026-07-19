import Hero from "@/components/features/dashboard/Hero";
import Steps from "@/components/features/dashboard/Steps";
export default function Home() {
  return (
    <div className="flex flex-col flex-1 max-w-5xl mx-auto items-center justify-center gap-15">
      <Hero></Hero>
      <Steps></Steps>
    </div>
  );
}
