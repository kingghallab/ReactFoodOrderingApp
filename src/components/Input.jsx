export default function Input({ label, ...props }) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label className="font-semibold text-[var(--primary-color)] mb-1 tracking-wide">{label}</label>
      <input
        className="px-4 py-2 border-2 border-[var(--accent-color)] rounded-lg text-base bg-[var(--background-light)] text-[var(--text-dark)] outline-none focus:border-[var(--primary-color)] shadow-sm transition-colors duration-200"
        {...props}
      />
    </div>
  );
}
