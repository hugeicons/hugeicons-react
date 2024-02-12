import * as React from "react";
import type { SVGProps } from "react";

interface MouseScroll01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const MouseScroll01Icon = (props: MouseScroll01IconProps) => {
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
        <path d="M4.74061 17.0888C4.93047 19.4803 6.82417 21.511 9.26502 21.8118C10.1626 21.9223 11.0752 22 12 22C12.9247 22 13.8373 21.9223 14.7349 21.8118C17.1758 21.511 19.0694 19.4803 19.2593 17.0888C19.3909 15.4317 19.5 13.732 19.5 12C19.5 10.268 19.3909 8.56832 19.2593 6.91118C19.0694 4.51965 17.1758 2.48893 14.7349 2.1882C13.8373 2.07762 12.9247 2 12 2C11.0752 2 10.1626 2.07762 9.26502 2.1882C6.82417 2.48893 4.93047 4.51965 4.74061 6.91118C4.60903 8.56832 4.5 10.268 4.5 12C4.5 13.732 4.60903 15.4317 4.74061 17.0888Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M11.9883 6.83984L11.9883 11.7598" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10.0039 7.85958C10.9859 6.83958 11.5847 5.93958 12.0398 6.00426C12.4231 6.00107 12.7823 6.59958 14.0039 7.85958" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13.9961 11.1416C13.0141 12.1616 12.4153 13.0616 11.9602 12.9969C11.5769 13.0001 11.2177 12.4016 9.99609 11.1416" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default MouseScroll01Icon;
