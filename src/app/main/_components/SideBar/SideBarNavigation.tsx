import React from "react";
import NavigationOption from "./NavigationOption";
import { options } from "./options";

const SideBarNavigation = () => {
  return (
    <div className="flex flex-grow flex-col gap-y-1">
      {options.map((props, index) => {
        return (
          <div key={index}>
            <NavigationOption {...props} />
            {index !== options.length - 1 && (
              <hr className="my-3 dark:border-white/10" />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default SideBarNavigation;
