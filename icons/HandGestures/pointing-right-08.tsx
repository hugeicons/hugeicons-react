import * as React from "react";
import type { SVGProps } from "react";

interface PointingRight08IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const PointingRight08Icon = (props: PointingRight08IconProps) => {
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
        <path d="M22 4.5H16M22 4.5C22 3.79977 20.0057 2.49153 19.5 2M22 4.5C22 5.20023 20.0057 6.50847 19.5 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12.985 13.0054L15.9892 13.0054M15.9892 13.0054H19.4954C20.3264 13.0054 21 12.333 21 11.5036C21 10.6742 20.3264 10.0018 19.4954 10.0018L14.031 10.0018M15.9892 13.0054L15.9624 14.0598C15.9443 14.7708 15.556 15.3874 14.9844 15.7277M14.031 10.0018L9.46807 10.0018M14.031 10.0018L11.2712 7.4084C9.40362 5.83594 8.04219 6.66226 7.28577 7.24251L4.84841 8.85739C2.78085 10.0822 2 11.4996 2 12.6918V17.5726C2 19.8386 4.38227 21.9517 6.56579 21.9517L11.7657 21.9997C12.7759 22.0091 13.635 21.2664 13.77 20.2671L13.9593 18.7267M12.9552 16.0089H13.9593C14.3335 16.0089 14.6842 15.9064 14.9844 15.7277M14.9844 15.7277L14.9297 17.0633C14.9021 18.1477 14.0134 19.0125 12.9266 19.0125H11.9226" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default PointingRight08Icon;
