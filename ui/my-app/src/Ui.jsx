import React, { useEffect, useState } from "react";
import axios from "axios";

function Ui() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    fetchLogs();
  }, []);

  const fetchLogs = async () => {
    const res = await axios.get("http://localhost:8080/data");
    setLogs(res.data);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>📊 Logs Dashboard</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Level</th>
            <th>Message</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log) => (
            <tr key={log.id}>
              <td>{log.id}</td>
              <td>{log.level}</td>
              <td>{log.message}</td>
              <td>{log.timestamp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Ui;