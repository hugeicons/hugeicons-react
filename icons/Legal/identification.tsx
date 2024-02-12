import * as React from "react";
import type { SVGProps } from "react";

interface IdentificationIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const IdentificationIcon = (props: IdentificationIconProps) => {
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
        <path d="M9.1353 2.49988C6.46902 2.56063 4.91168 2.81444 3.84762 3.8748C2.91634 4.80285 2.60504 6.10744 2.50098 8.19988M14.8667 2.49988C17.5329 2.56063 19.0903 2.81444 20.1543 3.8748C21.0856 4.80285 21.3969 6.10744 21.501 8.19988M14.8667 21.4999C17.5329 21.4391 19.0903 21.1853 20.1543 20.125C21.0856 19.1969 21.3969 17.8923 21.501 15.7999M9.1353 21.4999C6.46902 21.4391 4.91168 21.1853 3.84762 20.125C2.91634 19.1969 2.60504 17.8923 2.50098 15.7999" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 17C9.83846 14.4046 14.1188 14.263 16 17M14.5 9.5C14.5 10.8807 13.3807 12 12 12C10.6193 12 9.5 10.8807 9.5 9.5C9.5 8.11929 10.6193 7 12 7C13.3807 7 14.5 8.11929 14.5 9.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default IdentificationIcon;
