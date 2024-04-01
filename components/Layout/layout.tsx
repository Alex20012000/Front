import { PropsWithChildren } from "react";
import Head from "next/head";
import Image from 'next/image';
import Link from 'next/link';
import clouds from "./cloud.module.css";
import styles from "./header.module.css";
import cloud1 from "../../public/clouds/cloud-01.png";
import cloud2 from "../../public/clouds/cloud-02.png";
import cloud3 from "../../public/clouds/cloud-03.png";
import cloud4 from "../../public/clouds/cloud-04.png";
import cart from "../../public/cart-rem.png";
import { useRouter } from 'next/navigation';
import { useAppDispatch } from "@/pages/_app";
import { setToken } from '@/pages/store/slices';
import { useSelector } from 'react-redux';
import { RootState } from "@/pages/_app";
export default function Layout({ children }: PropsWithChildren) {
    const { push } = useRouter();
    const dispatch = useAppDispatch();

    const token = useSelector((state: RootState) => {
        return state.authSlice.token;
    })

    const quantity = useSelector((state: RootState) => {
        return state.cartSlice.quantity;
    })

    const exitClick = async (e: React.MouseEvent<HTMLElement>) => {
        dispatch(setToken(""));
        push(`/login`);
    }

    return (
        <>
            <Head>
                <title>demo shop</title>
                <meta name="description" content="demo shop Next.js project" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={clouds.cloud}>
                <Image className={clouds.cloud1} src={cloud1} alt="cloud1" priority={false} />
                <Image className={clouds.cloud2} src={cloud2} alt="cloud2" priority={false} />
                <Image className={clouds.cloud3} src={cloud3} alt="cloud3" priority={false} />
                <Image className={clouds.cloud4} src={cloud4} alt="cloud4" priority={false} />
                <div className={clouds.cover}></div>
            </div>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.header_logo}>
                        <Link href="/">
                            About me
                        </Link>
                    </div>

                    <nav className={styles.header_nav}>

                        <ul className={styles.header_ul}>
                            <li className={styles.header_nav_item}>
                                <Link href="/catalog">
                                    Catalog
                                </Link>
                            </li>   
                            <li className={styles.header_nav_item}>
                                <Link href="/myapi">
                                    API
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    <div className={styles.profile_button}>

                        <Link className={styles.cart} href="/cart">
                            <Image src={cart} alt="cart" className={styles.cart} />
                            <div className={styles.total}>{quantity}</div>
                        </Link>
                        {(token === "") && <Link href="/login"><button>Enter</button></Link>}
                        {(token === "") && <Link href="/register"><button>Registration</button></Link>}

                        {(token !== "") && <button onClick={(e) => exitClick(e)}>Exit</button>}
                    </div>

                </div>
                <main className={styles.main}>{children}</main>
            </div>
        </>
    )
}