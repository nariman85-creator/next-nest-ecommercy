import { GetStaticProps, InferGetStaticPropsType } from "next";
type Repo = {
  name: string;
};

export const getStaticProps: GetStaticProps<{
  repo: Repo;
}> = async () => {
  const res = await fetch("https://api.github.com/repos/vercel/next.js");
  const repo = await res.json();
  return { props: { repo } };
};

export default function Page({ repo }: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log(repo);
  
  return <div>page</div>;
}
