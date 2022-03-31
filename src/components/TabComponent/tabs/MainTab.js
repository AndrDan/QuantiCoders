import React from 'react';
import Cards from 'components/CardComponent/Cards';

const MainTab = (register) => {
  return (
    <div className="MainTab">
      <Cards {...register} />
    </div>
  );
};
export default MainTab;
