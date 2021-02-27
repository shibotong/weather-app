import React from 'react';


class SearchBar extends React.Component {

    state = { term: '' }

    onInputChange(value) {
        this.setState({ term: value })
        console.log(value)
    }

    onSearchClick(str) {
        const attr = str.split(',')
        console.log(attr)
        if (attr.length === 3) {
            this.props.getNewCityData(attr[0], attr[1], attr[2])
        }
        this.setState({ term: '' })
    }

    render() {
        return (
            <div className="search-container">
                <div className="search-input-div">
                    <input className="search-input" value={this.state.term} type="text" placeholder="City,State,Country" onChange={(e) => {this.onInputChange(e.target.value)}} />
                    <div className="ui inverted divider"></div>
                </div>  
                <button className="search-button" onClick={ () => this.onSearchClick(this.state.term)}><i className="big search icon"></i></button>
            </div>
        )
    }
}

export default SearchBar;