import * as React from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { removeShow } from "./services/showServices";
import { useState } from "react";

// Passes show ID as props id
const RemoveShow = ({ id }) => {
  const [error, setError] = useState(null);

  // Handles the delete request which uses the id prop passed to it.
  // Admin only function.
  const handleDelete = (e) => {
    const confirmBox = window.confirm(
      "Are you sure you want to delete this show?"
    );
    // Only makes the request to delete the show if confirmation is given to proceed
    if (confirmBox === true) {
        // Delete request function
      removeShow(id)
        .then((show) => {
          if (show.error) {
            setError(show.error);
          } else {
            // Sends an alert when the show has been successfully deleted
            setError(null);
            alert("Show deleted successfully");
            window.location.href = "/";
          }
        })
        .catch((e) => {
          setError(e.response.data.error);
        });
    }
  };

  return (
    <>
        {/* Will not render delete button if the user is not an admin */}
      {sessionStorage.getItem("admin") !== "true" ? (
        <></>
      ) : (
        <div className="delete-outline">
          {error && alert(error)}
          <DeleteOutlineIcon onClick={handleDelete}>Remove</DeleteOutlineIcon>
        </div>
      )}
    </>
  );
};
export default RemoveShow;
