import React from 'react';
import treatment from '../../assets/images/treatment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const Terms = () => {
    return (
        <div class="hero">
      <div class="hero-content flex-col lg:flex-row mx-20">
        <img
          src={treatment}
          class="max-w-sm rounded-lg shadow-2xl"
          alt=""
        />
        <div className='p-20'>
          <h1 class="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
          <p class="py-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil deserunt adipisci explicabo eum quaerat accusamus officia amet dolore, obcaecati non veritatis facere dolorem fugit maiores tempora, in illo? Autem, quasi?
          </p>
          <PrimaryButton>Explore more</PrimaryButton>
        </div>
      </div>
    </div>
    );
};

export default Terms;