export const Catalog = {
  allProduct: "126",
};
export const slider = [
  {
    title: `Новый зверь  для всех типов кабелей`,
    photo: <img src="\image\sliderSection\Cabelerez.png" />,
    diameter: "от 1,5 до 130мм ",
    size: "90*68*120 см",
    power: "3 кВт 380 В",
    price: "209 000  ₽",
  },
  {
    photo: <img src="\image\Product\SG-006-1.png" />,
    title: "SG-006-1 Станок для разделки кабеля (Автоматический)",
    price: "34 990 ₽",
    size: "90*68*120 см",
    power: "180 Вт",
    diameter: "1,5 - 25 мм",
  },
  {
    photo: <img src="\image\Product\S2-3.png" />,
    title: "S2-3 Автоматический мини для разделки кабеля",
    price: "42 000 ₽",
    size: "90*68*120 см",
    power: "90 Вт",
    diameter: "1 - 18 мм",
  },
];

export const back = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="size-6 dark:stroke-white"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 19.5 8.25 12l7.5-7.5"
    />
  </svg>
);

export const next = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="size-6 dark:stroke-white"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m8.25 4.5 7.5 7.5-7.5 7.5"
    />
  </svg>
);

export const search = (
  <picture>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6  dark:stroke-white dark:group-hover:stroke-textBlack"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
      />
    </svg>
  </picture>
);

export const market = (
  <picture>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart-copy dark:stroke-white dark:group-hover:stroke-textBlack"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
      <path d="M11.5 17h-5.5v-14h-2" />
      <path d="M6 5l14 1l-1 7h-13" />
      <path d="M15 19l2 2l4 -4" />
    </svg>
  </picture>
);

export const menu = (
  <picture>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      className="dark:stroke-white"
    >
      <g clipPath="url(#clip0_8709_4666)">
        <path fill="#161616" d="M3 4h18v2H3zm0 7h18v2H3zm0 7h18v2H3z"></path>
      </g>
      <defs>
        <clipPath id="clip0_8709_4666">
          <path fill="#fff" d="M0 0h24v24H0z"></path>
        </clipPath>
      </defs>
    </svg>
  </picture>
);

export const okopromLogo = (
  <picture>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="119"
      height="28"
      fill="none"
      viewBox="0 0 119 28"
    >
      <path
        className="dark:fill-white"
        fill="#161616"
        d="M23 4.998v17.998l-6-.002v3.002l6 .002c1.893 0 3-1.106 3-3V5c0-1.893-1.107-3.002-3-3.002l-6-.002v3zM5 22.998v-18l6-.002v-3l-6 .002C3.106 1.998 2 3.107 2 5v18c0 1.894 1.106 2.998 3 2.998l6-.002v-3z"
      ></path>
      <path
        className="dark:fill-white"
        fill="#161616"
        d="M10 10h8v8h-8zM40 20.24q-1.08 0-2.06-.32a4.7 4.7 0 0 1-1.68-1.02q-.72-.68-1.14-1.7t-.42-2.4v-.4q0-1.3.42-2.28t1.14-1.64 1.68-.98A6.2 6.2 0 0 1 40 9.16q1.08 0 2.04.34.96.32 1.68.98.74.66 1.16 1.64t.42 2.28v.4q0 1.36-.42 2.38a4.7 4.7 0 0 1-1.16 1.7q-.72.68-1.68 1.02t-2.04.34M40 18q1.12 0 1.86-.8.76-.8.76-2.4v-.4q0-1.46-.76-2.22-.74-.78-1.86-.78-1.14 0-1.88.78-.74.76-.74 2.22v.4q0 1.62.74 2.42.74.78 1.88.78m7.192-12h2.64v7.76l3.92-4.36h3.04l-4.08 4.54 4.48 6.06h-3.08l-3.08-4.32-1.2 1.26V20h-2.64zm15.914 14.24q-1.08 0-2.06-.32a4.7 4.7 0 0 1-1.68-1.02q-.72-.68-1.14-1.7t-.42-2.4v-.4q0-1.3.42-2.28t1.14-1.64 1.68-.98a6.2 6.2 0 0 1 2.06-.34q1.08 0 2.04.34.96.32 1.68.98.74.66 1.16 1.64t.42 2.28v.4q0 1.36-.42 2.38a4.7 4.7 0 0 1-1.16 1.7q-.72.68-1.68 1.02t-2.04.34m0-2.24q1.119 0 1.86-.8.76-.8.76-2.4v-.4q0-1.46-.76-2.22-.741-.78-1.86-.78-1.14 0-1.88.78-.74.76-.74 2.22v.4q0 1.62.74 2.42.74.78 1.88.78m7.192-8.6h2.46v1.56q.399-.72 1.26-1.26.86-.54 2.18-.54 2.12 0 3.3 1.32 1.2 1.3 1.2 3.92v.4q0 2.74-1.22 4.1-1.2 1.34-3.28 1.34-1.08 0-1.92-.46a4.1 4.1 0 0 1-1.34-1.24V24h-2.64zm5.28 8.6q1.04 0 1.74-.78.7-.8.7-2.42v-.4q0-1.5-.68-2.24-.68-.76-1.76-.76-1.14 0-1.9.66-.74.64-.74 1.94v1.2q0 1.42.72 2.12.74.68 1.92.68m7.024-8.6h2.44v1.56a2.8 2.8 0 0 1 .4-.64q.26-.34.62-.58.36-.26.78-.42a2.8 2.8 0 0 1 .96-.16q.38 0 .64.04.28.04.36.08v2.34a3 3 0 0 0-.52-.14q-.3-.08-.82-.08-.6 0-1.02.2t-.7.54a2 2 0 0 0-.38.76q-.12.44-.12.92V20h-2.64zM95 20.24q-1.08 0-2.06-.32a4.7 4.7 0 0 1-1.68-1.02q-.72-.68-1.14-1.7t-.42-2.4v-.4q0-1.3.42-2.28t1.14-1.64 1.68-.98A6.2 6.2 0 0 1 95 9.16q1.08 0 2.04.34.96.32 1.68.98.74.66 1.16 1.64t.42 2.28v.4q0 1.36-.42 2.38a4.7 4.7 0 0 1-1.16 1.7q-.72.68-1.68 1.02t-2.04.34M95 18q1.12 0 1.86-.8.76-.8.76-2.4v-.4q0-1.46-.76-2.22-.74-.78-1.86-.78-1.14 0-1.88.78-.74.76-.74 2.22v.4q0 1.62.74 2.42.74.78 1.88.78m7.192-8.6h2.44v1.58q.18-.36.46-.68.3-.32.68-.58.4-.26.86-.4.48-.16 1.02-.16 1.28 0 2 .52.74.52 1.04 1.38a3.54 3.54 0 0 1 1.26-1.36q.84-.54 1.98-.54 1.701 0 2.58.98.88.96.88 2.96V20h-2.64v-6.3q0-1.26-.42-1.78-.4-.52-1.3-.52-.8 0-1.36.62-.56.6-.56 1.68V20h-2.64v-6.3q0-1.26-.42-1.78-.4-.52-1.3-.52-.8 0-1.36.62-.56.6-.56 1.68V20h-2.64z"
      ></path>
    </svg>
  </picture>
);

