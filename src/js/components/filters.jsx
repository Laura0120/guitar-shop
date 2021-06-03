import React from "react";
import { connect } from "react-redux";

import { GUITARS_DATA, QUANTITY_STRINGS_OPTIONS } from "../const";
import { ActionCreator } from "../store/action";

import {
  FUNCTION,
  TYPES_CHECKED,
  QUANTITY_STRINGS_CHECKED,
} from "../prop-type";

import FilterPrice from "./filter-price";

const Filters = (props) => {
  const {
    typesChecked,
    quantityStringsChecked,
    changeTypesChecked,
    changeQuantityStringsChecked,
  } = props;

  return (
    <form className="page-content__filter filter">
      <h2 className="filter__title">Фильтр</h2>
      <FilterPrice />
      <fieldset className="filter__fieldset">
        <h3>Тип гитар</h3>
        {GUITARS_DATA.map((item, i) => (
          <div className="filter__checkbox-wrapper" key={i}>
            <input
              type="checkbox"
              className="visually-hidden filter__checkbox filter__checkbox--type"
              id={item.type}
              checked={typesChecked[item.type]}
              onChange={() => {
                changeTypesChecked(
                  typesChecked,
                  { [item.type]: !typesChecked[item.type] },
                  quantityStringsChecked
                );
              }}
            />
            <label htmlFor={item.type}>{item.nameGroup}</label>
          </div>
        ))}
      </fieldset>
      <fieldset className="filter__fieldset">
        <h3>Количество струн</h3>
        {QUANTITY_STRINGS_OPTIONS.map((item, i) => (
          <div className="filter__checkbox-wrapper" key={i}>
            <input
              type="checkbox"
              className="visually-hidden filter__checkbox filter__checkbox--quantity-strings"
              id={`strings-${item}`}
              checked={quantityStringsChecked[item].checked}
              disabled={!quantityStringsChecked[item].available}
              onChange={() => {
                changeQuantityStringsChecked({
                  [item]: {
                    available: true,
                    checked: !quantityStringsChecked[item].checked,
                  },
                });
              }}
            />
            <label htmlFor={`strings-${item}`}>{item}</label>
          </div>
        ))}
      </fieldset>
    </form>
  );
};

Filters.propTypes = {
  changeTypesChecked: FUNCTION,
  changeQuantityStringsChecked: FUNCTION,
  typesChecked: TYPES_CHECKED,
  quantityStringsChecked: QUANTITY_STRINGS_CHECKED,
};

const mapStateToProps = (state) => ({
  typesChecked: state.FILTER_STATE.typesChecked,
  quantityStringsChecked: state.FILTER_STATE.quantityStringsChecked,
});
const mapDispatchToProps = (dispatch) => ({
  changeTypesChecked(typesChecked, value, quantityStringsChecked) {
    const updatedTypesChecked = { ...typesChecked, ...value };
    const uniqueActiveQuantityStrings = [
      ...new Set(
        GUITARS_DATA.filter((data) => updatedTypesChecked[data.type]).reduce(
          (acc, data) => [...acc, ...data.quantityStrings],
          []
        )
      ),
    ];
    const updatedQuantityStringsChecked = Object.entries(
      quantityStringsChecked
    ).reduce((acc, [key, value]) => {
      const quantityStrings = Number(key);
      if (!uniqueActiveQuantityStrings.includes(quantityStrings)) {
        return {
          ...acc,
          [quantityStrings]: { available: false, checked: false },
        };
      }
      return value.available
        ? { ...acc, [quantityStrings]: value }
        : { ...acc, [quantityStrings]: { available: true, checked: true } };
    }, {});
    dispatch(
      ActionCreator.changeTypesChecked({
        typesChecked: updatedTypesChecked,
        quantityStringsChecked: updatedQuantityStringsChecked,
      })
    );
  },
  changeQuantityStringsChecked(value) {
    dispatch(ActionCreator.changeQuantityStringsChecked(value));
  },
});

export { Filters };
export default connect(mapStateToProps, mapDispatchToProps)(Filters);
