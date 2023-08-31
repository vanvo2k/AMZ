import React, {Component} from "react"
import PropTypes from "prop-types"
import {FormattedMessage} from "react-intl"

class TMStatistic extends Component {

componentDidMount(){
    const {userScope,changeTotalTrial}=this.props
    const isUserTrial =
      (userScope.size <=1 || userScope.includes("trial") &&
        !userScope.includes("admin") &&
        !userScope.includes("mod")) ||
      false;
      if(isUserTrial){
        changeTotalTrial()
      }
}
    
componentDidUpdate(){
    const {userScope,changeTotalTrial}=this.props
    const isUserTrial =
      (userScope.size <=1 || userScope.includes("trial") &&
        !userScope.includes("admin") &&
        !userScope.includes("mod")) ||
      false;
      if(isUserTrial){
        changeTotalTrial()
      }
}

    render() {
        const {data} = this.props
        const {total, max} = data.toJS()
        const remain = Math.abs(max - total)
    
        return (
            <div className="TMStatistic ml-auto">
                {total} <FormattedMessage id="tm.count_keywords"/> - {remain} <FormattedMessage id="tm.count_left"/>.
            </div>
        )
    }
}

TMStatistic.propTypes = {
    data: PropTypes.object.isRequired
}

export default TMStatistic
