export const Input = ({
  ...props
}: React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>) => {
  return (
    <input
      placeholder="add a new task"
      className="rounded-lg border border-gray-700 bg-gray-500 text-gray-100 w-full p-4 h-14"
      {...props}
    />
  );
};
