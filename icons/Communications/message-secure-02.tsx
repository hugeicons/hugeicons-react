import * as React from "react";
import type { SVGProps } from "react";

interface MessageSecure02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const MessageSecure02Icon = (props: MessageSecure02IconProps) => {
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
        <path d="M21.9987 11.9922C22.0044 12.4917 21.9915 12.9931 21.9598 13.4842C21.6856 17.7299 18.3536 21.1118 14.1706 21.3901C12.7435 21.485 11.2536 21.4848 9.8294 21.3901C9.33896 21.3574 8.8044 21.2403 8.34401 21.0505C7.83177 20.8394 7.5756 20.7338 7.44544 20.7498C7.31527 20.7659 7.1264 20.9052 6.74868 21.184C6.08268 21.6755 5.24367 22.0285 3.99943 21.9982C3.37026 21.9829 3.05568 21.9752 2.91484 21.7349C2.77401 21.4946 2.94941 21.1619 3.30021 20.4966C3.78674 19.5739 4.09501 18.5176 3.62791 17.6712C2.82343 16.4623 2.1401 15.0305 2.04024 13.4842C1.98659 12.6533 1.98659 11.7929 2.04024 10.9621C2.31441 6.71638 5.64639 3.33448 9.8294 3.05621C10.2156 3.03051 10.6067 3.01177 11 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17.9992 2C16.7328 2 15.9117 2.8076 14.9405 3.10196C14.5456 3.22165 14.3482 3.2815 14.2683 3.36586C14.1884 3.45022 14.165 3.5735 14.1182 3.82005C13.6174 6.4584 14.712 8.89759 17.3222 9.84699C17.6027 9.949 17.7429 10 18.0006 10C18.2583 10 18.3986 9.94899 18.679 9.84698C21.2891 8.89758 22.3826 6.45839 21.8817 3.82005C21.8349 3.57346 21.8114 3.45016 21.7315 3.36579C21.6516 3.28143 21.4542 3.22162 21.0593 3.10199C20.0878 2.80766 19.2657 2 17.9992 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11.9953 12.5H12.0042M15.9908 12.5H15.9998M7.99976 12.5H8.00873" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default MessageSecure02Icon;
