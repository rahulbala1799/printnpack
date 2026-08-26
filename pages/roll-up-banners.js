export async function getServerSideProps() {
  return {
    redirect: {
      destination: '/roll-up-banners-ireland',
      permanent: true,
    },
  };
}

export default function RollUpBannersRedirect() {
  return null;
}
