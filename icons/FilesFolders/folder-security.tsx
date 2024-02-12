import * as React from "react";
import type { SVGProps } from "react";

interface FolderSecurityIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const FolderSecurityIcon = (props: FolderSecurityIconProps) => {
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
        <path d="M7 6.5H16.75C18.8567 6.5 19.91 6.5 20.6667 7.00559C20.9943 7.22447 21.2755 7.50572 21.4944 7.83329C21.9108 8.4565 21.984 9.11137 21.9969 10.5M12 6.5L11.3666 5.23313C10.8418 4.18358 10.3622 3.12712 9.19926 2.69101C8.6899 2.5 8.10802 2.5 6.94427 2.5C5.1278 2.5 4.21956 2.5 3.53806 2.88032C3.05227 3.15142 2.65142 3.55227 2.38032 4.03806C2 4.71956 2 5.6278 2 7.44427V10.5C2 15.214 2 17.5711 3.46447 19.0355C4.8215 20.3926 6.94493 20.4921 11 20.4994" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M17.4991 12.5C16.0744 12.5 15.1506 13.4085 14.0581 13.7397C13.6138 13.8744 13.3917 13.9417 13.3018 14.0366C13.2119 14.1315 13.1856 14.2702 13.133 14.5476C12.5696 17.5157 13.801 20.2598 16.7375 21.3279C17.053 21.4426 17.2108 21.5 17.5007 21.5C17.7906 21.5 17.9484 21.4426 18.2639 21.3279C21.2002 20.2598 22.4304 17.5157 21.8669 14.5476C21.8142 14.2701 21.7879 14.1314 21.698 14.0365C21.6081 13.9416 21.386 13.8743 20.9418 13.7397C19.8488 13.4086 18.9239 12.5 17.4991 12.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default FolderSecurityIcon;
