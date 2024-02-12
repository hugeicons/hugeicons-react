import * as React from "react";
import type { SVGProps } from "react";

interface FolderLinksIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const FolderLinksIcon = (props: FolderLinksIconProps) => {
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
        <path d="M7 6.5H16.75C18.8567 6.5 19.91 6.5 20.6667 7.00559C20.9943 7.22447 21.2755 7.50572 21.4944 7.83329C22 8.58996 22 9.64331 22 11.75C22 12.0369 22.0005 12.0137 22 12.5M12 6.5L11.3666 5.23313C10.8418 4.18358 10.3622 3.12712 9.19926 2.69101C8.6899 2.5 8.10802 2.5 6.94427 2.5C5.1278 2.5 4.21956 2.5 3.53806 2.88032C3.05227 3.15142 2.65142 3.55227 2.38032 4.03806C2 4.71956 2 5.6278 2 7.44427V10.5C2 15.214 2 17.5711 3.46447 19.0355C4.8215 20.3926 6.94493 20.4921 11 20.4994" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M17.7057 20.9414C18.4593 21.6862 19.6812 21.6862 20.4348 20.9414C21.1884 20.1966 21.1884 18.9891 20.4348 18.2443L18.7291 16.5586C18.0629 15.9002 17.0309 15.8238 16.2799 16.3294M16.2943 14.0586C15.5407 13.3138 14.3188 13.3138 13.5652 14.0586C12.8116 14.8034 12.8116 16.0109 13.5652 16.7557L15.2709 18.4414C15.9493 19.1119 17.0072 19.1788 17.7613 18.6421" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default FolderLinksIcon;
