import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setContinent, deleteCountry } from '../actions/actions-countries.js';
import CountryFlagList from '../presentational/flag-list.component.js';

class ContinentsContainer extends Component {

    chooseContinent(event){
          this.props.dispatch(setContinent(event.target.value));
    }

    deleteCountry(id) {
          this.props.dispatch(deleteCountry(id));
    }

    componentDidMount() {
          this.props.dispatch(setContinent('Europe'));
    }

    render() {
          return(
            <div>
                <select className="select-button" onChange={event => this.chooseContinent(event)}>
                    <option value="Europe">Europe</option>
                    <option value="Africa">Africa</option>
                </select>
                <CountryFlagList countries={this.props.visibleCountries} deleteCountry={this.deleteCountry.bind(this)} />
            </div>
          )
    }
}

const mapStateToProps = function(store) {
      return {
        visibleCountries: store.countriesReducer.visibleCountries
      };
};

export default connect(mapStateToProps)(ContinentsContainer)