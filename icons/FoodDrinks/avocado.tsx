import * as React from "react";
import type { SVGProps } from "react";

interface AvocadoIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const AvocadoIcon = (props: AvocadoIconProps) => {
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
        <path d="M12 5C12 4 12.4 2 14 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 18.0412V13.9588C12 13.167 12.2189 12.8334 13.1525 13.0797C16.2825 13.9053 16.2825 18.0947 13.1525 18.9203C12.2189 19.1666 12 18.833 12 18.0412Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 5C9.60677 5 7.66667 6.79086 7.66667 9C7.66667 10.2239 7.38897 11.5983 6.63829 12.6071C5.92023 13.5722 5.5 14.7408 5.5 16C5.5 19.3137 8.41015 22 12 22C15.5899 22 18.5 19.3137 18.5 16C18.5 14.7408 18.0798 13.5722 17.3617 12.6071C16.611 11.5983 16.3333 10.2239 16.3333 9C16.3333 6.79086 14.3932 5 12 5Z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </>
  );
};

export default AvocadoIcon;
