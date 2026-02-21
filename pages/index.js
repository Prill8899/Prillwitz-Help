export async function getServerSideProps() {
  return {
    redirect: { destination: "/help", permanent: false },
  };
}
export default function Home(){ return null; }
