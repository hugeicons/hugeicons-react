import * as React from "react";
import type { SVGProps } from "react";

interface Triangle01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Triangle01Icon = (props: Triangle01IconProps) => {
  const animationName = props.animate ? 'spinAnimation' : '';

  return (
    <>
      <style>
        {`
          @keyframes ${animationName} {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        viewBox="0 0 24 24"
        width={props.size || 24}
        height={props.size || 24}
        fill={"none"}
        {...props}
        style={{
          ...props.style,
          animation: props.animate ? `${animationName} 2s linear infinite` : undefined,
          transform: `rotate(${props.rotate || 0}deg)`,
        }}
      >
        <path d="M7.89754 6.73262C9.71204 3.57754 10.6193 2 12 2C13.3807 2 14.288 3.57754 16.1025 6.73262L19.8592 13.2648C21.5848 16.2653 22.4476 17.7656 21.7671 18.8828C21.0866 20 19.3099 20 15.7567 20H8.24328C4.69006 20 2.91344 20 2.23293 18.8828C1.55242 17.7656 2.41522 16.2653 4.14082 13.2648L7.89754 6.73262Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M12 20V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20 9L18 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 9L6 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 14.409C5.88945 15.0512 7.25244 16.8771 7.25244 19.0294C7.25244 19.3617 7.21994 19.6863 7.158 20M16.842 20C16.7801 19.6863 16.7476 19.3617 16.7476 19.0294C16.7476 16.8771 18.1105 15.0512 20 14.409M15.2815 6C14.429 6.83606 13.273 7.34965 12 7.34965C10.727 7.34965 9.57102 6.83606 8.71851 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default Triangle01Icon;
