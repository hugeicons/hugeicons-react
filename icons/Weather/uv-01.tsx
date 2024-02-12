import * as React from "react";
import type { SVGProps } from "react";

interface Uv01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Uv01Icon = (props: Uv01IconProps) => {
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
        <path d="M19.04 10.3678C17.9253 9.79352 17.7605 9.3378 18.1322 8.1761C18.3277 7.56506 18.9176 6.39167 18.4748 5.76728C17.8937 4.94813 16.5391 5.639 15.8239 5.86783C14.6296 6.24996 14.1908 6.04427 13.6322 4.96C13.3119 4.3384 12.8804 3 12 3C11.1196 3 10.6881 4.3384 10.3678 4.96C9.80919 6.04427 9.37039 6.24996 8.1761 5.86783C7.46091 5.639 6.10626 4.94813 5.52524 5.76728C5.08236 6.39167 5.67233 7.56506 5.86783 8.1761C6.23953 9.3378 6.07469 9.79352 4.96 10.3678C4.33844 10.688 3.0001 11.1196 3 11.9999C2.9999 12.8803 4.33837 13.3119 4.96 13.6322C6.07469 14.2065 6.23953 14.6622 5.86783 15.8239C5.65453 16.4906 5.01265 17.7433 5.63761 18.3655C6.26038 18.9856 7.5108 18.345 8.1761 18.1322C9.37039 17.75 9.80919 17.9557 10.3678 19.04C10.6881 19.6616 11.1196 21 12 21C12.8804 21 13.3119 19.6616 13.6322 19.04C14.1908 17.9557 14.6296 17.75 15.8239 18.1322C16.4892 18.345 17.7396 18.9856 18.3624 18.3655C18.9874 17.7433 18.3455 16.4906 18.1322 15.8239C17.7605 14.6622 17.9253 14.2065 19.04 13.6322C19.6616 13.3119 21.0001 12.8803 21 11.9999C20.9999 11.1196 19.6616 10.688 19.04 10.3678Z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </>
  );
};

export default Uv01Icon;
