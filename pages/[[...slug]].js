export async function getServerSideProps() {
  return {
    redirect: {
      destination: "https://www.chatbase.co/help/AC8_WXwytVVhOpedaxdEH",
      permanent: false,
    },
  };
}

export default function CatchAll() {
  return null;
}
