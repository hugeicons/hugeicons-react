import * as React from "react";
import type { SVGProps } from "react";

interface ImageAdd01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const ImageAdd01Icon = (props: ImageAdd01IconProps) => {
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
        <path d="M11.508 2.99023C7.02518 2.99023 4.78379 2.99023 3.39116 4.38232C1.99854 5.77441 1.99854 8.01494 1.99854 12.496C1.99854 16.977 1.99854 19.2176 3.39116 20.6097C4.78379 22.0018 7.02518 22.0018 11.508 22.0018C15.9907 22.0018 18.2321 22.0018 19.6248 20.6097C21.0174 19.2176 21.0174 16.977 21.0174 12.496V11.9957" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M4.99854 20.9897C9.20852 16.2384 13.9397 9.93721 20.9985 14.6631" stroke="currentColor" strokeWidth="1.5" />
        <path d="M17.9958 1.99829V10.0064M22.0014 5.97728L13.9902 5.99217" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default ImageAdd01Icon;
