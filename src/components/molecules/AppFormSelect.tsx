import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { FC } from "react";
import { Controller } from "react-hook-form";

interface IOptionItem {
  label: string;
  key: string | number;
}

interface IAppFormSelectProps {
  name: string;
  control: any;
  label: string;
  items: IOptionItem[];
}

const SelectError = (error?: string) => {
  if (error) {
    return <FormHelperText error={Boolean(error)}>{error}</FormHelperText>;
  }

  return undefined;
};

export const AppFormSelect: FC<IAppFormSelectProps> = ({
  control,
  label,
  name,
  items,
}) => {
  return (
    <FormControl fullWidth size="medium">
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <>
            <InputLabel error={!!error?.message} id={name} color="success">
              {label}
            </InputLabel>

            <Select
              color="success"
              labelId={name}
              id={name}
              error={!!error?.message}
              onChange={onChange}
              value={value ?? ""}
              label={label}
            >
              {items.map((item) => (
                <MenuItem key={item.key} value={item.key}>
                  {item.label}
                </MenuItem>
              ))}
            </Select>

            {SelectError(error?.message)}
          </>
        )}
      />
    </FormControl>
  );
};
