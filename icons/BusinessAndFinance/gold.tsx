import * as React from "react";
import type { SVGProps } from "react";

interface GoldIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const GoldIcon = (props: GoldIconProps) => {
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
        <path d="M14.2645 18.3717C14.5807 17.407 14.7388 16.9247 15.0617 16.593C15.2151 16.4354 15.3932 16.3048 15.5888 16.2066C16.0004 16 16.5003 16 17.5002 16C18.5002 16 19.0001 16 19.4117 16.2066C19.6073 16.3048 19.7854 16.4354 19.9388 16.593C20.2617 16.9247 20.4198 17.407 20.736 18.3717L21.0625 19.3675C21.4562 20.5688 21.6531 21.1694 21.3587 21.5847C21.0644 22 20.4418 22 19.1967 22H15.8038C14.5587 22 13.9361 22 13.6417 21.5847C13.3474 21.1694 13.5443 20.5688 13.938 19.3675L14.2645 18.3717Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8.76421 10.3717C9.08041 9.40705 9.23851 8.92471 9.56143 8.59298C9.71485 8.43537 9.89299 8.3048 10.0885 8.20663C10.5001 8 11.0001 8 12 8C12.9999 8 13.4999 8 13.9115 8.20663C14.107 8.3048 14.2851 8.43537 14.4386 8.59298C14.7615 8.92471 14.9196 9.40705 15.2358 10.3717L15.5622 11.3675C15.956 12.5688 16.1528 13.1694 15.8585 13.5847C15.5642 14 14.9416 14 13.6964 14H10.3036C9.05842 14 8.43585 14 8.1415 13.5847C7.84716 13.1694 8.04404 12.5688 8.43779 11.3675L8.76421 10.3717Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M3.26445 18.3717C3.58065 17.407 3.73876 16.9247 4.06168 16.593C4.2151 16.4354 4.39323 16.3048 4.58878 16.2066C5.00037 16 5.50033 16 6.50024 16C7.50016 16 8.00012 16 8.41171 16.2066C8.60726 16.3048 8.78539 16.4354 8.93881 16.593C9.26173 16.9247 9.41983 17.407 9.73604 18.3717L10.0625 19.3675C10.4562 20.5688 10.6531 21.1694 10.3587 21.5847C10.0644 22 9.44182 22 8.19667 22H4.80382C3.55866 22 2.93609 22 2.64175 21.5847C2.34741 21.1694 2.54428 20.5688 2.93803 19.3675L3.26445 18.3717Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 2V4M7.5 3.5L9 5M16.5 3.5L15 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default GoldIcon;
