import React from "react";
import { connect } from "react-redux";

import { GUITARS_DATA, QUANTITY_STRINGS_OPTIONS } from "../const";
import { ActionCreator } from "../store/action";

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
                changeTypesChecked({ [item.type]: !typesChecked[item.type] });
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
const mapStateToProps = (state) => ({
  typesChecked: state.FILTER_STATE.typesChecked,
  quantityStringsChecked: state.FILTER_STATE.quantityStringsChecked,
});
const mapDispatchToProps = (dispatch) => ({
  changeTypesChecked(value) {
    dispatch(ActionCreator.changeTypesChecked(value));
  },
  changeQuantityStringsChecked(value) {
    dispatch(ActionCreator.changeQuantityStringsChecked(value));
  },
});

export { Filters };
export default connect(mapStateToProps, mapDispatchToProps)(Filters);