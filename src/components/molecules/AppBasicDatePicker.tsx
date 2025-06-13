import { FC } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { ptBR } from "@mui/x-date-pickers/locales";
import "dayjs/locale/pt-br";
import { PickerValue } from "@mui/x-date-pickers/internals";
import { UseFormRegister } from "react-hook-form";

dayjs.locale("pt-br");
dayjs.extend(utc);
dayjs.extend(timezone);

interface IAppBasicDatePickerProps {
  label: string;
  name: string;
  errorMessage?: string;
  value?: PickerValue;
  setValue: (value: PickerValue) => void;
  register?: UseFormRegister<any>;
}

export const AppBasicDatePicker: FC<IAppBasicDatePickerProps> = ({
  label,
  errorMessage,
  value,
  register,
  name,
  setValue,
}) => {
  const handleChange = (event: PickerValue) => {
    setValue(event);
  };

  return (
    <LocalizationProvider
      dateAdapter={AdapterDayjs}
      localeText={
        ptBR.components.MuiLocalizationProvider.defaultProps.localeText
      }
    >
      <DatePicker
        {...(register ? register(name) : {})}
        label={label}
        defaultValue={value}
        onChange={handleChange}
        format="DD/MM/YYYY"
        timezone="America/Sao_Paulo"
        slotProps={{
          textField: {
            helperText: errorMessage,
            error: Boolean(errorMessage),
            color: "success",
            size: "medium",
          },
        }}
      />
    </LocalizationProvider>
  );
};
