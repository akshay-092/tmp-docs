import React, { forwardRef } from "react";
import * as Select from "@radix-ui/react-select";
import clsx from "clsx";
import { Check, ChevronDown, ChevronUp } from "react-feather";
import Link from "@docusaurus/Link";
import { useHistory } from "@docusaurus/router";

const SectionsMenu = forwardRef(
  ({ defaultValue = "", values = [], children, className, ...props }, ref) => {
    const history = useHistory();
    return (
      <Select.Root defaultValue={defaultValue} ref={ref} {...props}>
        <Select.Trigger
          aria-label="Select Section"
          className={clsx(
            "sections-menu-trigger max-w-[160px] !text-white",
            className
          )}
        >
          <Select.Value className="!text-white" />
          <Select.Icon>
            <ChevronDown
              size={28}
              strokeWidth={1}
              className={`m-0 -mr-1 mt-1 ${
                false ? "" : "-rotate-90"
              } stroke-white transition-transform duration-200`}
            />
          </Select.Icon>
        </Select.Trigger>

        <Select.Content
          position="popper"
          className={clsx(
            "sections-menu-content",
            "!z-50 max-w-[160px]",
            className
          )}
        >
          <Select.Viewport>
            <Select.Group>
              {values.map(({ docId, name, icon: Icon, disabled = false }) => (
                <Select.Item
                  key={docId}
                  value={docId}
                  className={clsx(
                    "sections-menu-item",
                    `${docId === defaultValue ? "!hidden" : ""}`
                  )}
                  disabled={disabled}
                  onClick={() => {
                    history.push(`/${name}`);
                  }}
                >
                  <Select.ItemText>
                    <div className="flex flex-row items-center space-x-2 ">
                      {Icon && <Icon className="w-6 fill-white" />}
                      <span className="text-[14px] text-black">{name}</span>
                    </div>
                  </Select.ItemText>
                </Select.Item>
              ))}
              {children}
            </Select.Group>
          </Select.Viewport>
        </Select.Content>
      </Select.Root>
    );
  }
);

export default SectionsMenu;
