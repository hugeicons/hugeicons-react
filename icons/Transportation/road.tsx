import * as React from "react";
import type { SVGProps } from "react";

interface RoadIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const RoadIcon = (props: RoadIconProps) => {
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
        <path d="M2 21.9984V11.9961" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 21.9984V11.9961" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 21.9977V20.998" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 17.9967V16.9971" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5.72533 5.6545L6.55526 6.41347M6.55526 6.41347C6.71446 6.14515 6.99041 5.67505 7.08183 5.38096C7.88067 2.81106 7.95145 2.10309 9.18504 2.00195H14.8119C16.0455 2.10309 16.1163 2.81106 16.9151 5.38096C17.0065 5.67505 17.2326 6.14515 17.3918 6.41347M6.55526 6.41347C5.95054 7.43274 5.1493 8.09981 5.02924 8.98049C5.0096 9.12453 5.02924 10.7319 5.02924 11.8981C5.02924 12.7744 5.87312 12.7476 6.69535 12.8158C7.21787 12.8591 7.74116 12.9539 8.26545 12.9593C11.1713 12.9889 13.0926 12.992 15.9671 12.9607C16.5229 12.9546 17.083 12.8502 17.637 12.8031C18.2625 12.75 18.9165 12.6795 18.9677 11.8981C19.044 10.7331 18.9873 9.12453 18.9677 8.98049C18.8476 8.09981 17.9965 7.43274 17.3918 6.41347M6.55526 6.41347H17.3918M17.3918 6.41347L18.364 5.6545M5.20362 8.42948L6.41209 9.34926M10.5581 10.5113L13.4968 10.5113M17.6201 9.32647L18.9548 8.9009M7.08183 12.8551L7.00382 14.4988M16.9822 12.8757V14.4988" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default RoadIcon;
