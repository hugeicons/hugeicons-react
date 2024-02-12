import * as React from "react";
import type { SVGProps } from "react";

interface RotateRight03IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const RotateRight03Icon = (props: RotateRight03IconProps) => {
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
        <path d="M16.3756 10.4603L16.8195 11.2254C17.3099 12.0705 17.0189 13.151 16.1696 13.6389M16.1696 13.6389L15.4008 14.0807M16.1696 13.6389C16.5943 13.395 17.1372 13.5398 17.3824 13.9623C17.8727 14.8074 17.5817 15.888 16.7325 16.3759M16.7325 16.3759L15.9636 16.8176M16.7325 16.3759C17.1349 16.1446 17.6498 16.3284 17.8128 16.7614L17.9209 17.0486C18.2254 17.8574 17.8977 18.7667 17.146 19.1986L16.0136 19.8487C14.3426 20.8087 13.507 21.2887 12.6949 21.4176C12.2238 21.4923 11.5068 21.3874 10.9714 21.2818C10.5083 21.1904 10.0228 21.2502 9.61393 21.4851L8.71854 21.9995M14.8378 11.3436L19.8354 8.47247C20.4724 8.10654 20.6906 7.2961 20.3229 6.6623C19.9551 6.0285 19.1407 5.81134 18.5037 6.17727L10.8439 10.5776L11.3743 8.62003C11.6071 7.76111 11.0372 6.89392 10.1529 6.76128C9.4762 6.65979 8.81491 7.02616 8.54513 7.652L6.60766 12.4371C6.23697 13.3526 5.36049 14.2379 4.50146 14.7314" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15.1366 4.96563C14.7397 5.36127 13.0131 5.24713 12.3762 5.16769M15.1366 4.96563C15.5335 4.56999 15.5449 2.63795 15.4652 2.00306M15.1366 4.96563C14.1156 3.1974 10.056 0.376851 6.02763 3.1974C4.08097 4.5604 3.80628 5.41935 3.49844 5.99478" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default RotateRight03Icon;
