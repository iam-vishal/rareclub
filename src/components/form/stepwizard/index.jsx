const StepWizard = ({ list, currentStep }) => {
  const STEP_WIZARD_FORM = list.map((item, index) => (
    <div
      key={index}
      className={`step ${
        index === currentStep - 1 ? "on" : index === currentStep ? "next" : ""
      }`}
    >
      <>{item.component}</>
    </div>
  ));
  return <>{STEP_WIZARD_FORM}</>;
};
export default StepWizard;
