interface GroupProps {
  className: string;
  children: string;
}

const Group: React.FC<GroupProps> = ({ className, children }) => {
  const defaultClass = "flex";
  return <div className={defaultClass}>{children}</div>;
};
