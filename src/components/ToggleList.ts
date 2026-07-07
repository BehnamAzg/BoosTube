import buttonsData from "../data/buttonsData";
import ToggleItem from "./ToggleItem";

export default function ToggleList() {
  const items = buttonsData.map((button) => ToggleItem(button.title, button.active, button.action));

  return `
    <ul class="flex flex-col gap-1 w-full">
      ${items.join("")}
    </ul>
  `;
}
