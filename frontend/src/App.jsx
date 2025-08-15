import React, { useEffect, useState } from "react";
import './index.css'

const backendUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:3000";

const Message = () => {
  const [message, setMessage] = useState("");
  const [users, setUsers] = useState([]);
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

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await fetch(`${backendUrl}/api/users`);
        if (!response.ok) throw new Error("Failed to fetch users");
        const ans = await response.json();
        setUsers(ans);
      } catch (err) {
        setError(err.message);
      }
    }
    getUsers();
  }, []);

  return (
    <div className="contain">
      <h2>Frontend</h2>
      {error ? <p>Error: {error}</p> : <p>Message from backend: {message}</p>}

      {users.length > 0 ? (
        users.map((user, i) => (
          <h3 key={i}>
            {user.name} - {new Date(user.createdAt).toLocaleString()}
          </h3>
        ))
      ) : (
        <h3>No data found</h3>
      )}
    </div>
  );
};

export default Message;
