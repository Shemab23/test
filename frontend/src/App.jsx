import React, { useEffect, useState } from "react";

const backendUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:3000";

const Message = () => {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`${backendUrl}/api/`)
      .then(res => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then(data => setMessage(data.msg))
      .catch(err => setError(err.message));
  }, []);

  return (
    <div>
      {error ? `Error: ${error}` : `Message from backend: ${message}`}
    </div>
  );
};

export default Message;
