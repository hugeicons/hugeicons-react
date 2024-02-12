import * as React from "react";
import type { SVGProps } from "react";

interface Drag04IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Drag04Icon = (props: Drag04IconProps) => {
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
        <path d="M12.1015 8.41889L12.3128 11.1048L19.0709 4.49666C19.7408 3.84161 20.827 3.84161 21.4968 4.49666C22.1668 5.15171 22.1668 6.21377 21.4968 6.86881L17.8579 10.4271L19.5979 12.7758C20.7341 14.279 21.3023 15.0306 21.491 15.7668C21.8029 16.9827 21.6665 18.2178 20.6452 19.2166C19.9337 19.9122 19.2806 20.207 17.5707 21.0429C16.4858 21.5733 15.9433 21.8386 15.4001 21.9372C14.5058 22.0997 13.5814 21.953 12.7855 21.5223C12.3021 21.2608 11.8733 20.8415 11.0155 20.0027L10.2885 19.2918C9.14814 18.1768 8.57798 17.6193 8.27962 16.9184C8.22612 16.7927 8.1795 16.6643 8.13996 16.5337C7.91949 15.8058 8.00247 15.0215 8.16841 13.453L8.70562 8.37521C8.78817 7.59492 9.41589 6.97646 10.2132 6.88983C11.1716 6.78571 12.0275 7.4788 12.1015 8.41889Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.06854 3.52627C9.06854 4.37022 9.72762 5.05438 10.5406 5.05438C11.3536 5.05438 12.0127 4.37022 12.0127 3.52627C12.0127 2.68232 11.3536 1.99817 10.5406 1.99817C9.72762 1.99817 9.06854 2.68232 9.06854 3.52627ZM9.06854 3.52627H8.41709L7.63742 3.59921M3.50971 9.00622C4.35654 8.99235 5.00125 9.65398 5.01466 10.4732C5.02807 11.2924 4.3979 11.9974 3.55107 12.0112C2.70425 12.0251 2.0141 11.3338 2.00068 10.5146C1.98727 9.69542 2.66289 9.02009 3.50971 9.00622ZM3.50971 9.00622L3.60041 7.66049M5.31559 4.67395L4.98394 4.98378L4.69088 5.29948" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Drag04Icon;
