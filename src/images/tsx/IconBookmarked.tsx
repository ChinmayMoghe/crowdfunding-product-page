import * as React from "react";

function SvgIconBookmarked(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={56} height={56} xmlns="http://www.w3.org/2000/svg" {...props}>
      <g fill="none" fillRule="evenodd">
        <circle fill="#2F2F2F" cx={28} cy={28} r={28} />
        <path fill="#3CB4AC" d="M23 19v18l5-5.058L33 37V19z" />
      </g>
    </svg>
  );
}

export default SvgIconBookmarked;
