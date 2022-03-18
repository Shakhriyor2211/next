import Layout from "../components/layout";
import Sidebar from "../components/sidebar";

export default function Contact() {
  return <section></section>;
}

Contact.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Sidebar />
      {page}
    </Layout>
  );
};
