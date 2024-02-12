import * as React from "react";
import type { SVGProps } from "react";

interface TextFootnoteIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const TextFootnoteIcon = (props: TextFootnoteIconProps) => {
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
        <path d="M19.75 5.8877L19.7494 8.7232M19.7494 8.7232L22 7.70588M19.7494 8.7232L17.5 7.70588M19.7494 8.7232L17.95 10.8877M19.7494 8.7232L21.55 10.8877" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 21.0015H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M16 5.99756C16 5.3406 16 5.01212 15.9194 4.72427C15.7518 4.12555 15.3066 3.60978 14.7541 3.37454C14.4886 3.26144 14.1885 3.22937 13.5884 3.16524C12.1695 3.0136 10.3874 2.99756 9 2.99756C7.61262 2.99756 5.83047 3.0136 4.41161 3.16524C3.8115 3.22937 3.51144 3.26144 3.24586 3.37454C2.69344 3.60978 2.24816 4.12555 2.08057 4.72427C2 5.01212 2 5.3406 2 5.99756" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M9 3.34961L9 21.0013" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default TextFootnoteIcon;
