import * as React from "react";
import type { SVGProps } from "react";

interface KayakIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const KayakIcon = (props: KayakIconProps) => {
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
        <path d="M20.8208 3.18011C10.9261 1.49903 2.07221 11.6149 3.03361 20.9241C12.3654 21.8831 22.506 13.0507 20.8208 3.18011Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6.95947 16.9956H6.96845" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16.9595 6.99561H16.9685" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.4958 14.4776C8.80348 13.787 8.80348 12.6673 9.4958 11.9767L11.9649 9.51358C12.6572 8.82295 13.7796 8.82295 14.4719 9.51358C15.1643 10.2042 15.1643 11.3239 14.4719 12.0145L12.0028 14.4776C11.3105 15.1683 10.1881 15.1683 9.4958 14.4776Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5.75869 5.68351C5.881 3.29211 5.22287 2.32941 4.6042 2.05759C4.24672 1.90053 3.85777 2.09946 3.54251 2.32954C2.94925 2.7625 2.62326 3.08467 2.23657 3.67953C2.03935 3.98292 1.91342 4.36016 2.06996 4.68629C2.5949 5.77999 4.68545 5.93926 5.75869 5.68351ZM5.75869 5.68351L18.2405 18.3171M18.2405 18.3171C18.1197 20.7086 18.7785 21.6709 19.3973 21.9423C19.7549 22.0992 20.1437 21.9 20.4588 21.6697C21.0518 21.2364 21.3776 20.914 21.7639 20.3189C21.9609 20.0153 22.0866 19.638 21.9299 19.312C21.4042 18.2186 19.3136 18.0607 18.2405 18.3171Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default KayakIcon;
