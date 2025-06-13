import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { ChangeEvent, FC } from "react";

interface IOptionItem {
  label: string;
  key: string | number;
}

interface IAppSelectProps {
  id: string;
  label: string;
  items: IOptionItem[];
  value?: string;
  setValue: (value: string) => void;
  errorMessage?: string;
}

export const AppSelect: FC<IAppSelectProps> = ({
  id,
  label,
  items,
  value,
  setValue,
  errorMessage,
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value as string);
  };

  return (
    <FormControl fullWidth size="medium">
      <InputLabel id={id} color="success">
        {label}
      </InputLabel>
      <Select
        labelId={id}
        id={id}
        defaultValue={value ?? ""}
        label={label}
        color="success"
        error={Boolean(errorMessage)}
        onChange={(event) =>
          handleChange(event as ChangeEvent<HTMLInputElement>)
        }
      >
        {items.map((item) => (
          <MenuItem key={item.key} value={item.key}>
            {item.label}
          </MenuItem>
        ))}
      </Select>

      {errorMessage ? (
        <FormHelperText error={Boolean(errorMessage)}>
          {errorMessage}
        </FormHelperText>
      ) : undefined}
    </FormControl>
  );
};
