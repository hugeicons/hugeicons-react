import * as React from "react";
import type { SVGProps } from "react";

interface FolderOffIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const FolderOffIcon = (props: FolderOffIconProps) => {
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
        <path d="M20 20.0001C19.9275 20.0545 19.8534 20.1069 19.7779 20.1574C18.5167 21.0001 16.7612 21.0001 13.25 21.0001H12C7.28595 21.0001 4.92893 21.0001 3.46447 19.5356C2 18.0711 2 15.7141 2 11.0001V7.94433C2 6.12785 2 5.21962 2.38032 4.53812C2.61398 4.11941 2.94402 3.76381 3.34177 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M11 6.99998H16.75C18.8567 6.99998 19.91 6.99998 20.6667 7.50557C20.9943 7.72445 21.2755 8.0057 21.4944 8.33327C22 9.08994 22 10.1433 22 12.25C22 14.3906 22 15.8787 21.8091 17M12 6.99998L11.3666 5.73311C10.8418 4.68355 10.3622 3.6271 9.19926 3.19099C8.77825 3.03311 8.3077 3.00573 7.5 3.00098H7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M2 2L22 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default FolderOffIcon;
