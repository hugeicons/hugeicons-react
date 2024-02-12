import * as React from "react";
import type { SVGProps } from "react";

interface MilkCoconutIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const MilkCoconutIcon = (props: MilkCoconutIconProps) => {
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
        <path d="M10.9714 21.9985H8.01023M18.0252 8.0386L15.7397 5.21499C15.5912 5.03156 15.5124 4.80151 15.5172 4.56556L15.5381 3.53212C15.5552 2.69196 14.8788 2.00171 14.0384 2.00171H6.4871C5.65867 2.00171 4.9871 2.67328 4.9871 3.50171V4.94586L2.56368 7.45745C2.20396 7.83026 2.00293 8.32811 2.00293 8.84618V19.9985C2.00293 21.103 2.89836 21.9985 4.00293 21.9985H8.00207H8.01023M18.0252 8.0386V10.0815M18.0252 8.0386H7.83994M5.02606 4.94586L7.44948 7.45745C7.61431 7.62827 7.74582 7.82535 7.83994 8.0386M8.01023 21.9985V8.84617C8.01023 8.56549 7.95122 8.29075 7.83994 8.0386" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13.2482 18.575C12.5941 17.9211 13.2569 16.1984 14.7284 14.7273C16.1999 13.2561 17.9231 12.5935 18.5772 13.2474M13.2482 18.575C13.2482 19.1669 13.6032 20.1139 14.1363 20.6468C15.9349 22.4449 18.8509 22.4449 20.6495 20.6468C22.4481 18.8487 22.4481 15.9334 20.6495 14.1353C20.1165 13.6024 19.1692 13.2474 18.5772 13.2474M13.2482 18.575C13.8117 19.1384 15.1692 18.7243 16.4754 17.6577M18.5772 13.2474C19.2311 13.9012 18.5685 15.6239 17.0969 17.0951C16.8933 17.2985 16.6851 17.4865 16.4754 17.6577M16.4754 17.6577C16.5838 18.3581 16.8008 19.1669 17.985 19.7589" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default MilkCoconutIcon;
