const Notification = ({ notification }) => {
  const noticicationStyle =
    notification && notification.type === "success"
      ? {
          color: "green",
          border: "green",
          padding: 12,
          fontSize: 20,
          borderStyle: "solid",
          borderRadius: 5,
          backgroundColor: "whitesmoke",
          marginBottom: 12,
        }
      : {
          color: "red",
          border: "red",
          padding: 12,
          fontSize: 20,
          borderStyle: "solid",
          borderRadius: 5,
          backgroundColor: "whitesmoke",
          marginBottom: 12,
        };

  if (notification !== null)
    return <div style={noticicationStyle}>{notification.message}</div>;
  else return;
};

export default Notification;
