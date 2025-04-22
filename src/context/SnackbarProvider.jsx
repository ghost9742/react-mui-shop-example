/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import Snackbar from "@mui/material/Snackbar";
import { SnackbarContext } from "./SnackbarContext";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export const SnackbarProvider = ({ children }) => {
  const [snackPack, setSnackPack] = useState([]);
  const [open, setOpen] = useState(false);
  const [messageInfo, setMessageInfo] = useState(undefined);

  useEffect(() => {
    if (snackPack.length && !messageInfo) {
      setMessageInfo({ ...snackPack[0] });
      setSnackPack((prev) => prev.slice(1));
      setOpen(true);
    } else if (snackPack.length && messageInfo && open) {
      setOpen(false);
    }
  }, [snackPack, messageInfo, open]);

  const showSnackbar = (message, backgroundColor = "#333") => {
    setSnackPack((prev) => [
      ...prev,
      { message, backgroundColor, key: new Date().getTime() },
    ]);
  };

  const handleClose = (_, reason) => {
    if (reason === "clickaway") return;
    setOpen(false);
  };

  const handleExited = () => {
    setMessageInfo(undefined);
  };

  return (
    <SnackbarContext.Provider value={{ showSnackbar }}>
      {children}
      <Snackbar
        key={messageInfo?.key}
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        TransitionProps={{ onExited: handleExited }} // Use TransitionProps for onExited
        message={messageInfo?.message}
        ContentProps={{
          style: { backgroundColor: messageInfo?.backgroundColor || "#333" },
        }}
        action={
          <>
            <IconButton
              aria-label="close"
              color="inherit"
              sx={{ p: 0.5 }}
              onClick={handleClose}
            >
              <CloseIcon />
            </IconButton>
          </>
        }
      />
    </SnackbarContext.Provider>
  );
};
