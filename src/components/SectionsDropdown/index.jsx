import { useHistory } from "@docusaurus/router";
import React, { forwardRef, useState } from "react";
import { ChevronDown } from "react-feather";

const SectionsMenuDropdown = forwardRef(
  (
    {
      defaultValue = "",
      values = [],
      onValueChange,
      children,
      className,
      ...props
    },
    ref
  ) => {
    const history = useHistory();
    const [dropdownState, setDropdownState] = useState(false);
    const [currentSection, setCurrentSection] = useState(
      values.find(({ docId }) => docId === defaultValue)
    );
    return (
      <div className="dropdown min-w-[178px]" {...props} ref={ref}
        onClick={() => {
          setDropdownState(!dropdownState);
        }}>
        {/* Trigger */
        }
        <label
          tabIndex={0}
          className="btn flex !h-fit !min-h-fit flex-col items-start justify-center rounded-lg bg-[#6851D6] !py-2 capitalize text-white text-[16px]"
        >
          <div className="flex w-full flex-row items-center justify-between">
            <div className="flex flex-row items-center ">
              <currentSection.icon className="mr-2 h-6 w-6 fill-white" />
              <span className="whitespace-nowrap">{currentSection.name}</span>
            </div>
            <ChevronDown
              size={28}
              strokeWidth={1}
              className={`m-0 ${false ? "" : "-rotate-90"
                } stroke-white transition-transform duration-200`}
            />
          </div>
        </label>
        {
          dropdownState ?
            <ul
              tabIndex={0}
              className="menu dropdown-content rounded-lg z-[1] !min-w-[200px] bg-gray-100 lg:bg-[#F4F4F9] dark:bg-gray-700 p-2 shadow mt-2"
            >
              {values.filter(({ docId }) => docId !== "android-kotlin-chat-ui-kit")
                .map(({ docId, name, icon: Icon, disabled = false }) => (
                  <li
                    onClick={() => {
                      onValueChange(docId);
                    }}
                    key={docId}
                  >
                    <a className="flex w-full flex-row items-center">
                      <Icon className="mr-2 h-6 w-6 fill-white" />
                      <span className="mr-2 whitespace-nowrap dark:text-white">{name}</span>
                    </a>
                  </li>
                ))}
            </ul>
            :
            ''

        }
      </div>
    );
  }
);

export default SectionsMenuDropdown;
