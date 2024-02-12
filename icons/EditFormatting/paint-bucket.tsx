import * as React from "react";
import type { SVGProps } from "react";

interface PaintBucketIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const PaintBucketIcon = (props: PaintBucketIconProps) => {
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
        <path d="M19 12.1294L12.9388 18.207C11.1557 19.9949 10.2641 20.8889 9.16993 20.9877C8.98904 21.0041 8.80705 21.0041 8.62616 20.9877C7.53195 20.8889 6.64039 19.9949 4.85726 18.207L2.83687 16.1811C1.72104 15.0622 1.72104 13.2482 2.83687 12.1294M19 12.1294L10.9184 4.02587M19 12.1294H2.83687M10.9184 4.02587L2.83687 12.1294M10.9184 4.02587L8.89805 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 20C22 21.1046 21.1046 22 20 22C18.8954 22 18 21.1046 18 20C18 18.8954 20 17 20 17C20 17 22 18.8954 22 20Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default PaintBucketIcon;
