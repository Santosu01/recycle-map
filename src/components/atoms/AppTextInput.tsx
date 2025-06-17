import { InputAdornment, TextField } from "@mui/material";
import React, { ChangeEvent, FC } from "react";

interface IAppTextInputProps {
  startIcon: React.ReactNode;
  label: string;
  name: string;
  id?: string;
  type?: "text" | "password" | "email";
  value?: string;
  setValue: (value: string) => void;
  errorMessage?: string;
  placeholder?: string;
}

export const AppTextInput: FC<IAppTextInputProps> = ({
  id,
  label,
  name,
  startIcon,
  type = "text",
  value,
  setValue,
  errorMessage,
  placeholder,
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <TextField
      id={id}
      name={name}
      color="success"
      label={label}
      defaultValue={value}
      variant="outlined"
      type={type}
      onChange={handleChange}
      error={Boolean(errorMessage)}
      helperText={errorMessage}
      placeholder={placeholder}
      size="medium"
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">{startIcon}</InputAdornment>
          ),
        },
      }}
    />
  );
};
