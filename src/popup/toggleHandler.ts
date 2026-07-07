export const initToggleListener = function () {
  document.addEventListener("click", (e) => {
    if (!(e.target instanceof HTMLElement)) return;
    const toggle = e.target.closest('input[type="checkbox"]') as HTMLInputElement | null;
    if (!toggle) return;
    const action = toggle.dataset.action;

    switch (action) {
      case "theater":
        console.log("toggle theater");
        break;
      case "screenshot":
        console.log("toggle screenshot");
        break;
      default:
        console.log("No handler for this action!");
    }
  });
};
