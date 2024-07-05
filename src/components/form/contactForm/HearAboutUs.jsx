"use client";
import React from "react";
import InputField from "../fields/InputField";
const Email = ({ formMethods }) => {
  return (
    <>
      <InputField
        count={3}
        id="hear"
        name="hear"
        label="Where did you hear from us?"
        formMethods={formMethods}
      />
    </>
  );
};

export default Email;
