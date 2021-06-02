import React, { useRef } from "react";
import { connect } from "react-redux";

import {
  getMinPrice,
  getMaxPrice,
  addSpacesAfterThreeCharacters,
} from "../utils";
import { CATALOG } from "../const";
import { ActionCreator } from "../store/action";
import { FUNCTION, NUMBER, FILTER_STATE, SORT_STATE } from "../prop-type";

const FilterPrice = (props) => {
  const {
    onSetMinPrice,
    minPrice,
    maxPrice,
    onSetMaxPrice,
    filterState,
    sortState,
    getProducts,
  } = props;
  const defaultMinPrice = getMinPrice(CATALOG);
  const defaultMaxPrice = getMaxPrice(CATALOG);

  const minPriceRef = useRef();
  const maxPriceRef = useRef();

  React.useEffect(() => {
    getProducts({ filterState, sortState });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterState, sortState]);

  const onInputPrice = (evt, callback) => {
    const price = Number(evt.target.value.split(" ").join(""));
    if (price || evt.target.value === "") {
      callback(price);
    }
    return;
  };

  const onFocusPrice = (evt, callback) => {
    callback(Number(evt.target.value.split(" ").join("")));
  };

  const onChangeMinPrice = () => {
    if (minPrice < defaultMinPrice && minPrice > 0) {
      onSetMinPrice(defaultMinPrice);
    }
    if (minPrice > defaultMaxPrice) {
      onSetMinPrice(defaultMaxPrice);
    }
    if (maxPrice !== "" && minPrice > maxPrice) {
      minPrice > defaultMaxPrice
        ? onSetMaxPrice(defaultMaxPrice)
        : onSetMaxPrice(minPrice);

      onSetMinPrice(maxPrice);
    }

    return;
  };

  const onChangeMaxPrice = () => {
    if (maxPrice > defaultMaxPrice) {
      onSetMaxPrice(defaultMaxPrice);
    }
    if (maxPrice < defaultMinPrice && maxPrice > 0) {
      onSetMaxPrice(defaultMinPrice);
    }
    if (minPrice !== "" && maxPrice < minPrice) {
      maxPrice < defaultMinPrice
        ? onSetMinPrice(defaultMinPrice)
        : onSetMinPrice(maxPrice);
      onSetMaxPrice(minPrice);
    }
    return;
  };

  return (
    <fieldset className="filter__fieldset filter__fieldset--price">
      <h3>Цена, ₽</h3>
      <div className="filter__price-wrapper">
        <input
          type="text"
          className="filter__input-price"
          placeholder={addSpacesAfterThreeCharacters(defaultMinPrice)}
          value={minPrice > 0 ? addSpacesAfterThreeCharacters(minPrice) : ""}
          onFocus={(evt) => {
            onFocusPrice(evt, onSetMinPrice);
          }}
          onInput={(evt) => {
            onInputPrice(evt, onSetMinPrice);
          }}
          onBlur={onChangeMinPrice}
          ref={minPriceRef}
        />
        <input
          type="text"
          className="filter__input-price"
          placeholder={addSpacesAfterThreeCharacters(defaultMaxPrice)}
          value={maxPrice > 0 ? addSpacesAfterThreeCharacters(maxPrice) : ""}
          onFocus={(evt) => {
            onFocusPrice(evt, onSetMaxPrice);
          }}
          onInput={(evt) => {
            onInputPrice(evt, onSetMaxPrice);
          }}
          onBlur={onChangeMaxPrice}
          ref={maxPriceRef}
        />
      </div>
    </fieldset>
  );
};

FilterPrice.propTypes = {
  onSetMinPrice: FUNCTION,
  minPrice: NUMBER,
  maxPrice: NUMBER,
  onSetMaxPrice: FUNCTION,
  filterState: FILTER_STATE,
  sortState: SORT_STATE,
  getProducts: FUNCTION,
};

const mapStateToProps = (state) => ({
  minPrice: state.FILTER_STATE.minPrice,
  maxPrice: state.FILTER_STATE.maxPrice,
  filterState: state.FILTER_STATE,
  sortState: state.SORT_STATE,
});

const mapDispatchToProps = (dispatch) => ({
  onSetMinPrice(value) {
    dispatch(ActionCreator.setMinPrice(value));
  },
  onSetMaxPrice(value) {
    dispatch(ActionCreator.setMaxPrice(value));
  },
  getProducts(value) {
    dispatch(ActionCreator.getProducts(value));
  },
});

export { FilterPrice };
export default connect(mapStateToProps, mapDispatchToProps)(FilterPrice);
