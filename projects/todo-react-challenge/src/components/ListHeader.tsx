interface Props {
  created: number;
  concluded: number;
}

export const ListHeader = ({ created, concluded }: Props) => {
  return (
    <header className="flex justify-between mb-6">
      <p className="font-bold text-blue">
        Tasks created
        <span className="ml-2 bg-gray-400 text-gray-200 px-2 rounded-full font-semibold">
          {created}
        </span>
      </p>
      <p className="font-bold text-purple">
        completed
        <span className="ml-2 bg-gray-400 text-gray-200 px-2 rounded-full font-semibold">
          {concluded + " of " + created}
        </span>
      </p>
    </header>
  );
};
