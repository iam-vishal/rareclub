import { Button, Stack } from "@/components/bootstrap/Bootstrap";
//Arrow SVG
import PreviousArrow from "@/assets/img/svg/prev_arrow";
import NextArrow from "@/assets/img/svg/next_arrow";
const ActionNavigate = ({
  currentStep,
  setCurrentStep,
  totalLength,
  formMethods,
}) => {
  const { handleSubmit, control } = formMethods;
  const handleNext = async (e) => {
    console.log("submitted");
    console.log(currentStep, totalLength);
    if (currentStep < totalLength) {
      setCurrentStep(currentStep + 1);
    } else {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: control._formValues.name,
          goal: control._formValues.goal,
          email: control._formValues.email,
          heard_from: control._formValues.hear,
          consent: control._formValues.privacy,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        setCurrentStep(currentStep + 1);
      } else {
        console.error("Error saving data:", data.error);
        setCurrentStep(currentStep + 1);
      }
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };
  const handleError = (e) => {
    console.log("error", e);
    if (e.name) setCurrentStep(1);
    else if (e.goal) setCurrentStep(2);
    else if (e.email) setCurrentStep(3);
    else if (e.hear) setCurrentStep(4);
    else if (e.privacy) setCurrentStep(5);
    // if (e.hear) {
    //   setCurrentStep(2);
    // }
    // if (currentStep > 1) {
    //   setCurrentStep(currentStep - 1);
    // }
  };

  return (
    <Stack
      direction="horizontal"
      className="justify-content-between action_btns"
    >
      <Stack className="action_wrap" direction="horizontal" gap={3}>
        <Button
          type="button"
          disabled={currentStep === 1}
          variant="outline-grey"
          onClick={handlePrev}
        >
          <PreviousArrow className="me-3" />
          Prev
        </Button>
        {currentStep === totalLength ? (
          <Button onClick={handleNext} type="button" variant="green">
            Submit
          </Button>
        ) : (
          <Button
            type="button"
            variant="outline-green"
            disabled={currentStep === totalLength}
            onClick={handleSubmit(handleNext, handleError)}
          >
            Next
            <NextArrow className="ms-3" />
          </Button>
        )}
      </Stack>
      <div className="btn btn-outline-grey">
        {currentStep} / {totalLength}
      </div>
    </Stack>
  );
};
export default ActionNavigate;
