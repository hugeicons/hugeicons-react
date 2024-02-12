import * as React from "react";
import type { SVGProps } from "react";

interface BitcoinPiggyBankIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const BitcoinPiggyBankIcon = (props: BitcoinPiggyBankIconProps) => {
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
        <path d="M21.5 11.0289C21.8239 11.8027 22 12.6343 22 13.5002C22 15.5588 21.0047 17.4237 19.3933 18.7789C19.1517 18.9821 19 19.2764 19 19.5921V22.0002H17L16.2062 20.8675C16.083 20.6918 15.8616 20.6154 15.6537 20.6689C13.9248 21.1134 12.0752 21.1134 10.3463 20.6689C10.1384 20.6154 9.91703 20.6918 9.79384 20.8675L9 22.0002H7V19.6156C7 19.2868 6.83835 18.979 6.56764 18.7923C5.49285 18.0513 2 16.6016 2 15.0584V13.5002C2 12.9084 2.44771 12.4287 3 12.4287C3.60665 12.4287 4.10188 12.1931 4.30205 11.5662C5.06912 9.16428 7.23085 7.2362 10.0206 6.4209" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14.125 9.5L14.125 3.5M16 3.5V2M16 11V9.5M14.125 6.5H17.875M17.875 6.5C18.4963 6.5 19 7.00368 19 7.625V8.375C19 8.99632 18.4963 9.5 17.875 9.5H13M17.875 6.5C18.4963 6.5 19 5.99632 19 5.375V4.625C19 4.00368 18.4963 3.5 17.875 3.5H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7.49981 12H7.50879" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default BitcoinPiggyBankIcon;
