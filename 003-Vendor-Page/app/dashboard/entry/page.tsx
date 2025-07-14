// app/dashboard/entry/page.tsx
export default function EntryDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl p-10">
        <h1 className="text-4xl font-bold text-blue-600">👋 Welcome Entry User</h1>
        <p className="mt-6 text-gray-700 text-lg leading-relaxed">
          This is your basic Entry dashboard. Here you can explore limited features, track your activity, and learn more about the platform.
        </p>
        <div className="mt-10 grid grid-cols-2 gap-6">
          <div className="p-6 bg-gray-50 rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-2">Activity Summary</h2>
            <p className="text-sm text-gray-600">Your recent login and task updates will show here.</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-2">Learning Resources</h2>
            <p className="text-sm text-gray-600">Find documentation and guides for beginners.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
