import React, { useEffect, useState } from "react";

const backendUrl = import.meta.env.VITE_APP_BACKEND_URL;

const Message = () => {
  const [message, setMessage] = useState(""); // state to store message
  const [loading, setLoading] = useState(true); // optional loading state
  const [error, setError] = useState(null); // optional error handling

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const res = await fetch(`${backendUrl}/`);
        if (!res.ok) throw new Error("Network response was not ok");
        const data = await res.json();
        // assuming backend returns { message: "Hello" }
        setMessage(data.msg || "No message received");
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMessage();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return <div>Message from backend: {message}</div>;
};

export default Message;
