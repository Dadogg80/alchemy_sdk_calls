
import React from 'react';

interface NftFeesResponseProps {
  sellerFeeSum: string;
  royaltyFeeSum: string;
  protocolFeeSum: string;
}

export const NftFeesResponse: React.FC<NftFeesResponseProps> = ({ sellerFeeSum, royaltyFeeSum, protocolFeeSum }) => {
  return (
    <>
      <div className=''>
        <h2 className="text-2xl my-5">NFT Sales Fee Summary</h2>
        <hr className="my-5" />
        <h3 className="text-2xl my-5">Secondary Sales Fees</h3>
        <p >Seller Fees Sum: <span className='font-semibold'>  {(parseFloat(sellerFeeSum) / 1e18).toFixed(5)}</span> ETH</p>
        <p >Protocol Fees Sum:<span className='font-semibold'> {(parseFloat(protocolFeeSum) / 1e18).toFixed(5)}</span> ETH</p>
        <hr className="my-5" />
        <p >Royalty Fees Sum: <span className='font-semibold'> {(parseFloat(royaltyFeeSum) / 1e18).toFixed(5)}</span> ETH</p>
      </div>
    </>
  );
};
