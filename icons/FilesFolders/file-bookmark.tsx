import * as React from "react";
import type { SVGProps } from "react";

interface FileBookmarkIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const FileBookmarkIcon = (props: FileBookmarkIconProps) => {
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
        <path d="M3 5.74755C3 3.98094 3 3.09763 3.51256 2.54882C4.02513 2 4.85008 2 6.5 2C8.14992 2 8.97487 2 9.48744 2.54882C10 3.09763 10 3.98094 10 5.74755V7.54157C10 8.8676 10 9.53062 9.66489 9.81195C9.57217 9.88979 9.46572 9.94678 9.35193 9.9795C8.94067 10.0977 8.44529 9.69994 7.45455 8.90432C7.04241 8.57336 6.83635 8.40788 6.60214 8.3784C6.53428 8.36986 6.46572 8.36986 6.39786 8.3784C6.16365 8.40788 5.95759 8.57336 5.54545 8.90432C4.55471 9.69994 4.05933 10.0977 3.64807 9.9795C3.53428 9.94678 3.42783 9.88979 3.33511 9.81195C3 9.53062 3 8.8676 3 7.54157V5.74755Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13 2H13.2727C16.5339 2 18.1645 2 19.2969 2.79784C19.6214 3.02643 19.9094 3.29752 20.1523 3.60289C21 4.66867 21 6.20336 21 9.27273V11.8182C21 14.7814 21 16.2629 20.5311 17.4462C19.7772 19.3486 18.1829 20.8491 16.1616 21.5586C14.9044 22 13.3302 22 10.1818 22C8.38275 22 7.48322 22 6.76478 21.7478C5.60979 21.3424 4.69875 20.4849 4.26796 19.3979C4 18.7217 4 17.8751 4 16.1818V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21 12C21 13.8409 19.5076 15.3333 17.6667 15.3333C17.0009 15.3333 16.216 15.2167 15.5686 15.3901C14.9935 15.5442 14.5442 15.9935 14.3901 16.5686C14.2167 17.216 14.3333 18.0009 14.3333 18.6667C14.3333 20.5076 12.8409 22 11 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default FileBookmarkIcon;
