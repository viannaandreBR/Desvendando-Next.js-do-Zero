// import { GetServerSideProps } from 'next';
import { useEffect, useState } from 'react';

export default function Home() {
  const [repositories, setRepositories] = useState<string[]>([]);

  useEffect(() => {
    fetch('https://api.github.com/users/viannaandrebr/repos')
      .then((response) => response.json())
      .then((data) => {
        const repositoryNames = data.map((item) => item.name);

        setRepositories(repositoryNames);
      });
  }, []);

  return (
    <ul>
      {repositories.map((repo) => (
        <li key={repo}> {repo} </li>
      ))}
    </ul>
  );
}

// export const getServerSideProps: GetServerSideProps = async () => {
//   const response = await fetch(
//     'https://api.github.com/users/viannaandrebr/repos'
//   );

//   const data = await response.json();

//   const repositoryNames = data.map((item) => item.name);

//   return {
//     props: {
//       repositories: repositoryNames,
//     },
//   };
// };
