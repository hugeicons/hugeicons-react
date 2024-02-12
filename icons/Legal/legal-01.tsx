import * as React from "react";
import type { SVGProps } from "react";

interface Legal01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Legal01Icon = (props: Legal01IconProps) => {
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
        <path d="M10 11.6273L5.07498 17.4215C4.41411 18.199 3.23201 18.2464 2.51138 17.5241C1.79074 16.8019 1.83795 15.6172 2.61376 14.9549L8.3953 10.019" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M18 10.0667L13.0476 15.03M9.95238 2.00146L5 6.96472M9.33337 2.62183L5.61908 6.34428C5.61908 6.34428 7.47622 8.82591 9.33337 10.6871C11.1905 12.5484 13.6667 14.4096 13.6667 14.4096L17.381 10.6871C17.381 10.6871 15.5238 8.2055 13.6667 6.34428C11.8096 4.48306 9.33337 2.62183 9.33337 2.62183Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20 11.659L22 10.019M20 14.9389L22 16.0322" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11.002 21.9985H20.9998M12.2267 21.9985C12.7782 21.0111 13.19 19.1214 15.142 19.0155C15.7218 18.9841 16.3117 18.9841 16.8914 19.0155C18.8434 19.1214 19.2572 21.0111 19.8087 21.9985" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Legal01Icon;
