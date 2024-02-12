import * as React from "react";
import type { SVGProps } from "react";

interface NodeMoveDownIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const NodeMoveDownIcon = (props: NodeMoveDownIconProps) => {
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
        <path d="M5.49902 7.99219V12.4877M5.49902 12.4877V13.9862C5.49902 16.8118 5.49902 18.2246 6.37746 19.1025C7.20252 19.9269 8.49991 19.9771 10.9975 19.9801M5.49902 12.4877H10.9975" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3.99944 1.99829H6.9986C8.81329 1.99829 8.99803 3.10712 8.99803 4.99532C8.99803 6.88351 8.81329 7.99234 6.9986 7.99234H3.99944C2.18475 7.99234 2 6.88351 2 4.99532C2 3.10712 2.18475 1.99829 3.99944 1.99829Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10.9976 12.4878C10.9976 11.5459 10.9976 11.075 11.2904 10.7824C11.5832 10.4897 12.0545 10.4897 12.997 10.4897C13.9395 10.4897 14.4108 10.4897 14.7036 10.7824C14.9964 11.075 14.9964 11.5459 14.9964 12.4878C14.9964 13.4296 14.9964 13.9006 14.7036 14.1932C14.4108 14.4858 13.9395 14.4858 12.997 14.4858C12.0545 14.4858 11.5832 14.4858 11.2904 14.1932C10.9976 13.9006 10.9976 13.4296 10.9976 12.4878Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10.9976 19.9804C10.9976 19.0386 10.9976 18.5676 11.2904 18.275C11.5832 17.9824 12.0545 17.9824 12.997 17.9824C13.9395 17.9824 14.4108 17.9824 14.7036 18.275C14.9964 18.5676 14.9964 19.0386 14.9964 19.9804C14.9964 20.9223 14.9964 21.3932 14.7036 21.6858C14.4108 21.9785 13.9395 21.9785 12.997 21.9785C12.0545 21.9785 11.5832 21.9785 11.2904 21.6858C10.9976 21.3932 10.9976 20.9223 10.9976 19.9804Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M17.9878 20.0657L19.3905 21.6328C19.825 22.0549 20.088 22.1306 20.4376 21.7765L22.0001 20.078M20.0071 21.9851V13.8638C19.9902 13.3238 19.6308 12.0992 18.0098 11.9763" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default NodeMoveDownIcon;
