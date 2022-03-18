import Layout from "../components/layout";
import Sidebar from "../components/sidebar";

export default function Index({ data }) {
  console.log(data);
  return (
    <section>
      {data.map((stadium) => (
        <p>{stadium.title}</p>
      ))}
    </section>
  );
}

Index.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Sidebar />
      {page}
    </Layout>
  );
};

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
  });
  const data = await response.json();
  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: { data },
  };
};
