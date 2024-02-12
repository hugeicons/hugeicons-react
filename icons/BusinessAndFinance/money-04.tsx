import * as React from "react";
import type { SVGProps } from "react";

interface Money04IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Money04Icon = (props: Money04IconProps) => {
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
        <path d="M12 19.5C10.6675 20.1224 8.91707 20.5 7 20.5C5.93408 20.5 4.91969 20.3833 4 20.1726C2.41828 19.8103 2 18.8796 2 17.386V6.61397C2 5.62914 3.04003 4.95273 4 5.1726C4.91969 5.38325 5.93408 5.5 7 5.5C8.91707 5.5 10.6675 5.12236 12 4.5C13.3325 3.87764 15.0829 3.5 17 3.5C18.0659 3.5 19.0803 3.61675 20 3.8274C21.5817 4.18968 22 5.12036 22 6.61397V17.386C22 18.3709 20.96 19.0473 20 18.8274C19.0803 18.6167 18.0659 18.5 17 18.5C15.0829 18.5 13.3325 18.8776 12 19.5Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.5 13.3807 9.5 12C9.5 10.6193 10.6193 9.5 12 9.5C13.3807 9.5 14.5 10.6193 14.5 12Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M5.5 13L5.5 13.009" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18.5 10.9922L18.5 11.0012" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Money04Icon;
