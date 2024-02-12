import * as React from "react";
import type { SVGProps } from "react";

interface GolfCartIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const GolfCartIcon = (props: GolfCartIconProps) => {
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
        <path d="M3.99821 18.9818C3.07289 18.9818 2 19.2182 2 17.9874V15.8389C2 14.1187 2 13.2587 2.49899 12.6951C3.27867 11.8144 4.78799 12.0211 5.8359 12.0211C6.64499 12.0211 7.64108 11.9089 8.32617 12.4323C8.77967 12.7788 8.99564 13.352 9.42757 14.4984C9.59263 14.9364 9.71105 15.5422 10.1161 15.8216C10.3729 15.9986 10.7078 15.9986 11.3776 15.9986H13.4897C14.8134 15.9986 15.2614 14.9734 15.9875 14.0099H17.5416C19.7316 14.0099 21.7599 15.286 21.9669 17.6407C22.0083 18.112 22.1219 18.9818 21.4271 18.9818H19.9839M15.9875 18.9818H8.49419" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="6" cy="19" r="2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="18" cy="19" r="2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 12V3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M19 14L16 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 3H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 14L14 11M13 12L15 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6.5 12C6.5 9.97001 6.38046 8 4 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default GolfCartIcon;
