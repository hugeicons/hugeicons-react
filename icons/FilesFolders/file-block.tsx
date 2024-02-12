import * as React from "react";
import type { SVGProps } from "react";

interface FileBlockIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const FileBlockIcon = (props: FileBlockIconProps) => {
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
        <path d="M8.97487 7.97487C9.60825 7.3415 10 6.4665 10 5.5C10 3.567 8.433 2 6.5 2C5.5335 2 4.6585 2.39175 4.02513 3.02513M8.97487 7.97487C8.3415 8.60825 7.4665 9 6.5 9C4.567 9 3 7.433 3 5.5C3 4.5335 3.39175 3.6585 4.02513 3.02513M8.97487 7.97487L4.02513 3.02513" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12.5 2H13.2727C16.5339 2 18.1645 2 19.2969 2.79784C19.6214 3.02643 19.9094 3.29752 20.1523 3.60289C21 4.66867 21 6.20336 21 9.27273V11.8182C21 14.7814 21 16.2629 20.5311 17.4462C19.7772 19.3486 18.1829 20.8491 16.1616 21.5586C14.9044 22 13.3302 22 10.1818 22C8.38275 22 7.48322 22 6.76478 21.7478C5.60979 21.3424 4.69875 20.4849 4.26796 19.3979C4 18.7217 4 17.8751 4 16.1818V11.8182" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21 12C21 13.8409 19.5076 15.3333 17.6667 15.3333C17.0009 15.3333 16.216 15.2167 15.5686 15.3901C14.9935 15.5442 14.5442 15.9935 14.3901 16.5686C14.2167 17.216 14.3333 18.0009 14.3333 18.6667C14.3333 20.5076 12.8409 22 11 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default FileBlockIcon;
