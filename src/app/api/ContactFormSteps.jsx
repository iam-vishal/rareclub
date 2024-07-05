"use client";
import React from "react";
import Name from "@/components/form/contactForm/Name";
import Goals from "@/components/form/contactForm/Goals";
import Email from "@/components/form/contactForm/Email";
import HearAboutUs from "@/components/form/contactForm/HearAboutUs";
import AcceptPrivacy from "@/components/form/contactForm/AcceptPrivacy";

const ContactFormSteps = (formMethods) => [
  {
    component: <Name formMethods={formMethods} />,
    step: 0,
  },
  {
    component: <Goals formMethods={formMethods} />,
    step: 1,
  },
  {
    component: <Email formMethods={formMethods} />,
    step: 2,
  },
  {
    component: <HearAboutUs formMethods={formMethods} />,
    step: 3,
  },
  {
    component: <AcceptPrivacy formMethods={formMethods} />,
    step: 4,
  },
];
const FORM_DEFAULT_VALUE = {
  mode: "all",
  shouldUnregister: false,
  reValidateMode: "all",
  defaultValues: {
    name: "",
    goal: "",
    email: "",
    fromWhereHere: "",
  },
};
export { ContactFormSteps, FORM_DEFAULT_VALUE };
