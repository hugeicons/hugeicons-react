import * as React from "react";
import type { SVGProps } from "react";

interface BitcoinSettingIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const BitcoinSettingIcon = (props: BitcoinSettingIconProps) => {
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
        <path d="M10.125 15L10.125 9M12 9V7.5M12 16.5V15M10.125 12H13.875M13.875 12C14.4963 12 15 12.5037 15 13.125V13.875C15 14.4963 14.4963 15 13.875 15H9M13.875 12C14.4963 12 15 11.4963 15 10.875V10.125C15 9.50368 14.4963 9 13.875 9H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21.011 14.0964C21.5329 13.9556 21.7939 13.8852 21.8969 13.7506C22 13.6161 22 13.3996 22 12.9667V11.0331C22 10.6001 22 10.3836 21.8969 10.2491C21.7938 10.1145 21.5329 10.0442 21.011 9.9034C19.0606 9.37741 17.8399 7.33834 18.3433 5.40069C18.4817 4.86781 18.5509 4.60138 18.4848 4.44511C18.4187 4.28884 18.2291 4.18116 17.8497 3.96578L16.125 2.98655C15.7528 2.77521 15.5667 2.66954 15.3997 2.69204C15.2326 2.71454 15.0442 2.90255 14.6672 3.27855C13.208 4.7343 10.7936 4.73424 9.33434 3.27846C8.95743 2.90245 8.76898 2.71445 8.60193 2.69194C8.43489 2.66944 8.24877 2.77511 7.87653 2.98645L6.15184 3.96569C5.77253 4.18105 5.58287 4.28873 5.51678 4.44497C5.45068 4.60122 5.51987 4.86769 5.65825 5.40062C6.16137 7.33832 4.93972 9.37745 2.98902 9.90342C2.46712 10.0441 2.20617 10.1145 2.10308 10.2491C2 10.3836 2 10.6001 2 11.0331V12.9667C2 13.3996 2 13.6161 2.10308 13.7507C2.20615 13.8852 2.46711 13.9556 2.98902 14.0963C4.9394 14.6223 6.16008 16.6614 5.65672 18.599C5.51829 19.1319 5.44907 19.3984 5.51516 19.5546C5.58126 19.7109 5.77092 19.8186 6.15025 20.034L7.87495 21.0132C8.24721 21.2245 8.43334 21.3302 8.6004 21.3077C8.76746 21.2852 8.95588 21.0972 9.33271 20.7211C10.7927 19.2642 13.2088 19.2641 14.6689 20.721C15.0457 21.0971 15.2341 21.2851 15.4012 21.3076C15.5682 21.3301 15.7544 21.2244 16.1266 21.0131L17.8513 20.0339C18.2307 19.8185 18.4204 19.7108 18.4864 19.5545C18.5525 19.3982 18.4833 19.1318 18.3448 18.599C17.8412 16.6614 19.0609 14.6224 21.011 14.0964Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default BitcoinSettingIcon;
