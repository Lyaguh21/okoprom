import { cn } from "../libs/Utils";

type Props = {
  href?: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
};

export default function Text({
  href,
  children,
  className,
  containerClassName,
}: Props) {
  return (
    <div className={cn("flex item-center", containerClassName)}>
      {href ? (
        <a href={href} style={{ textIndent: 3 }} className={className + " w-full my-auto"}>
          {children}
        </a>
      ) : (
        <span
          style={{ textIndent: 3 }}
          className={className + " w-full my-auto"}
        >
          {children}
        </span>
      )}
    </div>
  );
}