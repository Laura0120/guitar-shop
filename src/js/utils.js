export const disablePageScrolling = () => {
  document.body.classList.add("no-scrolling");
};

export const enablePageScrolling = () => {
  document.body.classList.remove("no-scrolling");
};

export const onOpenPopup = () => {
  // disablePageScrolling();
  document.addEventListener("click", onOverlayClick);
  window.addEventListener("keydown", onEcsDown);
};

export const onClosePopup = () => {
  enablePageScrolling();
  document.removeEventListener("click", onOverlayClick);
  document.removeEventListener("keydown", onEcsDown);
};

const onOverlayClick = (evt) => {
  if (
    !evt.target.closest(".popup") &&
    !evt.target.closest(".popup__button-close")
  ) {
    onClosePopup();
  }
};

const onEcsDown = (evt) => {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    onClosePopup();
  }
};

export const addSpacesAfterThreeCharacters = (num) => {
  return num.toString().replace(/(\d)(?=(\d{3})+(\D|$))/g, "$1 ");
};

export const convertPercentToString = (num) => {
  return num ? `${num.toFixed(2).toString().replace(".", ",")}%` : "";
};

export const deleteLine = (value, strings) => {
  let startLine = -1;
  for (let i = 0; i < strings.length; i++) {
    if (value.indexOf(strings[i]) !== -1) {
      startLine = value.indexOf(strings[i]);
    }
  }
  return startLine !== -1
    ? value.substring(0, startLine).split(" ").join("")
    : value.split(" ").join("");
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
