import * as React from "react";
import type { SVGProps } from "react";

interface FolderZipIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const FolderZipIcon = (props: FolderZipIconProps) => {
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
        <path d="M12 7L11.3666 5.73313C10.8418 4.68358 10.3622 3.62712 9.19926 3.19101C8.6899 3 8.10802 3 6.94427 3C5.1278 3 4.21956 3 3.53806 3.38032C3.05227 3.65142 2.65142 4.05227 2.38032 4.53806C2 5.21956 2 6.1278 2 7.94427V11C2 15.714 2 18.0711 3.46447 19.5355C4.92893 21 7.28595 21 12 21H13.25C16.7612 21 18.5167 21 19.7779 20.1573C20.3238 19.7926 20.7926 19.3238 21.1573 18.7779C22 17.5167 22 15.7612 22 12.25C22 10.1433 22 9.08996 21.4944 8.33329C21.2755 8.00572 20.9943 7.72447 20.6667 7.50559C20.1566 7.16474 19.5116 7.05368 18.5 7.01749M12 7H7M12 7C13.4142 7 14.1213 7 14.5607 7.43934C15 7.87868 15 8.58579 15 10V11M15 11V15M15 11H13.5M15 11H16.5M15 15H13.5M15 15H16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default FolderZipIcon;
