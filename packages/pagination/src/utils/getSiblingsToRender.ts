export const getSiblingsToRender = (
  pagesTotal: number,
  currentPage: number,
) => {
  const pages: number[] = [];

  for (let page = 2; page <= pagesTotal - 1; page += 1) {
    // We start from second page and run until the last but one, since we render them differently
    let numberOfSiblingsToShow = 1;

    if ([1, pagesTotal].includes(currentPage)) {
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
