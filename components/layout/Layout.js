import React from 'react';
import Header from './Header';
import Footer from './Footer';
import QuoteCartDrawer from '../quote/QuoteCartDrawer';
import ProductQuoteBuilder from '../quote/ProductQuoteBuilder';
import QuoteEnquiryModal from '../quote/QuoteEnquiryModal';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <QuoteCartDrawer />
      <ProductQuoteBuilder />
      <QuoteEnquiryModal />
    </div>
  );
};

export default Layout; 