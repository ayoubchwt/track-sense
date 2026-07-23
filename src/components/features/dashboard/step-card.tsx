function StepCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-sm text-(--text-light) font-light">{number}</h3>
      <h2 className="text-md text-(--text) font-semibold">{title}</h2>
      <p className="text-md text-(--text-light) font-light">{description}</p>
    </div>
  );
}
export default StepCard;
