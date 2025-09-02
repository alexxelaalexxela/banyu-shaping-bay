import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BoardGrid from '@/components/BoardGrid';

const Boards = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <BoardGrid />
      </main>
      <Footer />
    </div>
  );
};

export default Boards;