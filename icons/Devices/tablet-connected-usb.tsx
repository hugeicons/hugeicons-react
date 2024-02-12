import * as React from "react";
import type { SVGProps } from "react";

interface TabletConnectedUsbIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const TabletConnectedUsbIcon = (props: TabletConnectedUsbIconProps) => {
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
        <path d="M22 18C21.8011 18.6891 21.4991 19.2323 21.0408 19.682C19.6974 21 17.5354 21 13.2113 21H11.1729C6.84873 21 4.68667 21 3.34333 19.682C2 18.364 2 16.2426 2 12C2 7.75736 2 5.63604 3.34333 4.31802C4.68667 3 6.84873 3 11.1729 3H13.2113C17.5354 3 19.6974 3 21.0408 4.31802C21.4991 4.76771 21.8011 5.31092 22 5.99999" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M6.5 3.5V20.5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M19.6234 12.0023C19.6234 12.6584 20.1554 13.1903 20.8115 13.1903C21.4677 13.1903 21.9996 12.6584 21.9996 12.0023C21.9996 11.3461 21.4677 10.8142 20.8115 10.8142C20.1554 10.8142 19.6234 11.3461 19.6234 12.0023ZM19.6234 12.0023L10.0254 12.0062M12.385 8.52051L13.5067 8.56407C13.9096 8.57972 14.2637 8.83585 14.4047 9.21364L15.4367 12.004M14.194 15.4923L15.3157 15.4487C15.7187 15.4331 16.0728 15.1769 16.2138 14.7991L17.2313 12.0032" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default TabletConnectedUsbIcon;
