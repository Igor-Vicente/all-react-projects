type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const Button = ({ children, ...props }: Props) => {
  return (
    <button
      className="bg-blueDark flex items-center text-gray-100 gap-2 p-4 rounded-lg placeholder:text-gray-300"
      {...props}
    >
      {children}
    </button>
  );
};
