// CSR - Client Side Rendering Page

import { GetServerSideProps, GetStaticProps } from 'next';
import { useEffect, useState } from 'react';

export default function Home({ repositories, date }) {
  // const [repositories, setRepositories] = useState<string[]>([]);

  // useEffect(() => {
  //   fetch('https://api.github.com/users/viannaandrebr/repos')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       const repositoryNames = data.map((item) => item.name);

  //       setRepositories(repositoryNames);
  //     });
  // }, []);

  // export default function BlogPost({ date }) {
  //   return (
  //     <>
  //       <h1> Hello Blog !</h1>
  //       <h2> {date} </h2>
  //     </>
  //   );
  // }

  return (
    <>
      <h1> Data do Servidor</h1>
      <h3> {date} </h3>
      <h1> Repositórios</h1>
      <ul>
        {repositories.map((repo) => (
          <li key={repo}> {repo} </li>
        ))}
      </ul>
    </>
  );
}

// export const getServerSideProps: GetServerSideProps = async () => {
export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(
    'https://api.github.com/users/viannaandrebr/repos'
  );

  const data = await response.json();

  const repositoryNames = data.map((item) => item.name);

  return {
    props: {
      repositories: repositoryNames,
      date: new Date().toISOString(),
    },
    revalidate: 5, // quantos segundos páginas em cache
  };
};
