export const Menu = () => {
  return (
    <ul
      className="menu"
      style={{ display: "flex", gap: 30, listStyle: "none" }}
    >
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/">About</a>
      </li>
      <li>
        <a href="/">Contact</a>
      </li>
    </ul>
  );
};
