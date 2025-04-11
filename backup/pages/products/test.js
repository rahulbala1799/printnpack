import React from 'react';
import Layout from '../../components/layout/Layout';
import products from '../../data/products';

const TestPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold">Test Page</h1>
        <div>
          {products.map(product => (
            <div key={product.id} className="my-4 p-4 border border-gray-200">
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p>{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default TestPage; 