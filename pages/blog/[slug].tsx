import { GetStaticProps } from 'next';
import { GetStaticPaths } from 'next/types';

export default function BlogPost({ date }) {
  return (
    <>
      <h1>Blog! </h1>
      <h2> {date} </h2>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  // Pegar os Posts mais lidos

  return {
    paths: [],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      date: new Date().toISOString(),
    },
    revalidate: 5,
  };
};
