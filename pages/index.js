import Layout from "../components/Layout";
import ModernLayout from "../components/ModernLayout";
import Image from "next/image"

export default function Home() {
  return (
    <Layout title="Home">
      <ModernLayout/>
      <p className="text-xl">Welcome to Nextjs</p>
    </Layout>
  );
}
