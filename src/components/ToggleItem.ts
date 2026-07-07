export default function ToggleItem(title: string, active: boolean, action: string) {
  return `
    <li class="w-full bg-base-200 flex-start gap-3 px-3 py-2 rounded-md" title=${title}>
      <input type="checkbox" class="toggle toggle-xs" ${active ? "checked" : ""} action=${action} />
      <span class="text-xs">${title}</span>
    </li>
  `;
}
