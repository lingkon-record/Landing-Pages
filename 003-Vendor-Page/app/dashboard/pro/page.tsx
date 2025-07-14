
// app/dashboard/pro/page.tsx
export default function ProDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-10">
      <div className="max-w-6xl mx-auto bg-white/10 rounded-3xl p-10 backdrop-blur-sm shadow-2xl">
        <h1 className="text-5xl font-extrabold mb-6">🚀 Welcome Pro User</h1>
        <p className="text-lg mb-10">This is your exclusive Pro dashboard with premium analytics, tools, and features.</p>

        <div className="grid grid-cols-3 gap-8">
          <div className="bg-white/20 rounded-xl p-6">
            <h2 className="text-2xl font-semibold">📊 Advanced Reports</h2>
            <p className="text-sm mt-2">Access and generate comprehensive reports tailored to your business.</p>
          </div>
          <div className="bg-white/20 rounded-xl p-6">
            <h2 className="text-2xl font-semibold">⚙️ Tools & Settings</h2>
            <p className="text-sm mt-2">Customize your workspace with advanced settings and integrations.</p>
          </div>
          <div className="bg-white/20 rounded-xl p-6">
            <h2 className="text-2xl font-semibold">📈 Insights & Analytics</h2>
            <p className="text-sm mt-2">Get insights into user behavior and performance metrics.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
