import styles from "./loader.module.css";
import icon from  "./images/loader3.webp"
import Image from 'next/image';

export interface Loader {

}

export const Loader = () => { 
  
 
  return (
    <div className={styles.loader} >
    <Image src={icon} alt="loader" className={styles.img_loader} />    
    </div>
  );
}

