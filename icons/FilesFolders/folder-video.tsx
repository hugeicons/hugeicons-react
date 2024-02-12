import * as React from "react";
import type { SVGProps } from "react";

interface FolderVideoIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const FolderVideoIcon = (props: FolderVideoIconProps) => {
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
        <path d="M7 6.50447H16.75C18.8567 6.50447 19.91 6.50447 20.6667 7.01062C20.9943 7.22974 21.2755 7.51131 21.4944 7.83925C22 8.59676 22 9.89095 22 12M12 6.50447L11.3666 5.23618C10.8418 4.18546 10.3622 3.12782 9.19926 2.69122C8.6899 2.5 8.10802 2.5 6.94427 2.5C5.1278 2.5 4.21956 2.5 3.53806 2.88074C3.05227 3.15215 2.65142 3.55344 2.38032 4.03978C2 4.72204 2 5.63129 2 7.4498V10.5089C2 15.2282 2 17.5879 3.46447 19.054C4.5784 20.1692 6.20875 20.4361 9 20.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M19.5 16.6463L19.563 16.6009C20.6208 15.8371 21.1498 15.4552 21.5749 15.6396C22 15.824 22 16.4353 22 17.6579V18.3421C22 19.5647 22 20.176 21.5749 20.3604C21.1498 20.5448 20.6208 20.1629 19.563 19.3991L19.5 19.3537M15.5 21.5H16C17.6499 21.5 18.4749 21.5 18.9874 21.0515C19.5 20.603 19.5 19.8812 19.5 18.4375V17.5625C19.5 16.1188 19.5 15.397 18.9874 14.9485C18.4749 14.5 17.6499 14.5 16 14.5H15.5C13.8501 14.5 13.0251 14.5 12.5126 14.9485C12 15.397 12 16.1188 12 17.5625V18.4375C12 19.8812 12 20.603 12.5126 21.0515C13.0251 21.5 13.8501 21.5 15.5 21.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default FolderVideoIcon;
