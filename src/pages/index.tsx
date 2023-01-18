import CuteCat from '@/components/CuteCat/CuteCat';
import Header from '@/components/Header/Header';
import styles from './Home.module.scss';
import { CuteCatData } from '@/types/CuteCats';
import { useQuery } from '@apollo/client';
import { getCuteCats } from 'lib/apollo/client/queries';
import Head from 'next/head';

type HomeProps = {
  logoWidth: number
  logoHeight: number
  catImageSize: number,
  catNames: string[]
}

export const getStaticProps = () => {
  return {
    props: {
      catNames: [
        "Arnie",
        "Zador",
        "Bandit",
        "Warfrost",
        "Harriet",
        "Tojo",
        "T-Bone",
        "Riley",
        "Ripmaw",
        "Neko"
      ]
    }
  }
}

const Home = ({ catNames }: HomeProps) => {
  const { data = { getCuteCats: [] } } = useQuery(getCuteCats);

  return (
    <>
      <Head>
        <title>BNNVARA Cats</title>
        <meta name="description" content="BNNVARA Cats" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <section className={styles.catContainer}>
          {
            data.getCuteCats.map((cat: CuteCatData, index: number) => (
              <CuteCat key={cat.id} catName={catNames[index] || cat.id} width={parseInt(styles.itemWidth)} className={styles.catItem} cuteCat={cat} />
            ))
          }
        </section>
      </main>
    </>
  )
}

export default Home;