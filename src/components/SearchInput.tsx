export interface SearchProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

function SearchInput(props: SearchProps) {
  const { ...otherProps } = props;
  return (
    <input
      className="h-14 focus:outline-none appearance-none md:w-2/3 w-full text-md leading-6 text-slate-900 placeholder-slate-900 rounded-none py-2 pl-10 ring-1 ring-slate-200 border-2 border-[#00887B] search_input"
      type="text"
      aria-label="Search anything"
      placeholder={`Search a course by title or instructor`}
      {...otherProps}
    />
  );
}

export default SearchInput;
