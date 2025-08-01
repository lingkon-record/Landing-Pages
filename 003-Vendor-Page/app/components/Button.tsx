// components/Button.tsx
export default function Button({ children, ...props }: any) {
  return (
    <button
      className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      {...props}
    >
      {children}
    </button>
  );
}
