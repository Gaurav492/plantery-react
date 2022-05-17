import { useEffect } from "react";

function useTitle(title) {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title + `Plantery - Plant Nursery Solution`;
    return () => {
      document.title = prevTitle;
    };
  });
}

export default useTitle;
