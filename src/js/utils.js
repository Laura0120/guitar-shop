export const disablePageScrolling = () => {
  document.body.classList.add("no-scrolling");
};

export const enablePageScrolling = () => {
  document.body.classList.remove("no-scrolling");
};

export const addSpacesAfterThreeCharacters = (num) => {
  return num.toString().replace(/(\d)(?=(\d{3})+(\D|$))/g, "$1 ");
};

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const getMinPrice = (assortments) => {
  let minPrice = assortments[0].price;
  for (let i = 0; i < assortments.length; i++) {
    if (assortments[i].price < minPrice) {
      minPrice = assortments[i].price;
    }
  }
  return minPrice;
};
export const getMaxPrice = (assortments) => {
  let [{ price: maxPrice }] = assortments;

  for (const assortment of assortments) {
    if (assortment.price > maxPrice) {
      maxPrice = assortment.price;
    }
  }

  return maxPrice;
};
