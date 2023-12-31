import React, { Component } from 'react'
import SearchHistory from './SearchHistory'
import DocTitle from '../../../shared-components/DocTitle'

class SearchHistoryContainer extends Component {
    render() {
        const data = JSON.parse(localStorage.getItem('com.marketify.tamz.profile'))
        const data2 = data.scopes[1] // if(data2 && data2=="trademark")
        return (
            <div>
                {data2 && data2 == 'trademark' ? (
                    <div>
                        <div class="Form_navigate">
                            <h1></h1>
                            <h3>Upgrade today with just $99 for unlimited access</h3>
                            <p>
                                Get unlimited access to all Advanced feature exclusively for PRO
                                package.
                            </p>
                            <a href="https://localhost:3000/pricing?plan=pro">
                                <button>Get PRO</button>
                            </a>
                        </div>
                        <div className="display_web"></div>
                    </div>
                ) : (
                    ''
                )}

                <DocTitle title="Search history">
                    <SearchHistory />
                </DocTitle>
            </div>
        )
    }
}

export default SearchHistoryContainer
