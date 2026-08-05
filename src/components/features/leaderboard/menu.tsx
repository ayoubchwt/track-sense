"use client";
import { useState } from "react";
import MenuItem from "./menu-item";

function Menu() {
  const [activeItem, setActiveItem] = useState<string>("Global");
  return (
    <div className="flex items-center justify-center gap-2">
      <MenuItem
        isActive={activeItem === "Global"}
        onClick={() => setActiveItem("Global")}
      >
        Global
      </MenuItem>
      <MenuItem
        isActive={activeItem === "Week"}
        onClick={() => setActiveItem("Week")}
      >
        This Week
      </MenuItem>
    </div>
  );
}
export default Menu;
