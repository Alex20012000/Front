// import Layout from "@/components/Layout/layout";
// import Link from 'next/link';
import Raiting from '../Raiting/raiting';
import styles from "./bookCatalog.module.css";
import Image from 'next/image';
import book from "../../public/book.png";
import Link from 'next/link';
import { getStringCategories, getNameArray } from '@/utils'
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from "@/pages/_app";
import { setCart,  setQuantity } from '@/pages/store/slices';
export interface BookCatalogProps {
    item: Item,
}
// import styles from './styles/register.css";
export default function BookCatalog({
    item,
}: BookCatalogProps) {

    // const { push } = useRouter();
    const dispatch = useAppDispatch();

    const cart = useSelector((state: RootState) => {
        return state.cartSlice.cart;
    })
    
    const quantity = useSelector((state: RootState) => {
        return state.cartSlice.quantity;
    })
   

    let autors = (!item?.authors) ? "" : getNameArray(item.authors).join(', ');

    let categories = (!item?.categories) ? "" : getStringCategories(item.categories).join(', ');

    // добавление в корзину
    const buy = (e: React.MouseEvent<HTMLElement>) => {
        let newcart = [...cart];
        let index = newcart.findIndex(elem => { return elem.item.id === item.id });
      
        if (index === (-1))
            newcart.push({ item: item, quantity: 1 })
        else
            newcart.splice(index, 1, { item: newcart[index].item, quantity: newcart[index].quantity + 1 })

        dispatch(setCart(newcart))
        dispatch(setQuantity(quantity + 1))
    };

    return (
        <>
            <div className={styles.catalog_book}>
                <Image src={book} alt="book" className={styles.thumbnail} />
                <div className={styles.autor}>Autors: {autors} </div>
                <div className={styles.name}>Name: {item.name}</div>
                <div className={styles.category}>Category: {categories}</div>
                <div className={styles.category}>Price: {item.price} {item.curency?.name}</div>
                <Raiting raiting={item.raiting} edit={false} setRaiting={(raiting) => { }} />
                <div className={styles.esteeme}>Esteemes: {item.esteemes} </div>
                <div className={styles.catalog_book_button_container}>
                    <button className="smallround-red" onClick={(e) => buy(e)}> buy</button>
                    {/* <Link href={{ pathname: `/book/${item.id}`, query: { token: token }, }}><button className="smallround-gray" >more</button></Link> */}
                     <Link href={{ pathname: `/book/${item.id}`}}><button className="smallround-gray" >more</button></Link>
                </div>
            </div>
        </>
    );
}

// передача параметров в контексте на сервер
// href={{
//     pathname: `/book/${1}`,
//     query: { token: "token" },
//   }}