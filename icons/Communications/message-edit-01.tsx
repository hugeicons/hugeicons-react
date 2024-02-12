import * as React from "react";
import type { SVGProps } from "react";

interface MessageEdit01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const MessageEdit01Icon = (props: MessageEdit01IconProps) => {
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
        <path d="M21.9165 10.5C21.9351 10.6556 21.9495 10.8126 21.9598 10.9707C22.0134 11.8009 22.0134 12.6607 21.9598 13.4909C21.6856 17.7332 18.3536 21.1125 14.1706 21.3905C12.7435 21.4854 11.2536 21.4852 9.8294 21.3905C9.33896 21.3579 8.8044 21.2409 8.34401 21.0513C7.83177 20.8403 7.5756 20.7348 7.44544 20.7508C7.31527 20.7668 7.1264 20.9061 6.74868 21.1846C6.08268 21.6757 5.24367 22.0285 3.99943 21.9982C3.37026 21.9829 3.05568 21.9752 2.91484 21.7351C2.77401 21.495 2.94941 21.1626 3.30021 20.4978C3.78674 19.5758 4.09501 18.5203 3.62791 17.6746C2.82343 16.4666 2.1401 15.036 2.04024 13.4909C1.98659 12.6607 1.98659 11.8009 2.04024 10.9707C2.31441 6.72838 5.64639 3.34913 9.8294 3.07107C11.0318 2.99114 12.2812 2.97856 13.5 3.03368" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8.5 15H15.5M8.5 10H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20.8684 2.43934L21.5607 3.13171C22.1465 3.71749 22.1465 4.66724 21.5607 5.25302L17.9333 8.94869C17.648 9.23404 17.283 9.4264 16.8863 9.50048L14.6381 9.98853C14.2832 10.0656 13.9671 9.75042 14.0431 9.39525L14.5217 7.15992C14.5958 6.76324 14.7881 6.39824 15.0735 6.11289L18.747 2.43934C19.3328 1.85355 20.2826 1.85355 20.8684 2.43934Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default MessageEdit01Icon;
