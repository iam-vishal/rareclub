"use client";
import React from "react";
import InputField from "../fields/InputField";
const Name = ({ formMethods }) => {
  return (
    <>
      <InputField
        count={0}
        id="name"
        name="name"
        label="Tell us your name and what you are enquiring about today."
        formMethods={formMethods}
      />
    </>
  );
};

export default Name;
