import * as React from "react";
import type { SVGProps } from "react";

interface WasteRestoreIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const WasteRestoreIcon = (props: WasteRestoreIconProps) => {
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
        <path d="M3.75 5H9.17963C9.84834 5 10.4728 4.6658 10.8437 4.1094L11.6563 2.8906C12.0272 2.3342 12.6517 2 13.3204 2H17.8085C18.6693 2 19.4336 2.55086 19.7058 3.36754L20.25 5M21.75 5H8.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M20.25 5L19.75 11.5M5.25 5L5.85461 15.5362C6.00945 18.1069 6.08688 19.3923 6.72868 20.3166C7.046 20.7736 7.4548 21.1593 7.92905 21.4492C8.51127 21.8051 9.21343 21.945 10.25 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M11.75 15.498L12.8863 16.9638C13.458 14.8299 15.6514 13.5636 17.7852 14.1353C18.8775 14.428 19.7425 15.1456 20.25 16.0626M21.75 20.498L20.6137 19.0343C20.0419 21.1682 17.8486 22.4345 15.7147 21.8627C14.6478 21.5769 13.7977 20.8856 13.2859 19.999" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default WasteRestoreIcon;
