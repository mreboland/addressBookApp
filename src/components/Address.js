import React from 'react';

// Below was copy and pasted from notes (Relationships between models in Mongoose lesson)
const Address = ({ address }) => {
  if (address?.address) {
    return (
      <div>
        <div>{address.address}</div>
        <div>
          {address.city}, {address.province}, {address.country}
        </div>
        <div>{address.postalCode}</div>
      </div>
    );
  } else {
    return <div>(no address)</div>;
  }
};

export default Address;