/* Step 1: import SnackbarProvider and enqueueSnackbar */
import { SnackbarProvider, enqueueSnackbar } from "notistack";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useOnlineStatus } from "../components/hooks/useOnlineStatus";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  // 2. check change in online status
  const isOnline = useOnlineStatus();
  // 3. Display snackbar on online or offline
  useEffect(() => {
    if (isOnline) {
      enqueueSnackbar("You are online", {
        variant: "success",
        autoHideDuration: 2000,
      });
    } else {
      enqueueSnackbar("You are offline", {
        variant: "error",
        autoHideDuration: 2000,
      });
    }
  }, [isOnline]);
  return (
    <>
      {/* Step 4: use the SnackbarProvider */}
      <SnackbarProvider />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
