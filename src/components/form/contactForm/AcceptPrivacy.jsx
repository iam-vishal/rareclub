"use client";
import React from "react";
import InputField from "../fields/InputField";
const AcceptPrivacy = ({ formMethods }) => {
  return (
    <>
      <InputField
        count={2}
        id="privacy"
        name="privacy"
        label="I accept the privacy policy."
        formMethods={formMethods}
      />
    </>
  );
};

export default AcceptPrivacy;