export const instagram = (
  <picture>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      className="dark:stroke-white  dark:group-hover:stroke-textBlack"
    >
      <g clipPath="url(#clip0_8709_3572)">
        <path
          fill="#161616"
          d="M12 2c2.717 0 3.056.01 4.122.06s1.79.217 2.428.465c.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122s-.01 3.056-.06 4.122-.218 1.79-.465 2.428a4.9 4.9 0 0 1-1.153 1.772c-.5.508-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06s-3.056-.01-4.122-.06-1.79-.218-2.428-.465a4.9 4.9 0 0 1-1.772-1.153 4.9 4.9 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12s.01-3.056.06-4.122.217-1.79.465-2.428a4.9 4.9 0 0 1 1.153-1.772A4.9 4.9 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2m0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10m6.5-.25a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0M12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_8709_3572">
          <path fill="#fff" d="M0 0h24v24H0z"></path>
        </clipPath>
      </defs>
    </svg>
  </picture>
);

export const youtube = (
  <picture>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      className="dark:stroke-white  dark:group-hover:stroke-textBlack"
    >
      <g clipPath="url(#clip0_8709_3577)">
        <path
          fill="#161616"
          d="M21.543 6.498C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022M10 15.5l6-3.5-6-3.5z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_8709_3577">
          <path fill="#fff" d="M0 0h24v24H0z"></path>
        </clipPath>
      </defs>
    </svg>
  </picture>
);

export const table = (
  <picture className="flex flex-col justify-center ">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      fill="none"
      viewBox="0 0 18 18"
      className="dark:stroke-white"
    >
      <path
        strokeWidth="2"
        d="M1 1h6v6H1zm0 10h6v6H1zM11 1h6v6h-6zm0 10h6v6h-6z"
      ></path>
    </svg>
  </picture>
);

export const sale = (
  <picture>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      className="dark:stroke-white"
    >
      <g clipPath="url(#clip0_8937_2768)">
        <path
          fill="#161616"
          d="M17.5 21a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7m0-2a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m-11-9a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7m0-2a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m12.571-4.485 1.414 1.414L4.93 20.485l-1.414-1.414L19.07 3.515z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_8937_2768">
          <path fill="#fff" d="M0 0h24v24H0z"></path>
        </clipPath>
      </defs>
    </svg>
  </picture>
);

