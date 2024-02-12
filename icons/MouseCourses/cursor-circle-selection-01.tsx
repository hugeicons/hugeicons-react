import * as React from "react";
import type { SVGProps } from "react";

interface CursorCircleSelection01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const CursorCircleSelection01Icon = (props: CursorCircleSelection01IconProps) => {
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
        <path d="M13.7813 20.9656C11.9693 21.0908 10.1739 12.64 11.4067 11.407C12.6396 10.174 21.091 11.9681 20.9657 13.7802C20.8795 14.9669 18.8709 15.4363 18.9295 16.491C18.9467 16.7999 19.3369 17.0814 20.1173 17.6445C20.6596 18.0358 21.2126 18.4157 21.7456 18.8195C21.9583 18.9807 22.0423 19.2516 21.9798 19.5071C21.6798 20.7341 20.7394 21.6785 19.5075 21.9798C19.252 22.0423 18.9811 21.9583 18.8199 21.7455C18.4162 21.2124 18.0363 20.6594 17.6451 20.117C17.0821 19.3365 16.8006 18.9463 16.4918 18.9291C15.4372 18.8704 14.9679 20.8793 13.7813 20.9656Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M20 9.08782C19.8838 8.57585 19.7246 8.08026 19.5262 7.60506M9.08782 20C8.58014 19.8848 8.08856 19.7272 7.617 19.5312M17.9255 5.06016C17.2422 4.29165 16.4308 3.63953 15.5249 3.1373M12.63 2.12571C12.1366 2.04303 11.6298 2 11.1129 2C10.4955 2 9.89245 2.0614 9.30951 2.17842M6.05076 3.53418C5.05297 4.20196 4.19441 5.06157 3.52784 6.06023M2.17549 9.32416C2.06037 9.90256 2 10.5007 2 11.1129C2 11.6388 2.04455 12.1543 2.13008 12.6558M3.13674 15.5238C3.63157 16.4167 4.27196 17.2177 5.02587 17.8948" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default CursorCircleSelection01Icon;
