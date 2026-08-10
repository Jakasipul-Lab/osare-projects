export function Button({ children, className = "", ...props }) {
  return (
    <button className={`px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition ${className}`} {...props}>
      {children}
    </button>
  );
}
