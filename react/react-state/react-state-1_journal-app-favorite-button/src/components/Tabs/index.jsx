import "./Tabs.css";

export default function Tabs({ children, isActive }) {
  return (
    <div className={`tab${isActive ? " tab--active" : ""}`}>{children}</div>
  );
}
