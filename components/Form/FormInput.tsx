import React from "react";
import { Control, Controller, FieldErrors } from "react-hook-form";
import { Text, TextInput } from "react-native";

type Props = {
  control: Control<any>;
  errors: FieldErrors<any>;
  render?: any;
  name: string;
  placeholder?: string;
};

const FormInput = ({ errors, name, control, placeholder }: Props) => {
  return (
    <>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder={placeholder}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name={name}
      />
      {name && errors && <Text>{errors[`${name}`]?.message?.toString()}</Text>}
    </>
  );
};

export default FormInput;
