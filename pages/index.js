import Layout from "../components/Layout";
import Image from "next/image"
import ModernLayout from "../components/ModernLayout";

export default function Home() {
  return (
    <>
    <ModernLayout></ModernLayout>
    <Layout title="Home">
      <ModernLayout/>
      <p className="text-xl">Welcome to Nextjs</p>
    </Layout>
    </>
  );
}
