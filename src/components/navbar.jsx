import img from "../assets/logo.jpg";

export default function Navbar({ onSelectCart }) {
  return (
    <nav
      className="flex items-center justify-between px-6 py-4 shadow-md"
      style={{ background: "var(--primary-color)" }}
    >
      <div className="flex items-center gap-3">
        <img
          src={img}
          alt="Logo of food"
          className="h-10 w-10 rounded-full object-cover border-2"
          style={{
            borderColor: "var(--accent-color)",
            background: "var(--background-light)",
          }}
        />
        <h1
          className="text-2xl font-bold tracking-wide"
          style={{
            color: "var(--accent-color)",
            textShadow: "1px 1px 2px var(--primary-light)",
          }}
        >
          Plateful
        </h1>
      </div>
      <button
        onClick={onSelectCart}
        className="font-semibold px-5 py-2 rounded-lg shadow transition-colors duration-200 border"
        style={{
          background: "var(--accent-color)",
          color: "var(--primary-color)",
          borderColor: "var(--primary-light)",
        }}
      >
        Cart
      </button>
    </nav>
  );
}
