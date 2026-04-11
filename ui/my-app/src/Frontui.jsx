import React, { useEffect, useState } from "react";
import axios from "axios";

function Frontui() {
  const [logs, setLogs] = useState([]);
  const [level, setLevel] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchLogs();
  }, [level, search]);

  const fetchLogs = async () => {
    const res = await axios.get("http://localhost:8080/data");
    
    let data = res.data;

    // 🔽 Filter by level
    if (level) {
      data = data.filter((log) => log.level === level);
    }

    // 🔍 Search by message
    if (search) {
      data = data.filter((log) =>
        log.message.toLowerCase().includes(search.toLowerCase())
      );
    }

    setLogs(data);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>📊 Logs Dashboard</h2>

      {/* 🔽 FILTER + SEARCH */}
      <div style={{ marginBottom: "15px" }}>
        <label>Filter by Level: </label>
        <select
          value={level}
          onChange={(e) => setLevel(e.target.value)}
          style={{ marginRight: "10px", padding: "5px" }}
        >
          <option value="">All</option>
          <option value="INFO">INFO</option>
          <option value="WARN">WARN</option>
          <option value="ERROR">ERROR</option>
          <option value="DEBUG">DEBUG</option>
        </select>

        <input
          type="text"
          placeholder="Search message..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ padding: "5px" }}
        />
      </div>

      {/* 📋 TABLE */}
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
              <td
                style={{
                  color:
                    log.level === "ERROR"
                      ? "red"
                      : log.level === "WARN"
                      ? "orange"
                      : log.level === "INFO"
                      ? "green"
                      : "blue",
                }}
              >
                {log.level}
              </td>
              <td>{log.message}</td>
              <td>{log.timestamp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Frontui;