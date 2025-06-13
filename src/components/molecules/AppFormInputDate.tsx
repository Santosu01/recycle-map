import { FC } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { ptBR } from "@mui/x-date-pickers/locales";
import "dayjs/locale/pt-br";
import { Controller } from "react-hook-form";

dayjs.locale("pt-br");
dayjs.extend(utc);
dayjs.extend(timezone);

interface IAppFormInputDateProps {
  name: string;
  control: any;
  label: string;
}

export const AppFormInputDate: FC<IAppFormInputDateProps> = ({
  control,
  label,
  name,
}) => {
  return (
    <LocalizationProvider
      dateAdapter={AdapterDayjs}
      localeText={
        ptBR.components.MuiLocalizationProvider.defaultProps.localeText
      }
    >
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <DatePicker
            label={label}
            defaultValue={value}
            onChange={onChange}
            format="DD/MM/YYYY"
            slotProps={{
              textField: {
                helperText: error?.message,
                error: Boolean(error?.message),
                color: "success",
                size: "medium",
              },
            }}
          />
        )}
      />
    </LocalizationProvider>
  );
};
