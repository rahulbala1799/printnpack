import { useEffect } from 'react';
import { useRouter } from 'next/router';

// This component simply redirects to the main products page
export default function ProductsIndex() {
  const router = useRouter();
  
  useEffect(() => {
    router.replace('/products');
  }, [router]);

  return null; // No UI, just a redirect
} 