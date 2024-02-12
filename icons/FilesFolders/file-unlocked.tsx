import * as React from "react";
import type { SVGProps } from "react";

interface FileUnlockedIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const FileUnlockedIcon = (props: FileUnlockedIconProps) => {
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
        <path d="M11 22H10.7273C7.46607 22 5.83546 22 4.70307 21.2022C4.37862 20.9736 4.09058 20.7025 3.8477 20.3971C3 19.3313 3 17.7966 3 14.7273V12.1818C3 9.21865 3 7.73706 3.46894 6.55375C4.22281 4.65142 5.81714 3.15088 7.83836 2.44135C9.09563 2 10.6698 2 13.8182 2C15.6173 2 16.5168 2 17.2352 2.2522C18.3902 2.65765 19.3012 3.5151 19.732 4.60214C20 5.27832 20 6.12494 20 7.81818V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 12C3 10.1591 4.49238 8.66667 6.33333 8.66667C6.99912 8.66667 7.78404 8.78333 8.43137 8.60988C9.00652 8.45576 9.45576 8.00652 9.60988 7.43136C9.78333 6.78404 9.66667 5.99912 9.66667 5.33333C9.66667 3.49238 11.1591 2 13 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15.5312 16.36V14.9523C15.5312 13.8741 16.4127 13 17.5 13C17.9887 13 18.4359 13.1766 18.7801 13.469M16.8437 22H18.1563C19.1777 22 19.6884 22 20.0749 21.7951C20.3802 21.6333 20.6302 21.3854 20.7934 21.0827C21 20.6993 21 20.1929 21 19.18C21 18.1671 21 17.6607 20.7934 17.2773C20.6302 16.9746 20.3802 16.7267 20.0749 16.5649C19.6884 16.36 19.1777 16.36 18.1563 16.36H16.8437C15.8223 16.36 15.3116 16.36 14.9251 16.5649C14.6198 16.7267 14.3698 16.9746 14.2066 17.2773C14 17.6607 14 18.1671 14 19.18C14 20.1929 14 20.6993 14.2066 21.0827C14.3698 21.3854 14.6198 21.6333 14.9251 21.7951C15.3116 22 15.8223 22 16.8437 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default FileUnlockedIcon;
