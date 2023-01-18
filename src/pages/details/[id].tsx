import Header from "@/components/Header/Header";
import { useQuery } from "@apollo/client";
import { getCuteCat } from "lib/apollo/client/queries";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from './CuteCatDetails.module.scss';

const CuteCatDetails = () => {
    const router = useRouter();
    const { id, catName } = router.query;
    const { loading, error, data } = useQuery(getCuteCat, { variables: { id } });

    if (error) return <div>Error occured. Maybe the server is down.</div>;

    return (
        <main>
            <Header />
            <section className={styles.catDetailsContent}>
                {loading
                    ? <p>Loading...</p>
                    : (
                        <>
                            <h1 className={styles.catDetailsTitle}>{catName}</h1>
                            <Image className={styles.catDetailsImage} src={data.getCuteCat.url} width={400} height={400} alt={`${data.getCuteCat.id}-cutecat`} />
                            <h2>Omschrijving</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquam posuere iaculis. Vestibulum feugiat ante eu odio congue, id molestie nulla tempor. Donec placerat dolor porttitor dui tristique lobortis. Nam quis vulputate mi, ut dapibus tellus. Donec tristique pellentesque nunc, vitae egestas lorem dapibus a. Proin dapibus odio vel aliquam aliquam. Ut sollicitudin risus eu molestie ornare. Duis molestie dictum nulla, eu volutpat erat vestibulum condimentum. Vestibulum ut turpis quam. Duis vel diam a purus varius cursus quis vel erat. Ut ullamcorper diam in justo faucibus sodales vel ut nisi. Mauris gravida ex quis mauris pulvinar, in dictum magna rutrum. Proin in vehicula enim. Cras porta turpis eu mattis faucibus.
                            </p>
                            <h2>Details</h2>
                            <article className={styles.catDetailsSpecs}>
                                <ul className={styles.catDetailsSpecs}>
                                    <li>5kg</li>
                                    <li>Mannetje</li>
                                    <li>Europese korthaar</li>
                                    <li>Gecastreerd</li>
                                </ul>
                                <ul className={styles.catDetailsSpecs}>
                                    <li>5kg</li>
                                    <li>Mannetje</li>
                                    <li>Europese korthaar</li>
                                    <li>Gecastreerd</li>
                                </ul>
                            </article>
                        </>
                    )
                }

            </section>
        </main>
    );
}

export default CuteCatDetails;