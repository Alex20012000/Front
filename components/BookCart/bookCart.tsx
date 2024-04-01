

export interface BookCartProps {
    item: Item,
    minus: (item: Item) => (void);
    plus: (item: Item) => (void);
    quantity:number
}
export default function BookCart({
    item,
    minus,
    plus,
    quantity
}: BookCartProps) {
 

    const authorsString = () => {
        let authorsStr = "";
        for (let i = 0; i < item.authors.length; i++) {
            if (authorsStr !== "") { authorsStr = authorsStr + ` ,`; }

            authorsStr = authorsStr + `${item.authors[i].name}`;
        }

        return authorsStr;
    }    

  
return (
    <>
        <tr className="cursor">
            <td className="cart-table-td">{item.name}, autors: {authorsString()}</td>
            <td className="cart-table-td center">{item.price}</td>
            <td className="cart-table-td center">{item.curency.name}</td>
            <td className="cart-table-td center">{quantity}</td>
            <td className="cart-table-td buttons">
                <button className="cart-plus-btn" onClick={(e) => plus(item)}>+</button>
                <button className="cart-minus-btn" onClick={(e) => minus(item)}>-</button>
            </td>
        </tr>

    </>
);
}