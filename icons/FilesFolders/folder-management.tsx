import * as React from "react";
import type { SVGProps } from "react";

interface FolderManagementIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const FolderManagementIcon = (props: FolderManagementIconProps) => {
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
        <path d="M7 6.5H16.75C18.8567 6.5 19.91 6.5 20.6667 7.00559C20.9943 7.22447 21.2755 7.50572 21.4944 7.83329C21.9361 8.4943 21.9919 9.38172 21.999 11M12 6.5L11.3666 5.23313C10.8418 4.18358 10.3622 3.12712 9.19926 2.69101C8.6899 2.5 8.10802 2.5 6.94427 2.5C5.1278 2.5 4.21956 2.5 3.53806 2.88032C3.05227 3.15142 2.65142 3.55227 2.38032 4.03806C2 4.71956 2 5.6278 2 7.44427V10.5C2 15.214 2 17.5711 3.46447 19.0355C4.7646 20.3357 6.7682 20.4816 10.5 20.4979H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M18 20.2143V21.5M18 20.2143C16.8432 20.2143 15.8241 19.6461 15.2263 18.7833M18 20.2143C19.1568 20.2143 20.1759 19.6461 20.7737 18.7833M18 13.7857C19.1569 13.7857 20.1761 14.354 20.7738 15.2169M18 13.7857C16.8431 13.7857 15.8239 14.354 15.2262 15.2169M18 13.7857V12.5M22 14.4286L20.7738 15.2169M14.0004 19.5714L15.2263 18.7833M14 14.4286L15.2262 15.2169M21.9996 19.5714L20.7737 18.7833M20.7738 15.2169C21.1273 15.7271 21.3333 16.3403 21.3333 17C21.3333 17.6597 21.1272 18.273 20.7737 18.7833M15.2262 15.2169C14.8727 15.7271 14.6667 16.3403 14.6667 17C14.6667 17.6597 14.8728 18.273 15.2263 18.7833" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default FolderManagementIcon;
