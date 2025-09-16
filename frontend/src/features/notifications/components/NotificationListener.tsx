import { useEffect } from "react";
import { useFetchMostRecentNotification } from "../hooks/useFetchMostRecentNotification";
import { enqueueSnackbar } from "notistack";


const NotificationListener = () => {
  const { data: mostRecentNotification,
    isPending: notificationIsPending } = useFetchMostRecentNotification();
    useEffect(() => {
      if (!mostRecentNotification || notificationIsPending) 
        return;
      enqueueSnackbar(`${mostRecentNotification.message} created at: ${mostRecentNotification.createdAt}`,{
        variant:"info"
      });
    }, [mostRecentNotification, notificationIsPending]);

  return (
    <></>
  )
}

export default NotificationListener
