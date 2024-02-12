import * as React from "react";
import type { SVGProps } from "react";

interface JavaIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const JavaIcon = (props: JavaIconProps) => {
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
        <path d="M6.17481 10.3331C4.96738 10.7407 4.22049 11.3039 4.22049 11.926C4.22049 12.7742 5.60897 13.5129 7.6601 13.8968M7.6601 13.8968C6.89833 14.2823 6.44271 14.7714 6.44271 15.3037C6.44271 16.5473 8.93001 17.5554 11.9983 17.5554C12.7884 17.5554 13.54 17.4886 14.2205 17.3681M7.6601 13.8968C8.61629 14.0758 9.71648 14.1778 10.8872 14.1778C12.5946 14.1778 14.1521 13.9609 15.3316 13.6044M16.4427 10.1242C15.031 10.5413 13.0635 10.8001 10.8872 10.8001C6.5916 10.8001 3.10938 9.7919 3.10938 8.54827C3.10938 7.58798 5.18563 6.76809 8.10937 6.44434" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 19.0699C22 20.6882 17.5228 22 12 22C6.47715 22 2 20.6882 2 19.0699C2 17.9195 3.70729 16.9239 7 16.4444" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M18.7591 8.78799C22.9744 7.69436 23.5765 14.2562 17.5547 16.4438" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17.5582 2C16.8173 2.12346 15.4246 2.81481 15.7802 4.59259C16.1358 6.37037 15.6322 7.30864 15.3359 7.55556" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13.1128 2C12.372 2.14815 10.9793 2.97778 11.3349 5.11111C11.6905 7.24444 11.1869 7.81482 10.8906 8.11111" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default JavaIcon;
