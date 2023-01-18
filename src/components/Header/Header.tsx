import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";
import styles from './Header.module.scss';

const Header: FunctionComponent = () => (
    <header className={styles.headerBar}>
        <section className={styles.headerContent}>
            <Link href="/">
                <Image alt="logo" width={200} height={50} src="/logo.png" />
            </Link>
            <Image alt="cats" width={125} height={125} src="/cats.png" />
        </section>
    </header>
);

export default Header;