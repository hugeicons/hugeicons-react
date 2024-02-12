import * as React from "react";
import type { SVGProps } from "react";

interface MailUnlock02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const MailUnlock02Icon = (props: MailUnlock02IconProps) => {
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
        <path d="M7 7.5L9.94202 9.23943C11.6572 10.2535 12.3428 10.2535 14.058 9.23943L17 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 19.5C11.0345 19.5 10.0691 19.4878 9.09883 19.4634C5.95033 19.3843 4.37608 19.3448 3.24496 18.2094C2.11383 17.0739 2.08114 15.5412 2.01577 12.4756C1.99475 11.4899 1.99474 10.5101 2.01576 9.52438C2.08114 6.45885 2.11382 4.92608 3.24495 3.79065C4.37608 2.65521 5.95033 2.61566 9.09882 2.53656C11.0393 2.48781 12.9607 2.48781 14.9012 2.53657C18.0497 2.61568 19.6239 2.65523 20.7551 3.79066C21.8862 4.92609 21.9189 6.45886 21.9842 9.52439C21.9947 10.0172 22 10.0086 22 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16.5312 15.86V14.4523C16.5312 13.3741 17.4127 12.5 18.5 12.5C18.9887 12.5 19.4359 12.6766 19.7801 12.969M17.8438 21.5H19.1562C20.1777 21.5 20.6884 21.5 21.0749 21.2951C21.3802 21.1333 21.6302 20.8854 21.7934 20.5827C22 20.1993 22 19.6929 22 18.68C22 17.6671 22 17.1607 21.7934 16.7773C21.6302 16.4746 21.3802 16.2267 21.0749 16.0649C20.6884 15.86 20.1777 15.86 19.1562 15.86H17.8438C16.8223 15.86 16.3116 15.86 15.9251 16.0649C15.6198 16.2267 15.3698 16.4746 15.2066 16.7773C15 17.1607 15 17.6671 15 18.68C15 19.6929 15 20.1993 15.2066 20.5827C15.3698 20.8854 15.6198 21.1333 15.9251 21.2951C16.3116 21.5 16.8223 21.5 17.8438 21.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default MailUnlock02Icon;