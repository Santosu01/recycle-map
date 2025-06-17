import { InputAdornment, TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import { FC } from "react";
import RotateRightIcon from "@mui/icons-material/RotateRight";

interface IAppFormInputTextProps {
  name: string;
  control: any;
  label: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  placeholder?: string;
  type?: "text" | "password" | "email";
  loading?: boolean;
  multiline?: boolean;
}

export const AppFormInputText: FC<IAppFormInputTextProps> = ({
  name,
  control,
  label,
  startIcon,
  placeholder,
  type,
  loading,
  endIcon,
  multiline,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextField
          color="success"
          label={label}
          defaultValue={value}
          multiline={multiline}
          variant="outlined"
          type={type}
          onChange={onChange}
          error={Boolean(error?.message)}
          helperText={error?.message}
          placeholder={placeholder}
          size="medium"
          sx={{ width: "100%" }}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start" color="error">
                  {startIcon}
                </InputAdornment>
              ),
              endAdornment: loading ? (
                <InputAdornment position="start">
                  <RotateRightIcon className="animate-spin" />
                </InputAdornment>
              ) : (
                endIcon
              ),
            },
          }}
        />
      )}
    />
  );
};
