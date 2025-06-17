import { Autocomplete, FormControl, TextField } from "@mui/material";
import { FC } from "react";
import { Controller } from "react-hook-form";

interface IOptionItem {
  label: string;
  key: string | number;
}

interface IAppFormAutocompleteProps {
  name: string;
  control: any;
  label: string;
  items: IOptionItem[];
  placeholder?: string;
}

export const AppFormAutocomplete: FC<IAppFormAutocompleteProps> = ({
  control,
  items,
  label,
  name,
  placeholder,
}) => {
  return (
    <FormControl fullWidth size="medium">
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange }, fieldState: { error } }) => (
          <Autocomplete
            options={items}
            color="success"
            onChange={(_evt, value) => {
              onChange(value?.key);
            }}
            getOptionLabel={(option) => {
              return option?.label ?? "";
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                color="success"
                error={!!error?.message}
                label={label}
                helperText={error?.message}
                placeholder={placeholder}
              />
            )}
          />
        )}
      />
    </FormControl>
  );
};
