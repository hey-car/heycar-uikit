export const getPagesToRender = (totalPages: number, currentPage: number) => {
  const pages: number[] = [];

  for (let page = 2; page <= totalPages - 1; page += 1) {
    // We start from second page and run until the last but one, since we render then differently
    let numberOfSiblingsToShow = 1;

    if (currentPage === 1 || currentPage === totalPages) {
      numberOfSiblingsToShow = 2;
    }
    if (
      page + numberOfSiblingsToShow >= currentPage &&
      page - numberOfSiblingsToShow <= currentPage
    )
      pages.push(page);
  }

  return pages;
};
