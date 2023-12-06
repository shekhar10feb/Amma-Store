import React from 'react';
import { ProductCategory } from './ProductCategory';
import { ProductSearch } from './ProductSearch';
import { ProductSlider } from './ProductSlider';
import { RandomProducts } from './RandomProducts';
import { BottomLinks } from './BottomLinks';
import { Footer } from './Footer';

export const Home = () => {
  return (
    <div>
        <ProductSearch />
        <ProductCategory />
        <ProductSlider />
        <RandomProducts />
        <BottomLinks />
        <Footer />
    </div>
  )
}
