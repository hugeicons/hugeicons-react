import * as React from "react";
import type { SVGProps } from "react";

interface ReflexIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const ReflexIcon = (props: ReflexIconProps) => {
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
        <path d="M22.0007 10.5H11.8276C10.692 10.5 10.1242 10.5 9.65783 10.7714C9.19147 11.0428 8.91094 11.5365 8.34989 12.5238L3.70815 21.4524M22.0007 10.5C22.0007 9.93982 19.9999 8.5 19.9999 8.5M22.0007 10.5C22.0007 11.0602 19.9999 12.5 19.9999 12.5M3.70815 21.4524C3.23858 21.1799 3 18.794 3 18.794M3.70815 21.4524C4.17772 21.7248 6.35295 20.7395 6.35295 20.7395" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15.9368 10.5C15.9785 10.1889 16 9.87134 16 9.54873C16 5.65582 12.866 2.5 9 2.5C5.13401 2.5 2 5.65582 2 9.54873C2 12.3606 3.63505 14.8687 6 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default ReflexIcon;
