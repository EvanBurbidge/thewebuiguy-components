import React from 'react';
import PrimaryButton from '@components/buttons/Button';
import FourOhFour from '@components/errors/images/fourOhFour';

interface NoDataProps {
  handleCreateClick?: () => void;
}

const NoData = ({ handleCreateClick }: NoDataProps ) => (
  <div className="flex w-full h-auto justify-center align-center items-center">
    <div className="bg-white rounded border border-gray-200 shadow-sm p-4 w-full md:w-1/2 h-auto text-center flex flex-col justify-between items-center">
      <div>
        <h1 className="text-3xl font-bold text-primary mb-3">Uh oh</h1>
        <h2 className="text-xl font-semibold text-primary"> Looks like theres no data</h2>
      </div>
      <div className="p-8 my-2">
        <FourOhFour />
      </div>
      {handleCreateClick && (
        <div className="w-1/4">
          <PrimaryButton
            id="no-data-create-button"
            onClick={handleCreateClick}
          >
            Get Started
          </PrimaryButton>
        </div>
      )}
    </div>
  </div>
);

export default NoData;