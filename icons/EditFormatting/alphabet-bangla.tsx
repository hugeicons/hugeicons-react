import * as React from "react";
import type { SVGProps } from "react";

interface AlphabetBanglaIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const AlphabetBanglaIcon = (props: AlphabetBanglaIconProps) => {
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
        <path d="M14.7394 12.7799C15.773 12.7495 17.8505 14.1181 17.9964 19.8328M9.93274 10.7651C9.85184 10.0639 9.87585 8.55093 11.2281 7.80584C12.9955 6.83202 14.8132 8.46474 15.0206 10.2727C15.1223 11.1585 14.7652 13.992 13.2559 15.6892C12.6926 16.3227 12.1849 16.8767 11.2281 16.9748C10.3404 17.0659 9.61226 16.8283 8.76843 16.2714C7.41998 15.3814 6.01024 13.881 4.8146 11.8082C3.53743 9.59404 2.84713 8.08034 2.00195 5.02637" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6.99707 6.36752C7.87492 5.41201 12.9912 1.68945 16.5957 6.13758C17.0324 6.67646 17.2507 6.9459 17.6239 7.99921C17.9971 9.05252 17.9971 9.78494 17.9971 11.2498V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17.9971 10C17.9971 7.72717 19.1971 4.62581 21.9971 5.03703" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default AlphabetBanglaIcon;
