'use client';

import { Utils } from "alchemy-sdk";

import React, { useState } from 'react';
import { getNftFees } from '@/lib/blockchain';
import { NftFeesResponse } from '../responses/NftFeesResponse';
import AddressForm from '../forms/AddressForm';

export const NftFeesCard = () => {
  const [address, setAddress] = useState('');
  const [sellerFeeSum, setSellerFeeSum] = useState('');
  const [royaltyFeeSum, setRoyaltyFeeSum] = useState('');
  const [protocolFeeSum, setProtocolFeeSum] = useState('');

  const onSubmit = async (event: React.FormEvent, address: string) => {
    event.preventDefault();
    const [sellerFee, royaltyFee, protocolFee] = await getNftFees(address);
    setSellerFeeSum(Utils.formatEther(sellerFee));
    setRoyaltyFeeSum(Utils.formatEther(royaltyFee));
    setProtocolFeeSum(Utils.formatEther(protocolFee));
  };

  return (
    <div className='card border my-10 border-secondary'>
      <div className='card-body'>
        <h2 className='card-title'>NFT Fees</h2>
        <p className='text-white'>0xEAdfF826D532dB453B74AF636B04232388e7BF0e</p>
        <div className='card-text'>
          <AddressForm 
            onSubmit={onSubmit} 
            address={address} 
            setAddress={setAddress} 
          />
            <NftFeesResponse 
              sellerFeeSum={sellerFeeSum} 
              royaltyFeeSum={royaltyFeeSum} 
              protocolFeeSum={protocolFeeSum} 
            />
        </div>
      </div>
    </div>
  );
};

