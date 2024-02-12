import * as React from "react";
import type { SVGProps } from "react";

interface TextSuperscriptIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const TextSuperscriptIcon = (props: TextSuperscriptIconProps) => {
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
        <path d="M12 21H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.75 3C9.75 2.58579 9.41421 2.25 9 2.25C8.58579 2.25 8.25 2.58579 8.25 3H9.75ZM8.25 21C8.25 21.4142 8.58579 21.75 9 21.75C9.41421 21.75 9.75 21.4142 9.75 21H8.25ZM8.25 3V21H9.75V3H8.25Z" fill="currentColor" />
        <path d="M16 6C16 5.37191 16 5.05787 15.9194 4.78267C15.7518 4.21026 15.3066 3.71716 14.7541 3.49226C14.4886 3.38413 14.1885 3.35347 13.5884 3.29216C12.1695 3.14718 10.3874 3 9 3C7.61262 3 5.83047 3.14718 4.41161 3.29216C3.8115 3.35347 3.51144 3.38413 3.24586 3.49226C2.69344 3.71716 2.24816 4.21026 2.08057 4.78267C2 5.05787 2 5.37191 2 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M22 12H20C19.5286 12 19.2929 12 19.1464 11.8566C19 11.7133 19 11.4825 19 11.021V10.0766C19 9.28117 19.176 9.12533 20.0004 9.10939C20.7769 9.09438 21.2401 9.03883 21.5607 8.83328C22 8.55161 22 8.09827 22 7.19159C22 5.45943 19 6.12617 19 6.12617" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default TextSuperscriptIcon;
