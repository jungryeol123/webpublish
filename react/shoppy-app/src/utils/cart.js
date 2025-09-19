
export function cartItemsCheck (prevItems,cartItem) {
    const existItem = prevItems.find((item) => item.pid === cartItem.pid && item.size === cartItem.size);
      if(existItem) {
        return prevItems.map((item) =>
          item.pid === cartItem.pid && item.size === cartItem.size
          ? {...item,qty : item.qty +1 }
          :item
        );
      } else {
        return [...prevItems, {...cartItem}];
      }
}