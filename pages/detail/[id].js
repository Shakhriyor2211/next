import axios from "axios";
import { useRouter } from "next/router";
import Layout from "../../components/layout";
import Sidebar from "../../components/sidebar";

function Detail({ data }) {
  const router = useRouter();
  console.log(data);
  if (router.isFallback) {
    return <p>Loading</p>;
  }
  return (
    <section>
      <p>{data.title}</p>
    </section>
  );
}

export default Detail;

Detail.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Sidebar />
      {page}
    </Layout>
  );
};

export const getStaticProps = async (context) => {
  //   const response = await fetch(
  //     `http://localhost:3000/products/${context.params.id}`,
  //     {
  //       method: "GET",
  //     }
  //   );
  //   const data = await response.json();

  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );
  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: { data },
  };
};

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};
