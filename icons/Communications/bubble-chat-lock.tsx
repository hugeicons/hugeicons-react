import * as React from "react";
import type { SVGProps } from "react";

interface BubbleChatLockIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const BubbleChatLockIcon = (props: BubbleChatLockIconProps) => {
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
        <path d="M12.9999 2.0492C12.671 2.01795 12.3374 2.00195 11.9999 2.00195C6.47766 2.00195 1.99988 6.28552 1.99988 11.5687C1.99988 14.1071 3.03321 16.4135 4.71877 18.1251C5.08988 18.502 5.33766 19.0168 5.23766 19.5468C5.07263 20.4132 4.69862 21.2214 4.15099 21.895C5.59183 22.163 7.09002 21.9217 8.37487 21.2384C8.82906 20.9969 9.05615 20.8761 9.21641 20.8516C9.37666 20.8271 9.60621 20.8702 10.0653 20.9565C10.7031 21.0762 11.3506 21.1363 11.9999 21.1354C16.8299 21.1354 21.0652 17.8585 21.9999 13.502" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11.9954 12.002H12.0044M7.99988 12.002H8.00885" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16.754 5.16996L16.754 3.78081C16.754 3.57562 16.7626 3.36788 16.836 3.17627C17.0314 2.66623 17.549 1.99805 18.4913 1.99805C19.4337 1.99805 19.9716 2.66623 20.167 3.17627C20.2404 3.36788 20.249 3.57562 20.249 3.78081L20.249 5.16996M16.8233 10.9878H20.2C21.1941 10.9878 22 10.1819 22 9.18779V7.18818C22 6.19407 21.1941 5.38818 20.2 5.38818H16.8233C15.8292 5.38818 15.0233 6.19407 15.0233 7.18818V9.18779C15.0233 10.1819 15.8292 10.9878 16.8233 10.9878Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default BubbleChatLockIcon;
