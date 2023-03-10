import { MenuItem } from "./MenuItem";

export const MenuV2 = () => {
  return (
    <ul
      className="menu"
      style={{ display: "flex", gap: 30, listStyle: "none" }}
    >
      <MenuItem link="/" label="Cats" />
      <MenuItem link="/" label="Budinca" />
      <MenuItem link="/" label="More cats" />
    </ul>
  );
};
