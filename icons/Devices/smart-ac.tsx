import * as React from "react";
import type { SVGProps } from "react";

interface SmartAcIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const SmartAcIcon = (props: SmartAcIconProps) => {
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
        <path d="M16 3C18.3389 3 19.5083 3 20.3621 3.53647C20.8073 3.81621 21.1838 4.19267 21.4635 4.63789C22 5.49167 22 6.66111 22 9C22 11.3389 22 12.5083 21.4635 13.3621C21.1838 13.8073 20.8073 14.1838 20.3621 14.4635C19.5083 15 18.3389 15 16 15L8 15C5.66111 15 4.49167 15 3.63789 14.4635C3.19267 14.1838 2.81621 13.8073 2.53647 13.3621C2 12.5083 2 11.3389 2 9C2 6.66111 2 5.49167 2.53647 4.63789C2.81621 4.19267 3.19267 3.81621 3.63789 3.53647C4.49167 3 5.66111 3 8 3L16 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M7 12H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M18 7H18.009" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6.8 18C6.8 18 7.6 19.875 6 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17.2 18C17.2 18 16.4 19.875 18 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 18V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default SmartAcIcon;
