import * as React from "react";
import type { SVGProps } from "react";

interface FolderCheckIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const FolderCheckIcon = (props: FolderCheckIconProps) => {
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
        <path d="M7 7H16.75C18.8567 7 19.91 7 20.6667 7.50559C20.9943 7.72447 21.2755 8.00572 21.4944 8.33329C21.9796 9.05942 21.9992 10.0588 22 12M12 7L11.3666 5.73313C10.8418 4.68358 10.3622 3.62712 9.19926 3.19101C8.6899 3 8.10802 3 6.94427 3C5.1278 3 4.21956 3 3.53806 3.38032C3.05227 3.65142 2.65142 4.05227 2.38032 4.53806C2 5.21956 2 6.1278 2 7.94427V11C2 15.714 2 18.0711 3.46447 19.5355C4.7646 20.8357 6.7682 20.9816 10.5 20.9979" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M13 19C13 19 14 19 15 21C15 21 18.1765 16 21 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default FolderCheckIcon;
