import Head from 'next/head';

export default function NextHead({ title, desc }) {
    return (
        <Head>
            <title>{title}</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
    );
}
