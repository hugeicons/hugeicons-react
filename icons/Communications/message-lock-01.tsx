import * as React from "react";
import type { SVGProps } from "react";

interface MessageLock01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const MessageLock01Icon = (props: MessageLock01IconProps) => {
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
        <path d="M22 13.4909C21.7253 17.7332 18.3866 21.1125 14.1951 21.3905C12.7652 21.4854 11.2722 21.4852 9.84518 21.3905C9.35376 21.3579 8.81812 21.2409 8.3568 21.0513C7.84352 20.8403 7.58684 20.7348 7.45641 20.7508C7.32598 20.7668 7.13674 20.9061 6.75825 21.1846C6.09091 21.6757 5.25021 22.0285 4.00346 21.9982C3.37302 21.9829 3.0578 21.9752 2.91669 21.7351C2.77557 21.495 2.95132 21.1626 3.30283 20.4978C3.79035 19.5758 4.09923 18.5203 3.63119 17.6746C2.82509 16.4666 2.14038 15.036 2.04032 13.4909C1.98656 12.6607 1.98656 11.8009 2.04032 10.9707C2.31504 6.72838 5.65374 3.34913 9.84518 3.07107C10.7223 3.01289 11.6242 2.99039 12.5212 3.00372" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8.5 15H15.5M8.5 10H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16.7374 5.17565L16.7374 3.78529C16.7374 3.57992 16.746 3.372 16.8196 3.18022C17.0155 2.66974 17.5346 2.00098 18.4795 2.00098C19.4245 2.00098 19.9639 2.66974 20.1598 3.18022C20.2335 3.372 20.242 3.57992 20.242 3.78529L20.242 5.17565M16.8069 10.9985H20.1929C21.1898 10.9985 21.9979 10.192 21.9979 9.19698V7.19563C21.9979 6.20065 21.1898 5.39406 20.1929 5.39406H16.8069C15.8101 5.39406 15.002 6.20065 15.002 7.19563V9.19698C15.002 10.192 15.8101 10.9985 16.8069 10.9985Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default MessageLock01Icon;
