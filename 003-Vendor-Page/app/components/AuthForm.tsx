// components/AuthForm.tsx
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { login, signup } from "@/lib/auth";
import Input from "./Input";
import Button from "./Button";

export default function AuthForm({ type }: { type: "login" | "signup" }) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("entry");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (type === "signup") {
      signup(email, password, role);
      router.push("/login");
    } else {
      const user = login(email, password);
      if (!user) return setError("Invalid Credentials");
      router.push(`/dashboard/${user.role}`);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-8 bg-white shadow-lg rounded-xl space-y-6">
      <h2 className="text-2xl font-bold text-center capitalize">{type}</h2>
      <Input
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {type === "signup" && (
        <div>
          <label className="block text-sm font-medium mb-1">User Type</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded"
          >
            <option value="pro">Pro</option>
            <option value="entry">Entry</option>
          </select>
        </div>
      )}
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <Button onClick={handleSubmit}>
        {type === "signup" ? "Sign Up" : "Login"}
      </Button>
      <h1>Components/AuthForm.tsx</h1>
    </div>
  );
}
