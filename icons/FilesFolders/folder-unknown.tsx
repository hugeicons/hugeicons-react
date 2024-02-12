import * as React from "react";
import type { SVGProps } from "react";

interface FolderUnknownIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const FolderUnknownIcon = (props: FolderUnknownIconProps) => {
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
        <path d="M7.00136 6.5H16.754C18.8613 6.5 19.9149 6.5 20.6718 7.00559C20.9995 7.22447 21.2808 7.50572 21.4997 7.83329C21.8937 8.42282 21.9808 9.19244 22 10.5M12.0027 6.5L11.3691 5.23313C10.8442 4.18358 10.3645 3.12712 9.20122 2.69101C8.69172 2.5 8.10969 2.5 6.94562 2.5C5.12865 2.5 4.22017 2.5 3.53848 2.88032C3.05255 3.15142 2.6516 3.55227 2.38042 4.03806C2 4.71956 2 5.6278 2 7.44427V10.5C2 15.214 2 17.5711 3.46487 19.0355C4.92973 20.5 7.2874 20.5 12.0027 20.5H13.5031" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M16 14.478C16 13.3856 16.8954 12.5 18 12.5C19.1046 12.5 20 13.3856 20 14.478C20 14.8718 19.8837 15.2387 19.6831 15.5469C19.0854 16.4656 18 17.3416 18 18.4341V18.9286M18 21.5H18.012" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default FolderUnknownIcon;
