export default function Button({ children, onClick, isActive }) {
  return (
    <button className={`button ${isActive ? "active" : ""}`} onClick={onClick}>
      {children}
    </button>
  );
}
