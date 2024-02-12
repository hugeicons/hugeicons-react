import * as React from "react";
import type { SVGProps } from "react";

interface CharacterPhoneticIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const CharacterPhoneticIcon = (props: CharacterPhoneticIconProps) => {
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
        <path d="M21.8256 15.914C21.546 17.6702 20.1615 19.0475 18.3964 19.3257C18.0757 19.3762 17.6925 19.3762 16.9259 19.3762C16.1595 19.3762 15.7763 19.3762 15.4556 19.3257C13.6903 19.0475 12.306 17.6702 12.0264 15.914C11.9756 15.595 11.9756 15.2137 11.9756 14.4511V11.1678M11.9756 11.1678V9.52611C11.9756 8.76355 11.9756 8.38226 12.0264 8.06324C12.306 6.30708 13.6903 4.92975 15.4556 4.65161C15.7763 4.60107 16.1595 4.60107 16.9259 4.60107C17.6925 4.60107 18.0757 4.60107 18.3964 4.65161C20.1615 4.92975 21.546 6.30708 21.8256 8.06324C22.0236 9.30724 22.1226 9.92925 21.734 10.474C21.6808 10.5485 21.603 10.6387 21.5371 10.7024C21.0548 11.1678 20.2831 11.1678 18.7396 11.1678H11.9756Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2.31275 7.01759C2.73674 6.26621 3.90352 4.92483 5.39093 4.66213C6.87834 4.39943 9.43964 4.26817 10.7078 5.8272C11.976 7.38622 11.976 9.04262 11.976 11.1966M11.976 11.1966C11.976 12.4377 11.9409 12.8351 11.8271 13.6534C11.6924 14.6227 11.6174 16.3942 10.4447 17.6687C9.99537 18.157 9.44783 18.5588 8.85947 18.8657C8.12881 19.2469 7.07561 19.5866 5.96573 19.4788C3.87969 19.2761 2.31274 18.0786 2.03291 15.9582C1.85039 14.5752 2.50517 13.1483 3.20313 12.4377C3.90109 11.727 4.76599 11.1179 6.25587 11.1966C7.63844 11.2697 10.6459 11.2135 11.976 11.1966Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default CharacterPhoneticIcon;
