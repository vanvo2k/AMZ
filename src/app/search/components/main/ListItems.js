import React, { Component } from "react";
import PropTypes from "prop-types";
import ItemTableContainer from "./ItemTableContainer";
import NoItems from "./NoItems";

class ListItems extends Component {
  render() {
    const { items, loading, error } = this.props;
    return !items.size ? (
      <NoItems error={error} loading={loading} />
    ) : (
      this._renderListItems()
    );
  }
  _randomArr = (arr) => {
    let result = [];
    for (let i = 5; i < arr.length; i = i + 5) {
      let index = 0;
      let n = 0;
      const arr2 = arr.slice(i - 5, i);
      while (n < 2) {
        if (index == 0) {
          const randomNumber = Math.round(Math.random() * 4);
          index = randomNumber;
          result.push(i - 5 + randomNumber);
        } else {
          let randomNumber = Math.round(Math.random() * 4);
          while (randomNumber == index) {
            randomNumber = Math.round(Math.random() * 4);
          }
          result.push(i - 5 + randomNumber);
        }
        n += 1;
      }
    }
    return result;
  };
  _renderListItems() {
    const { items, triggerSearch, onUpgradePopup } = this.props;
    let n = 0;
    const x = items.filter((id) => {
      n += 1;
      return !!id;
    });
    const randomArr = this._randomArr(Array(n).fill(null));
    return items
      .filter((id) => {
        return !!id;
      })
      .map((id, index) => {
        return (
          <ItemTableContainer
            key={id}
            index={index}
            id={id}
            randomArr={randomArr}
            triggerSearch={triggerSearch}
            onUpgradePopup={onUpgradePopup}
          />
        );
      });
  }
}

ListItems.propTypes = {
  items: PropTypes.object.isRequired,
  loading: PropTypes.bool,
  error: PropTypes.string,
};

export default ListItems;
