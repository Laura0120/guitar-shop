import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { ActionCreator } from "../store/action";
import { FUNCTION, STRING } from "../prop-type";

const BreadCrumbs = (props) => {
  const { breadCrumbsList, onPageClick } = props;
  return (
    <ul className="page-content__bread-crumbs bread-crumbs">
      <li className="bread-crumbs__item">
        <a
          href="#main"
          className="bread-crumbs__link"
          onClick={(evt) => {
            evt.preventDefault();
          }}
        >
          Главная
        </a>
      </li>
      {breadCrumbsList.map((item, i) => (
        <li key={i} className="bread-crumbs__item">
          <a
            href="#catalog"
            className="bread-crumbs__link"
            onClick={(evt) => {
              evt.preventDefault();
              onPageClick(item.url);
            }}
          >
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

BreadCrumbs.propTypes = {
  breadCrumbsList: PropTypes.arrayOf(
    PropTypes.shape({ url: STRING, name: STRING })
  ).isRequired,
  onPageClick: FUNCTION,
};

const mapDispatchToProps = (dispatch) => ({
  onPageClick(url) {
    dispatch(ActionCreator.redirectToRoute(url));
  },
});

export { BreadCrumbs };
export default connect(null, mapDispatchToProps)(BreadCrumbs);
