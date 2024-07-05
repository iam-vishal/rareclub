"use client";
import React from "react";
import InputField from "../fields/InputField";
const UserName = ({ formMethods }) => {
  return (
    <>
      <InputField
        count={1}
        id="goal"
        name="goal"
        label="Tell us about your goals, and what makes your venture unique."
        formMethods={formMethods}
      />
    </>
  );
};

export default UserName;
