import * as React from "react";
import type { SVGProps } from "react";

interface RssConnected01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const RssConnected01Icon = (props: RssConnected01IconProps) => {
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
        <path d="M12.9915 21C13.7121 21 13.9925 20.9956 13.9925 20.9956C17.4088 20.971 19.2922 20.8099 20.5342 19.7552C22 18.5104 22 16.5069 22 12.5C22 11.1094 22 9.96004 21.9387 9M11.9906 4C7.27213 4 4.91289 4 3.44705 5.2448C2.32426 6.19827 2.0615 7.59687 2 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 7C14 7 15 7 16 9C16 9 19.1765 4 22 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2.98242 20H2.9914" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 16.2349C4.49328 16.2349 6.77053 18.5 6.77053 20.9996M10 20.9996C10 16.5 5.99511 13 2.04522 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default RssConnected01Icon;
