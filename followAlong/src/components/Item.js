import React, { useState } from 'react';

const Item = props => {
  // const [item, setItem] = useState({
  //   name: 'Bananas',
  //   id: 123,
  //   purchased: false
  // })

  const handleClick = () => {
    console.log(props.item.id);
    props.handlePurchased(props.item.id);
    // setItem({
    //   ...item,
    //   purchased: !props.item.purchased
    // });
  }

  return (
    <div onClick={handleClick} className={`item${props.item.purchased ? ' purchased' : ''}`}>
      <p>{props.item.name}</p>
    </div>
  );
};

export default Item;