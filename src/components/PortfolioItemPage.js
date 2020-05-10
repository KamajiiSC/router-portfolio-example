import React from 'react';

const PortfolioItemPage = (props) => {
  return(
  
    <div>
      <h2>Thing I Made!</h2>
      <p>Item {props.match.params.id}</p>
    </div>
  );
}

export default PortfolioItemPage;