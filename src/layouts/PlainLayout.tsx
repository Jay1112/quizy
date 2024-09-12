import { ReactNode } from "react";

interface PlainLayoutProps {
  children?: ReactNode
  className? : string
}

function PlainLayout({ children, className }: PlainLayoutProps) {
  return (
    <div className={`w-screen h-screen flex items-center justify-center overflow-x-hidden overflow-y-auto ${className}`}>
      {children}
    </div>
  );
}

export default PlainLayout;
