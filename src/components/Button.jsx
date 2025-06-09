export default function Button({ content, onClickProp }) {
  return (
    <button
      className="mt-auto font-semibold px-4 py-2 rounded-lg shadow transition-colors duration-200 border"
      style={{
        background: "var(--accent-color)",
        color: "var(--primary-color)",
        borderColor: "var(--primary-light)",
      }}
      onClick={onClickProp}
    >
      {content}
    </button>
  );
}
