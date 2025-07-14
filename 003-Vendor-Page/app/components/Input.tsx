// components/Input.tsx
export default function Input({ label, type = "text", ...props }: any) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1">{label}</label>
      <input
        type={type}
        className="w-full px-3 py-2 border border-gray-300 rounded"
        {...props}
      />
    </div>
  );
}
