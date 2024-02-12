import * as React from "react";
import type { SVGProps } from "react";

interface PointingRight06IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const PointingRight06Icon = (props: PointingRight06IconProps) => {
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
        <path d="M21.9995 4.5H15.9995M21.9995 4.5C21.9995 3.79977 20.0052 2.49153 19.4995 2M21.9995 4.5C21.9995 5.20023 20.0052 6.50847 19.4995 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12.9255 13.0054H16.028M16.028 13.0054H20.496C21.3267 13.0054 22.0001 12.333 22.0001 11.5036C22.0001 10.6742 21.3267 10.0018 20.496 10.0018L15.0332 10.0018M16.028 13.0054L16.0012 14.0598C15.9831 14.7708 15.5949 15.3874 15.0235 15.7277M15.0332 10.0018L10.4717 10.0018M15.0332 10.0018L12.2743 7.4084C10.4073 5.83594 9.04627 6.66226 8.29008 7.24251L4.31748 10.1229C3.97623 10.3703 3.56554 10.5036 3.14407 10.5036H2.01131M12.9949 16.0089H13.9987C14.3728 16.0089 14.7234 15.9064 15.0235 15.7277M15.0235 15.7277L14.9688 17.0633C14.9516 17.7375 14.6017 18.3268 14.0783 18.6762M11.9626 19.0125H12.9664C13.3773 19.0125 13.7599 18.8887 14.0783 18.6762M14.0783 18.6762L13.8095 20.2671C13.6745 21.2664 12.8156 22.0091 11.8058 21.9997H8.25759C7.65385 21.9997 7.04743 21.9512 6.47391 21.7625C5.99628 21.6054 5.47047 21.3851 5.12706 21.1152C4.38618 20.5329 4.12365 20.1259 3.48862 20.02C2.98059 19.9353 2.34338 19.9234 1.99951 19.9234" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default PointingRight06Icon;
