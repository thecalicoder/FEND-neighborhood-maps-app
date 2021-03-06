import React from 'react';
import './css/NeighborhoodListItem.css';
import PropTypes from 'prop-types';

const NeighborhoodListItem = (props)=> {
    const {venue, onUserInteraction} = props;
    return (
      <li className="neighborhood__list__item" tabIndex="0" id={venue.id} onClick={onUserInteraction} onFocus={onUserInteraction} onMouseEnter={onUserInteraction} key={venue.id}>
        <div className="venue">
          <div className="venue__icon"></div>
          <div className="venue__desc">
          <h2 className="venue__name">{venue.name}</h2>
          <address className="venue__address">
            {venue.location.address}, {venue.location.city}
            {/* https://maps.google.com?saddr=Current+Location&daddr=43.12345,-76.12345 */}

            <a className="venue__directions" href={`https://maps.google.com?saddr=Current+Location&daddr=${venue.location.lat},${venue.location.lng}`} target="_blank">Directions</a>
          </address>
          </div>
        </div>
      </li>
    );
}

NeighborhoodListItem.propType = {
  venue: PropTypes.object.isRequired,
  onUserInteractio: PropTypes.func.isRequired
}

export default NeighborhoodListItem;
