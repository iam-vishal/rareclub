"use client";
import React from "react";
import InputField from "../fields/InputField";
const Email = ({ formMethods }) => {
  return (
    <>
      <InputField
        count={2}
        id="email"
        name="email"
        label="Don't forget to tell us your email."
        formMethods={formMethods}
      />
    </>
  );
};

export default Email;
