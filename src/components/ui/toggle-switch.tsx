import Switch from "react-switch";
function ToggleSwitch({
  onChange,
  isChecked,
}: {
  onChange: () => void;
  isChecked: boolean;
}) {
  return (
    <Switch
      onChange={onChange}
      checked={isChecked}
      uncheckedIcon={<div></div>}
      checkedIcon={<div></div>}
    ></Switch>
  );
}
export default ToggleSwitch;
