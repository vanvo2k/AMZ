import React, {Component} from "react";
import PropTypes from "prop-types";
import ItemTableContainer from "./ItemTableContainer";
import NoItems from "./NoItems";

class ListItems extends Component {
    render() {
        const {items, loading, error} = this.props;

        return !items.size ? <NoItems error={error} loading={loading}/> : this._renderListItems();
    }

    _renderListItems() {
        const {items, historicalDate} = this.props;

        return items
            .filter(id => {
                return !!id;
            })
            .map((id, index) => {
                return (
                    <ItemTableContainer
                        key={id}
                        index={index}
                        id={id}
                        historicalDate={historicalDate}
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