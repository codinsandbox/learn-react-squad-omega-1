import { MenuItem } from "./MenuItem";

export const MenuV2 = () => {
    return (
      <ul className="menu">
        <MenuItem link="/" label="Cats" />
        <MenuItem link="/" label="Budinca" />
        <MenuItem link="/" label="More cats" />
      </ul>
    );
  };