import React from "react";
import { Button, DropdownMenu } from "@radix-ui/themes";

const Dropdown = ({title}) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Button className="windows-group">
          {title}
          <DropdownMenu.TriggerIcon />
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content
        variant="soft"
        color="indigo"
        className="dropdownContent"
      >
        <div>
          <DropdownMenu.Item shortcut="⌘ E">Andriod</DropdownMenu.Item>
          <DropdownMenu.Item shortcut="⌘ D">iPhone</DropdownMenu.Item>
          <DropdownMenu.Item shortcut="⌘ E">iPad</DropdownMenu.Item>
          <DropdownMenu.Item shortcut="⌘ D">Windows</DropdownMenu.Item>
          <DropdownMenu.Item shortcut="⌘ D">Mac</DropdownMenu.Item>
        </div>
        <div>
          <DropdownMenu.Item shortcut="⌘ E">Andriod</DropdownMenu.Item>
          <DropdownMenu.Item shortcut="⌘ D">iPhone</DropdownMenu.Item>
          <DropdownMenu.Item shortcut="⌘ E">iPad</DropdownMenu.Item>
          <DropdownMenu.Item shortcut="⌘ D">Windows</DropdownMenu.Item>
          <DropdownMenu.Item shortcut="⌘ D">Mac</DropdownMenu.Item>
        </div>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default Dropdown;
