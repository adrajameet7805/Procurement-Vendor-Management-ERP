# 📦 ProcureFlow ERP

**ProcureFlow ERP** is a modern, full-stack Procurement & Vendor Management application designed to streamline request for quotation (RFQ) processes, vendor onboarding, and purchase order tracking. Built with scalability and security in mind, it provides robust role-based access control and dynamic approval workflows.

---

## ✨ Features

- 🔐 **Secure Authentication**: JWT-based login with role-based routing and API middleware.
- 👥 **Comprehensive Vendor Management**: Onboard vendors, collect documents, and manage approval statuses.
- 📄 **Dynamic RFQ Creation**: Create structured Requests For Quotation with precise line items and deadlines.
- 🏢 **Dedicated Vendor Portal**: Vendors can view assigned RFQs, submit quotes, and track outcomes.
- 📊 **Quotation Comparison**: Side-by-side automated comparison to highlight the best bids.
- ✅ **Multi-level Approval Workflows**: Managers can approve or reject submitted quotations with full audit trails.
- 🛒 **Automated Purchase Orders**: Generate POs directly from approved quotations.
- 🧾 **Invoice Management**: Seamless submission and payment tracking of invoices.
- 📈 **Reports & Analytics**: Spend analysis and vendor performance tracking.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | React 18, TypeScript, Vite, Tailwind CSS, React Hook Form, React Router v6 |
| **Backend** | Node.js (v20+), Express.js, TypeScript |
| **Database** | MySQL (via Prisma ORM) |
| **Security** | JWT, bcrypt, express-rate-limit, Helmet, CORS |
| **DevOps** | Docker, GitHub Actions (CI) |

---

## 👥 User Roles (RBAC)

| Role | Permissions |
|---|---|
| **Admin** | Full system control, user management, and configuration. |
| **Procurement Officer** | Manage vendors, create RFQs, and process POs. |
| **Manager / Approver** | Review and approve/reject vendor quotations and POs. |
| **Vendor** | View assigned RFQs, submit quotations, and manage invoices. |

---

## 📁 Folder Structure

```text
procurement-erp/
├── .github/workflows/   # GitHub Actions CI pipeline
├── frontend/            # React + Vite application
│   ├── src/
│   │   ├── api/         # Axios API clients
│   │   ├── components/  # Reusable UI elements
│   │   ├── pages/       # Application views
│   │   ├── types/       # TypeScript interfaces
│   │   └── ...
├── backend/             # Node.js + Express API
│   ├── src/
│   │   ├── controllers/ # Route handlers
│   │   ├── routes/      # Express routes
│   │   ├── middleware/  # RBAC, Auth, Rate Limiter
│   │   ├── prisma/      # Database schema
│   │   ├── types/       # TypeScript interfaces
│   │   └── ...
├── docker-compose.yml   # Docker services configuration
└── README.md
```

---

## 🚀 Prerequisites

Ensure you have the following installed on your local machine:
- **Node.js** (v20 or higher)
- **MySQL** (If running locally instead of Docker)
- **Docker & Docker Compose** (For containerized deployment)

---

## 💻 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/adrajameet7805/Procurement-Vendor-Management-ERP.git
   cd Procurement-Vendor-Management-ERP
   ```

2. **Install Backend Dependencies:**
   ```bash
   cd backend
   npm install
   ```

3. **Install Frontend Dependencies:**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Environment Variables:**
   Copy `.env.example` to `.env` in the root directory and update the variables accordingly:
   ```bash
   cp .env.example .env
   ```

5. **Start Development Servers:**
   - *Backend:* `cd backend && npm run dev`
   - *Frontend:* `cd frontend && npm run dev`

---

## 🐳 Docker Setup

You can run the entire stack (or just the database) using Docker Compose.

1. Ensure Docker Desktop is running.
2. Build and start the services:
   ```bash
   docker-compose up -d --build
   ```
3. The services will be available at:
   - Frontend: `http://localhost:5173`
   - Backend API: `http://localhost:5000`
   - MySQL: `localhost:3306`

---

## 🌐 API Endpoints Overview

| Method | Endpoint | Description | Auth Required |
|---|---|---|---|
| `POST` | `/api/auth/login` | Authenticate user & get JWT | No |
| `GET` | `/api/vendors` | List all vendors | Yes |
| `POST` | `/api/rfqs` | Create a new RFQ | Yes (Officer) |
| `POST` | `/api/quotations` | Submit a quotation | Yes (Vendor) |
| `PATCH`| `/api/approvals/:id` | Approve/Reject quote | Yes (Manager) |

*(Note: Comprehensive API documentation via Swagger/Postman collection is available in the `docs/` folder.)*

---

## 📸 Screenshots

*(Replace these placeholders with actual screenshots of your application.)*

> **Dashboard View**
> 
> `[Placeholder for Dashboard Screenshot]`

> **RFQ Creation**
> 
> `[Placeholder for RFQ Screenshot]`

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
