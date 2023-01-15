import Head from 'next/head'
import styles from '@/styles/Home.module.scss'
import { useQuery } from '@apollo/client';
import { getCuteCats } from 'lib/apollo/client/queries';
import Image from 'next/image';

export default function Home() {
  const { loading, error, data = { getCuteCats: [] } } = useQuery(getCuteCats);

  return (
    <>
      <Head>
        <title>BNNVARA Cats</title>
        <meta name="description" content="BNNVARA Cats" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.test}>
        { 
          data.getCuteCats.map((cat: any, index: number) => (
            <Image width="200" height="200" key={index} src={cat.url} alt={`cute-cat-${cat.id}`} />
          ))
        }
      </main>
    </>
  )
}
