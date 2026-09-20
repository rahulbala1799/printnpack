import React from 'react';
import Header from './Header';
import Footer from './Footer';
import LeadgenPopup from '../LeadgenPopup';
import QuoteCartDrawer from '../quote/QuoteCartDrawer';
import ProductQuoteBuilder from '../quote/ProductQuoteBuilder';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <LeadgenPopup />
      <QuoteCartDrawer />
      <ProductQuoteBuilder />
    </div>
  );
};

export default Layout; 