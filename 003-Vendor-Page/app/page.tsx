import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-gray-100 px-4">
      <h1 className="text-4xl font-bold mb-6">Welcome to User Portal</h1>
      <div className="flex gap-4">
        <Link href="/login">
          <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Login
          </button>
        </Link>
        <Link href="/signup">
          <button className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700">
            Sign Up
          </button>
        </Link>
        
      </div>
      <h3>app/page.tsx</h3>
    </main>
   
  );
}