export const filter = (
  <picture>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="98"
      height="24"
      fill="none"
      viewBox="0 0 98 24"
    >
      <path
        fill="#fff"
        d="M6.128 17.312q-1.232 0-2.208-.352a4.6 4.6 0 0 1-1.648-.992 4.6 4.6 0 0 1-1.04-1.552A5.6 5.6 0 0 1 .88 12.4v-.32q0-.976.352-1.824A4.2 4.2 0 0 1 2.272 8.8q.672-.607 1.648-.96.976-.352 2.208-.352V6.32h1.504v1.168q1.231 0 2.208.352.976.352 1.648.96.672.607 1.024 1.456.368.848.368 1.824v.32q0 1.104-.368 2.016a4.4 4.4 0 0 1-1.024 1.552 4.6 4.6 0 0 1-1.648.992q-.976.352-2.208.352v1.168H6.128zm5.152-5.232q0-.688-.24-1.28a2.84 2.84 0 0 0-.704-1.024 3.1 3.1 0 0 0-1.152-.688q-.672-.256-1.552-.256v7.136q.88 0 1.552-.256.688-.255 1.152-.72.465-.465.704-1.12.24-.656.24-1.472zm-8.8.32q0 .816.24 1.472.24.655.704 1.12.465.465 1.136.72.688.255 1.568.256V8.832q-.88 0-1.568.256a3.1 3.1 0 0 0-1.136.688A2.84 2.84 0 0 0 2.72 10.8q-.24.592-.24 1.28zm12.566-2.88h1.408v6.4l4.384-6.4h1.408V18h-1.408v-6.4L16.454 18h-1.408zm9.365 8.64q-.24 0-.48-.048v-1.408q.081.016.24.016a.9.9 0 0 0 .608-.224q.273-.224.432-.784.16-.56.24-1.52t.08-2.432V9.52h6.08V18h-1.408v-7.232H26.94v1.312q0 1.776-.16 2.944-.159 1.168-.48 1.872-.303.688-.784.976-.48.288-1.104.288m9.76-8.64h1.408v3.2h2.032q1.599 0 2.352.704.768.705.768 1.952 0 1.215-.768 1.92Q39.21 18 37.61 18h-3.44zm3.36 7.232q.992 0 1.392-.352t.4-1.04-.4-1.04-1.392-.352h-1.952v2.784zm6.185-5.984H40.82V9.52h7.2v1.248h-2.896V18h-1.408zm5.908-1.248h1.312v1.6a3.07 3.07 0 0 1 1.2-1.296q.783-.465 1.808-.464 1.6 0 2.56 1.056.96 1.04.96 3.104v.32q0 1.088-.256 1.904-.255.8-.72 1.344-.465.528-1.12.8a3.6 3.6 0 0 1-1.424.272q-1.089 0-1.824-.48a3.16 3.16 0 0 1-1.088-1.2v4.72h-1.408zm4 7.392q.511 0 .96-.192a2.2 2.2 0 0 0 .768-.592q.335-.384.512-.96.192-.576.192-1.328v-.32q0-.689-.192-1.232a2.45 2.45 0 0 0-.512-.912 2 2 0 0 0-.768-.576 2.4 2.4 0 0 0-.96-.192 2.8 2.8 0 0 0-1.056.192q-.48.176-.816.512-.336.32-.528.768a2.4 2.4 0 0 0-.192.96v1.28q0 .576.192 1.056t.528.816.816.528 1.056.192m5.843-7.392h1.409v3.2h1.712q1.6 0 2.351.704.77.705.769 1.952 0 1.215-.769 1.92-.751.704-2.351.704h-3.12zm3.04 7.232q.993 0 1.393-.352t.4-1.04-.4-1.04-1.392-.352h-1.633v2.784zM67.02 9.52h1.408V18H67.02z"
      ></path>
      <g clipPath="url(#clip0_8956_1163)">
        <path
          fill="#fff"
          d="M95 4v2h-1l-5 7.5V22h-6v-8.5L78 6h-1V4zM80.404 6 85 12.894V20h2v-7.106L91.596 6z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_8956_1163">
          <path fill="#fff" d="M74 0h24v24H74z"></path>
        </clipPath>
      </defs>
    </svg>
  </picture>
);

export const close = (
  <picture>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6 cursor-pointer dark:stroke-white dark:group-hover:stroke-textBlack"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18 18 6M6 6l12 12"
        className="size-5"
      />
    </svg>
  </picture>
);

export const trash = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="size-6 dark:stroke-white"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
    />
  </svg>
);

export const buy = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="size-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
    />
  </svg>
);
