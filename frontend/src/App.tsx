import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import Upload from "./pages/Upload";
import Records from "./pages/Records";
import Permissions from "./pages/Permissions";
import ConnectWallet from "./components/ConnectWallet";

export default function App() {

  const [page, setPage] = useState("dashboard");

  const renderPage = () => {
    switch (page) {
      case "upload":
        return <Upload />;
      case "records":
        return <Records />;
      case "permissions":
        return <Permissions />;
      default:
        return <Dashboard goToUpload={() => setPage("upload")} />;
    }
  };

  const navItem = (name: string, label: string) => (
    <button
      onClick={() => setPage(name)}
      className={`px-4 py-2 rounded-lg font-medium transition
        ${
          page === name
            ? "bg-emerald-600 text-white shadow"
            : "text-gray-700 hover:bg-emerald-100 hover:text-emerald-700"
        }`}
    >
      {label}
    </button>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-700 via-teal-600 to-emerald-500">

      {/* Navbar */}

      <header className="bg-white shadow-sm border-b border-emerald-100">

        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">

          <h1 className="text-xl font-bold text-emerald-700">
            MyData Manager
          </h1>

          {/* Navigation */}

          <nav className="flex gap-4">

            {navItem("dashboard", "Dashboard")}
            {navItem("upload", "Upload")}
            {navItem("records", "Records")}
            {navItem("permissions", "Permissions")}

          </nav>

          {/* Wallet */}

          <ConnectWallet />

        </div>

      </header>

      {/* Page content */}

      <main className="max-w-6xl mx-auto p-6">
        {renderPage()}
      </main>

    </div>
  );
}