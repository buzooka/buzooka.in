import { DropdownMenu as DropdownMenuPrimitive } from "bits-ui";

import Item from "./dropdown-menu-item.svelte";
import Content from "./dropdown-menu-content.svelte";

const Root = DropdownMenuPrimitive.Root;
const Trigger = DropdownMenuPrimitive.Trigger;
const Group = DropdownMenuPrimitive.Group;

export {
	Root,
	Trigger,
	Group,
	Item,
	Content,
	//
	Root as DropdownMenu,
	Trigger as DropdownMenuTrigger,
	Group as DropdownMenuGroup,
	Item as DropdownMenuItem,
	Content as DropdownMenuContent,
};
