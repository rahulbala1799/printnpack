/**
 * Admin login is unified with main login.
 * Redirect to /login (same credentials: email + password from database).
 */

export default function AdminLoginRedirect() {
  return null;
}

export async function getServerSideProps() {
  return {
    redirect: {
      destination: '/login',
      permanent: false,
    },
  };
}
