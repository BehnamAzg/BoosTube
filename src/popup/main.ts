import Header from "../components/Header";
import ToggleList from "../components/ToggleList";
import "./style.css";

document.querySelector("#app")!.innerHTML = `
  <main class="w-full h-auto min-h-0 text-sm font-medium flex-1 overflow-y-auto p-4 pt-1 ">
    ${Header()}
    ${ToggleList()}
  </main>
`;
