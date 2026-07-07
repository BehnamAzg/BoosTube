export default function Header() {
  return `
    <header class="w-full flex-center justify-between py-2 shrink-0 sticky">
      <a href="/" target="_blank" class="flex-center gap-1 text-primary hover:tracking-wider hover:text-blue-500 transition-all ">
        <svg class="h-5 w-5 fill-current" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 256 256">
          <path d="M143.38,17.85a8,8,0,0,0-12.63,3.41l-22,60.41L84.59,58.26a8,8,0,0,0-11.93.89C51,87.53,40,116.08,40,144a88,88,0,0,0,176,0C216,84.55,165.21,36,143.38,17.85Zm40.51,135.49a57.6,57.6,0,0,1-46.56,46.55A7.65,7.65,0,0,1,136,200a8,8,0,0,1-1.32-15.89c16.57-2.79,30.63-16.85,33.44-33.45a8,8,0,0,1,15.78,2.68Z"></path>
        </svg>
        <span class="font-extrabold text-black">BoosTube</span>
      </a>
      <div class="flex-center gap-1">
      <button data-action="togglePower" class="btn btn-circle btn-sm btn-ghost">
          <svg class="h-4 w-4 fill-current" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 256 256">
            <path d="M116,128V48a12,12,0,0,1,24,0v80a12,12,0,0,1-24,0Zm66.55-82a12,12,0,0,0-13.1,20.1C191.41,80.37,204,103,204,128a76,76,0,0,1-152,0c0-25,12.59-47.63,34.55-61.95A12,12,0,0,0,73.45,46C44.56,64.78,28,94.69,28,128a100,100,0,0,0,200,0C228,94.69,211.44,64.78,182.55,46Z"></path>
          </svg>
        </button>
        <button data-action="togglePower" class="btn btn-circle btn-sm btn-ghost">
          <svg class="h-4 w-4 fill-current" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 256 256">
            <path d="M228,128a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,128ZM40,76H216a12,12,0,0,0,0-24H40a12,12,0,0,0,0,24ZM216,180H40a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Z"></path>
          </svg>
        </button>
      </div>
    </header>
  `;
}
