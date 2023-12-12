import React from "react";
import Alert, { AlertProps } from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

export interface CustomFilledAlertProps extends AlertProps {
  severity: "error" | "warning" | "info" | "success";
  message: string;
  open: boolean;
  onClose: () => {};
}

const CustomFilledAlert: React.FC<CustomFilledAlertProps> = ({
  severity,
  message,
  open,
  onClose,
  ...alertProps
}) => {
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert
        variant="filled"
        severity={severity}
        // onOpen={open}
        onClose={onClose}
        {...alertProps}
      >
        {message}
      </Alert>
    </Stack>
  );
};

export default CustomFilledAlert;
