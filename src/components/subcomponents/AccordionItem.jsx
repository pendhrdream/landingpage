const AccordionItem = ({ open, index, title, content, onClick }) => {
  return (
    <div
      className={`flex flex-col px-[20px] py-[31px] gap-[16px] font-rubik transition-[height] duration-500 ease-in-out transform ${
        open ? "border-b-2 border-purple-800" : "border-b border-gray-400"
      }`}
      style={{ borderBottom: open ? `2px solid #4B1790` : `1px solid #D2D2D2` }}
    >
      <button
        className="flex flex-row justify-between items-center"
        onClick={() => onClick(index)}
      >
        <span className="text-secondary text-[28px] font-medium leading-[135%] tracking-[0.233px]">
          {title}
        </span>
        {open ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
          >
            <g clip-path="url(#clip0_1_2201)">
              <path
                d="M12.5654 18.8728H24.9806M34.2921 18.8728C34.2921 27.4436 27.3439 34.3918 18.773 34.3918C10.202 34.3918 3.25391 27.4436 3.25391 18.8728C3.25391 10.3018 10.202 3.3537 18.773 3.3537C27.3439 3.3537 34.2921 10.3018 34.2921 18.8728Z"
                stroke="#4B1790"
                stroke-width="2.06921"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_2201">
                <rect
                  width="35.1766"
                  height="35.1766"
                  fill="white"
                  transform="translate(0.323242 0.422363)"
                />
              </clipPath>
            </defs>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
          >
            <path
              d="M17.9126 11.8638V24.279M11.705 18.0714H24.1203M33.4317 18.0714C33.4317 26.6423 26.4835 33.5905 17.9126 33.5905C9.34168 33.5905 2.39355 26.6423 2.39355 18.0714C2.39355 9.50043 9.34168 2.55231 17.9126 2.55231C26.4835 2.55231 33.4317 9.50043 33.4317 18.0714Z"
              stroke="url(#paint0_linear_1_2206)"
              stroke-width="2.06921"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1_2206"
                x1="2.39355"
                y1="18.0714"
                x2="37.6991"
                y2="25.3209"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.295" stop-color="#4B1790" />
                <stop offset="0.865" stop-color="#D17BDF" />
              </linearGradient>
            </defs>
          </svg>
        )}
      </button>
      <div
        className={`flex pr-[100px] text-primary text-[24px] font-normal leading-[135%] tracking-[0.233px] duration-500 ease-in-out transform ${
          open ? "visible" : "hidden"
        }`}
      >
        {content}
      </div>
    </div>
  );
};

export default AccordionItem;
