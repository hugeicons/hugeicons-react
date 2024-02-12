import * as React from "react";
import type { SVGProps } from "react";

interface KeyframesMultipleAddIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const KeyframesMultipleAddIcon = (props: KeyframesMultipleAddIconProps) => {
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
        <path d="M6.5 6.15642C7.16531 5.38547 7.58503 5 8.10017 5C8.73332 5 9.22232 5.58231 10.2003 6.74694L12.4677 9.44699C13.4892 10.6634 14 11.2716 14 12C14 12.7284 13.4892 13.3366 12.4677 14.553L10.2003 17.2531C9.22232 18.4177 8.73332 19 8.10017 19C7.58503 19 7.16531 18.6145 6.5 17.8436" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 15L5 9M2 12H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M13 19L16.5118 14.6032C17.5039 13.361 18 12.7398 18 12C18 11.2602 17.5039 10.639 16.5118 9.39683L13 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17 19L20.5118 14.6032C21.5039 13.361 22 12.7398 22 12C22 11.2602 21.5039 10.639 20.5118 9.39683L17 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default KeyframesMultipleAddIcon;
