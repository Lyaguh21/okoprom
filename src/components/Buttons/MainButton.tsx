type LayoutProps = {
  children: React.ReactNode;
};
export default function MainButton({ children }: LayoutProps) {
  return <button className="bg-secondColor">{children}</button>;
}
