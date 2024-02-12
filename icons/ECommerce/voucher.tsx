import * as React from "react";
import type { SVGProps } from "react";

interface VoucherIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const VoucherIcon = (props: VoucherIconProps) => {
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
        <path d="M4.56324 5.55807L7.4 8M7.4 8L11 11M7.4 8L4.50512 10.3865M7.4 8L11 5M2 4.5C2 5.32843 2.67157 6 3.5 6C4.32843 6 5 5.32843 5 4.5C5 3.67157 4.32843 3 3.5 3C2.67157 3 2 3.67157 2 4.5ZM2 11.5C2 12.3284 2.67157 13 3.5 13C4.32843 13 5 12.3284 5 11.5C5 10.6716 4.32843 10 3.5 10C2.67157 10 2 10.6716 2 11.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 15.0768V14M19.8462 7.27029C20.3409 7.41042 20.7309 7.62313 21.0537 7.94599C21.3766 8.26886 21.5893 8.65887 21.7294 9.1536M21.7294 18.8461C21.5893 19.3408 21.3766 19.7308 21.0537 20.0537C20.7309 20.3766 20.3409 20.5893 19.8462 20.7294M10.1538 20.7294C9.65913 20.5893 9.26913 20.3766 8.94627 20.0537C8.62341 19.7308 8.41071 19.3408 8.27058 18.8461M13.9231 21H16.0769M22 15.0768V12.9229M16.0769 7H13.9231" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default VoucherIcon;
