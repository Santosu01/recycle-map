import { FC, useState } from "react";
import { AppFormInputText } from "./AppFormInputText ";
import { Key } from "@mui/icons-material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

interface IAppFormPasswordInputProps {
  name: string;
  control: any;
  label: string;
  placeholder?: string;
  error?: boolean;
}

export const AppFormPasswordInput: FC<IAppFormPasswordInputProps> = ({
  control,
  label,
  name,
  error,
  placeholder,
}) => {
  const [visible, setVisible] = useState(false);

  return (
    <AppFormInputText
      control={control}
      name={name}
      label={label}
      placeholder={placeholder}
      startIcon={<Key color={error ? "error" : undefined} />}
      type={visible ? "text" : "password"}
      endIcon={
        visible ? (
          <button
            type="button"
            onClick={() => setVisible(false)}
            className="cursor-pointer"
          >
            <VisibilityIcon />
          </button>
        ) : (
          <button
            type="button"
            onClick={() => setVisible(true)}
            className="cursor-pointer"
          >
            <VisibilityOffIcon />
          </button>
        )
      }
    />
  );
};
