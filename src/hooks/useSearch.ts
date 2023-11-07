import { useState } from "react";
import { courses } from "src/utils/data";

function useSearch(searchData) {
  const [SearchResult, setSearchResult] = useState(searchData);

  const arraySearch = (array, keyword) => {
    const searchTerm = keyword.toLowerCase();
    return array.filter((value) => {
      return (
        value.instructor.toLowerCase().match(new RegExp(searchTerm, "g")) ||
        value.title.toLowerCase().match(new RegExp(searchTerm, "g"))
      );
    });
  };

  const onSearchChange = async (e) => {
    let value = e.target.value;
    if (value.length > 1) {
      let search = await arraySearch(SearchResult, value);
      setSearchResult(search);
    } else {
      setSearchResult(courses);
    }
  };

  return {
    onSearchChange,
    SearchResult,
  };
}

export default useSearch;
