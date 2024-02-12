import * as React from "react";
import type { SVGProps } from "react";

interface FilePasteIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const FilePasteIcon = (props: FilePasteIconProps) => {
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
        <path d="M12.9873 2H13.2604C16.5273 2 18.1607 2 19.2951 2.79784C19.6201 3.02643 19.9086 3.29752 20.152 3.60289C21.0011 4.66867 21.0011 6.20336 21.0011 9.27273V11.8182C21.0011 14.7814 21.0011 16.2629 20.5314 17.4462C19.7762 19.3486 18.1791 20.8491 16.1543 21.5586C14.895 22 13.318 22 10.1642 22C8.36202 22 7.46093 22 6.74125 21.7478C5.58426 21.3424 4.67164 20.4849 4.2401 19.3979C3.97168 18.7217 3.97168 17.8751 3.97168 16.1818V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21.001 12C21.001 13.8409 19.5086 15.3333 17.6677 15.3333C17.0019 15.3333 16.217 15.2167 15.5696 15.3901C14.9945 15.5442 14.5452 15.9935 14.3911 16.5686C14.2177 17.216 14.3343 18.0009 14.3343 18.6667C14.3343 20.5076 12.8419 22 11.001 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10.9716 10.0214C10.9716 7.48221 11.1052 6.29268 9.45922 5.11461C8.65026 4.53561 5.96302 4.32606 3.76535 4.532M5.50256 2L3.14576 4.10989C2.95135 4.30413 2.9499 4.61955 3.1425 4.81559L5.50256 7.04736" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default FilePasteIcon;
