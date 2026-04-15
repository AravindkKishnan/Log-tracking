# 🚀 Log Tracking System

A **real-time log monitoring system** built using **Spring Boot, Kafka, React, and PostgreSQL**.
This application captures logs automatically, streams them via Kafka, and stores them in a database for analysis.

---

# 📌 Features

✅ Automatic log capture (no manual logging)
✅ Real-time log streaming using Kafka
✅ Log storage in PostgreSQL
✅ Log level filtering (INFO, DEBUG)
✅ Scalable microservice-ready architecture
✅ Frontend dashboard (React)

---


# 🏗️ Architecture Diagram

```
        +------------------+
        |  Spring Boot App |
        | (Logback Logger) |
        +--------+---------+
                 |
                 | Logs
                 ▼
        +------------------+
        |      Kafka       |
        |   (app-logs)     |
        +--------+---------+
                 |
                 ▼
        +------------------+
        | Kafka Consumer   |
        | (Spring Boot)    |
        +--------+---------+
                 |
                 ▼
        +------------------+
        | PostgreSQL DB    |
        |  (Log Storage)   |
        +------------------+
                 |
                 ▼
        +------------------+
        | React Frontend   |
        | (UI Dashboard)   |
        +------------------+
```

---

# 🛠️ Tech Stack

| Layer      | Technology            |
| ---------- | --------------------- |
| Backend    | Spring Boot (Java 17) |
| Messaging  | Apache Kafka          |
| Database   | PostgreSQL            |
| Frontend   | React                 |
| Logging    | Logback               |
| Build Tool | Maven                 |

---

# ⚙️ How It Works

1. Spring Boot generates logs automatically using Logback
2. Logs are sent to Kafka topic (`app-logs`)
3. Kafka Consumer reads logs
4. Logs are stored in PostgreSQL
5. React UI displays logs

---

# 📂 Project Structure

```
Log-tracking/
│
├── api-services     → Spring Boot Backend
├── ui/my-app        → React Frontend
└── README.md
```

---

# 🚀 Setup Instructions

## 🔹 Backend (Spring Boot)

```bash
cd api-services
mvn clean install
mvn spring-boot:run
```

---

## 🔹 Kafka (Local)

```bash
# Start Zookeeper
zookeeper-server-start.sh config/zookeeper.properties

# Start Kafka
kafka-server-start.sh config/server.properties
```

---

## 🔹 Frontend (React)

```bash
cd ui/my-app
npm install
npm start
```

---

# 🗄️ Database Configuration

Update `application.properties`:

```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/logdb
spring.datasource.username=postgres
spring.datasource.password=yourpassword
```

---

# 📸 Screenshots

## 🔹 Dashboard View

(Add screenshot here)

## 🔹 Logs Table

(Add screenshot here)

## 🔹 Kafka Logs Flow

(Add screenshot here)

---

# 📊 Sample Log Format

```json
{
  "level": "INFO",
  "message": "Application started",
  "service": "app",
  "timestamp": "2026-04-10T10:30:00"
}
```

---

# 🔥 Future Enhancements

* 🔍 Log search & filtering UI
* 📊 Analytics dashboard
* ☁️ Cloud deployment (AWS / Docker)
* 🔔 Alert system for ERROR logs

---

# 👨‍💻 Author

**Aravind Krishnan**

---
Give it a ⭐ on GitHub!
