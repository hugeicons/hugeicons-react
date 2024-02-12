import * as React from "react";
import type { SVGProps } from "react";

interface NoMeetingRoomIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const NoMeetingRoomIcon = (props: NoMeetingRoomIconProps) => {
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
        <path d="M2.00024 2L22.0002 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12.0005 21H8.00049C5.64347 21 4.46495 21 3.73272 20.2678C3.00049 19.5355 3.00049 18.357 3.00049 16V8C3.00049 5.64298 3.00049 4.46447 3.73272 3.73223M12.0005 21C14.3575 21 15.536 21 16.2683 20.2678C16.889 19.647 16.9835 18.7056 16.9979 16.9974M12.0005 21H17.0005C18.8861 21 19.8289 21 20.4147 20.4142M21.0005 16.9974V10C21.0005 8.11438 21.0005 7.17157 20.4147 6.58579C19.8289 6 18.8861 6 17.0005 6M17.0005 13.1109V8C17.0005 5.64298 17.0005 4.46447 16.2683 3.73223C15.536 3 14.3575 3 12.0005 3H8.00049C7.5983 3 7.23042 3 6.89321 3.00364" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default NoMeetingRoomIcon;
