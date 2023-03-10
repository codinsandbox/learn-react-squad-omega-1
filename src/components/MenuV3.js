export const MenuV3 = ({ children }) => {
  return (
    <ul
      className="menu"
      style={{ display: "flex", gap: 30, listStyle: "none" }}
    >
      {children}
    </ul>
  );
};
