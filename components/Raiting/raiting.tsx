
import styles from "./raiting.module.css";
import Image from 'next/image';
import star_gold from "../../public/star_gold.svg";
import star_gray from "../../public/star_gray.svg";

export interface RaitingProps {
    raiting: number,
    edit: boolean,
    setRaiting: (raiting: number) => (void)

}
export default function Raiting({
    raiting,
    edit,
    setRaiting
}: RaitingProps) {
     console.log(edit);
    return (
        <>
            {!edit &&
            <div className={styles.raiting}>Raiting:
                <div className={styles.stars_raiting}>
                    <Image src={(raiting > 0) ? star_gold : star_gray} width={12} height={12} alt="star.svg" />
                    <Image src={(raiting > 1) ? star_gold : star_gray} width={12} height={12} alt="star.svg" />
                    <Image src={(raiting > 2) ? star_gold : star_gray} width={12} height={12} alt="star.svg" />
                    <Image src={(raiting > 3) ? star_gold : star_gray} width={12} height={12} alt="star.svg" />
                    <Image src={(raiting > 4) ? star_gold : star_gray} width={12} height={12} alt="star.svg" />
                </div>
            </div>}
            {edit &&
            <div className={styles.esteeme_stars_edit}>My esteeme: &nbsp; &nbsp; &nbsp; &nbsp;
                <Image className={styles.edit_esteeme} src={(raiting > 0) ? star_gold : star_gray} alt="star.svg" onClick={(e) => setRaiting((raiting>0)?0:1)} />
                <Image className={styles.edit_esteeme} src={(raiting > 1) ? star_gold : star_gray} alt="star.svg" onClick={(e) => setRaiting((raiting>1)?1:2)} />
                <Image className={styles.edit_esteeme} src={(raiting > 2) ? star_gold : star_gray} alt="star.svg" onClick={(e) => setRaiting((raiting>2)?2:3)} />
                <Image className={styles.edit_esteeme} src={(raiting > 3) ? star_gold : star_gray} alt="star.svg" onClick={(e) => setRaiting((raiting>3)?3:4)} />
                <Image className={styles.edit_esteeme} src={(raiting > 4) ? star_gold : star_gray} alt="star.svg" onClick={(e) => setRaiting((raiting>4)?4:5)} />
            </div>}

        </>
    );
}