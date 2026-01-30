import React, { type Dispatch, type SetStateAction } from "react";
import Hamburger from "/src/assets/hamburger.svg?react";
import LightDarkToggle from "./LightDarkToggle";

type Props = {
  setIsSidePanelOpen: Dispatch<SetStateAction<boolean>>;
};
const MobileHeader = ({ setIsSidePanelOpen }: Props) => {
  return (
    <div className="w-full h-16 p-4 bg-background sticky top-0 xs:hidden flex gap-8 justify-end z-1001">
      <LightDarkToggle />
      <button onClick={() => setIsSidePanelOpen(true)}>
        <Hamburger className="size-6 ml-auto " />
      </button>
    </div>
  );
};

export default MobileHeader;
