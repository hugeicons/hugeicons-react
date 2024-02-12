import * as React from "react";
import type { SVGProps } from "react";

interface IcoIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const IcoIcon = (props: IcoIconProps) => {
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
        <path d="M12 2C6.47716 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 9.5V14.5M12.5 13.4999C12.5 14.0522 12.0523 14.4999 11.5 14.4999H9.5C8.94771 14.4999 8.5 14.0522 8.5 13.4999V10.4999C8.5 9.94764 8.94773 9.49993 9.50002 9.49994L11.5001 9.49998C12.0523 9.49999 12.5 9.94767 12.5 10.4999M15 11.5V12.5C15 13.6046 15.8954 14.5 17 14.5C18.1046 14.5 19 13.6046 19 12.5V11.5C19 10.3954 18.1046 9.5 17 9.5C15.8954 9.5 15 10.3954 15 11.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default IcoIcon;
