"use client";
import React from "react";
import { Controller } from "react-hook-form";
import { Form } from "@/components/bootstrap/Bootstrap";

const InputField = ({ id, name, label, count, formMethods }) => {
  const { control } = formMethods;

  return (
    <>
      {name === "privacy" ? (
        <div className={`form_elements mb-0`}>
          <div className="form_input">
            <Controller
              name={name}
              control={control}
              rules={{
                required: {
                  value: true,
                  message: `${name} is required`,
                },
              }}
              render={({
                fieldState: { invalid, error },
                field: { onChange, value },
              }) => (
                <>
                  <Form.Check
                    type="checkbox"
                    label={label}
                    id={`form-${id}`}
                    className={invalid ? "is-invalid" : ""}
                    isInvalid={invalid}
                    checked={value}
                    onChange={onChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    {error && error.message}
                  </Form.Control.Feedback>
                </>
              )}
            />
          </div>
        </div>
      ) : (
        <>
          <div className={`form_elements`} id={`form-${id}`}>
            <div className="form_count">0{count + 1}</div>
            <div className="form_input">
              <Controller
                name={name}
                control={control}
                rules={{
                  required: {
                    value: true,
                    message: `${name} is required`,
                  },
                }}
                render={({
                  fieldState: { invalid, error, isDirty },
                  field: { onChange, value, name },
                }) => (
                  <Form.Group>
                    {!isDirty && (
                      <Form.Label htmlFor={id} className="">
                        {label}
                      </Form.Label>
                    )}
                    <Form.Control
                      as="textarea"
                      id={id}
                      name={name}
                      maxLength="60"
                      value={value}
                      isInvalid={invalid}
                      onChange={onChange}
                    />

                    <Form.Control.Feedback type="invalid">
                      {error && error.message}
                    </Form.Control.Feedback>
                  </Form.Group>
                )}
              />
            </div>
          </div>
        </>
      )}
      <div className="h-line"></div>
    </>
  );
};

export default InputField;
