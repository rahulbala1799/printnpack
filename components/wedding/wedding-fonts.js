import { Cormorant_Garamond, Nunito_Sans, Pinyon_Script } from 'next/font/google';

/**
 * Loaded once. Next 13's font loader crashes the production build
 * ("Cannot read properties of null (reading '1')") if the same Google
 * font is requested from more than one file.
 */
export const display = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  display: 'swap',
});

export const script = Pinyon_Script({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

export const text = Nunito_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
});
