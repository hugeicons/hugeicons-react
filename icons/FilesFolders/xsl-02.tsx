import * as React from "react";
import type { SVGProps } from "react";

interface Xsl02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Xsl02Icon = (props: Xsl02IconProps) => {
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
        <path d="M15.6618 13H14.7126C14.3334 13 14.1437 13 13.9941 13.0634C13.4847 13.2795 13.4916 13.7873 13.4916 14.25C13.4916 14.7127 13.4847 15.2205 13.9941 15.4366C14.1437 15.5 14.3334 15.5 14.7126 15.5C15.0919 15.5 15.2816 15.5 15.4312 15.5634C15.9406 15.7795 15.9337 16.2873 15.9337 16.75C15.9337 17.2127 15.9406 17.7205 15.4312 17.9366C15.2816 18 15.0919 18 14.7126 18H13.6789M8 13L9.70791 15.5M9.70791 15.5L11.4158 18M9.70791 15.5L11.4158 13M9.70791 15.5L8 18M21 18H20.146C19.3409 18 18.9384 18 18.6883 17.7559C18.4381 17.5118 18.4381 17.119 18.4381 16.3333V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 22H10.7273C7.46607 22 5.83546 22 4.70307 21.2022C4.37862 20.9736 4.09058 20.7025 3.8477 20.3971C3 19.3313 3 17.7966 3 14.7273V12.1818C3 9.21865 3 7.73706 3.46894 6.55375C4.22281 4.65142 5.81714 3.15088 7.83836 2.44135C9.09563 2 10.6698 2 13.8182 2C15.6173 2 16.5168 2 17.2352 2.2522C18.3902 2.65765 19.3012 3.5151 19.732 4.60214C20 5.27832 20 6.12494 20 7.81818V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 12C3 10.1591 4.49238 8.66667 6.33333 8.66667C6.99912 8.66667 7.78404 8.78333 8.43137 8.60988C9.00652 8.45576 9.45576 8.00652 9.60988 7.43136C9.78333 6.78404 9.66667 5.99912 9.66667 5.33333C9.66667 3.49238 11.1591 2 13 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Xsl02Icon;
