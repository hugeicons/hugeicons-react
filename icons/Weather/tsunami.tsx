import * as React from "react";
import type { SVGProps } from "react";

interface TsunamiIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const TsunamiIcon = (props: TsunamiIconProps) => {
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
        <path d="M7.06641 12.002C7.06641 12.002 7.06616 15.002 9.99951 16.002" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 21.3752C20.5547 22.1862 18.7056 22.1862 17.2604 21.3752C16.3889 20.8775 15.2412 20.8775 14.3698 21.3752C14.3698 21.3752 14.3486 21.3752 14.3486 21.3936C12.9033 22.2047 11.0542 22.2047 9.63019 21.3936C8.73752 20.8959 7.61105 20.8959 6.73964 21.3936M6.73964 21.3752C5.29436 22.1862 3.44527 22.1862 2 21.3752" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M11 7.00195C11 12.2487 15.2533 16.502 20.5 16.502H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M6.88792 6.92656C7.25992 7.14256 7.97992 7.68256 9.17992 7.46656C10.6199 7.02256 11.8009 6.65115 12.7199 7.20256C13.6199 7.74256 14.2199 8.22256 14.5799 7.98256C14.7578 8.01814 15.0555 7.33634 14.9939 6.36256C14.9517 5.69425 14.7207 4.8884 14.2079 4.08256C13.9079 3.66256 13.7148 3.51528 13.6799 3.48256C11.7361 1.65713 8.59877 1.35756 5.81992 3.48256C2.69992 6.00256 2.27992 9.18256 2.09992 10.7426C1.79992 13.7426 2.27992 17.1626 2.75992 19.0226" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default TsunamiIcon;
