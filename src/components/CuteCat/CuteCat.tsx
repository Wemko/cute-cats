import { CuteCatData } from "@/types/CuteCats";
import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";
import styles from './CuteCat.module.scss';

type CuteCatProps = {
    width?: number,
    height?: number,
    className?: string
    cuteCat: CuteCatData,
    catName: string
}

const CuteCat: FunctionComponent<CuteCatProps> = ({ width = 200, height = width, cuteCat, className, catName }: CuteCatProps) => {
    return (
        <section className={`${className} ${styles.catBlock}`}>
            <h1 className={styles.catTitle}>{catName}</h1>
            <Link className="reset-link" href={{ pathname: `/details/${cuteCat.id}`, query: { catName } }}>
                <Image className={styles.catImage} src={cuteCat.url} width={width} height={height} alt={`${cuteCat.id}-cutecat`} />
            </Link>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor arcu eu neque sollicitudin, sed eleifend magna sagittis.
            </p>
        </section>
    );
};


export default CuteCat;