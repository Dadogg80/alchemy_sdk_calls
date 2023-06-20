'use client';

import { Utils } from "alchemy-sdk";

/* import React, { useState } from 'react';
import { getNftSales } from '@/lib/blockchain';
import AddressForm from '../forms/AddressForm';

const NftSalesCard = () => {
  const [address, setAddress] = useState('');

  const onSubmit = async (event: React.FormEvent, address: string) => {
    event.preventDefault();
    try {
      const response = await getNftSales(address);
      const nftSales = response.nftSales;
      console.log('NFT Sales:');
      nftSales.forEach((sale, index) => {
        console.log(`Sale ${index + 1}:`);
        console.log(`  Marketplace: ${sale.marketplace}`);
        console.log(`  Contract Address: ${sale.contractAddress}`);
        console.log(`  Token ID: ${sale.tokenId}`);
        console.log(`  Quantity: ${sale.quantity}`);
        console.log(`  Buyer Address: ${sale.buyerAddress}`);
        console.log(`  Seller Address: ${sale.sellerAddress}`);
        console.log(`  Taker: ${sale.taker}`);
        console.log(`  Seller Fee: ${JSON.stringify(sale.sellerFee)}`);
        console.log(`  Marketplace Fee: ${JSON.stringify(sale.marketplaceFee)}`);
        console.log(`  Protocol Fee: ${JSON.stringify(sale.protocolFee)}`);
        console.log(`  Royalty Fee: ${JSON.stringify(sale.royaltyFee)}`);
        console.log(`  Block Number: ${sale.blockNumber}`);
        console.log(`  Log Index: ${sale.logIndex}`);
        console.log(`  Bundle Index: ${sale.bundleIndex}`);
        console.log(`  Transaction Hash: ${sale.transactionHash}`);
      });
    } catch (error) {
      console.error('Error fetching NFT sales:', error);
    }
  }

  return (
    <section>
      <div className='card border my-10 border-secondary'>
        <div className='card-body'>
          <h2 className='card-title'>NFT Sales</h2>
          <p className='card-text'>This is a sample card</p>
        </div>
        <AddressForm onSubmit={onSubmit} address={address} setAddress={setAddress} />
      </div>
    </section>
  );
}

export default NftSalesCard;
*/

import React, { useState } from 'react';
import { getNftSales } from '@/lib/blockchain';
import { NftSalesResponse } from '../responses/NftSalesResponse';
import AddressForm from '../forms/AddressForm';

export const NftSalesCard = () => {
  const [address, setAddress] = useState('');
  const [sellerFeeSum, setSellerFeeSum] = useState('');
  const [royaltyFeeSum, setRoyaltyFeeSum] = useState('');
  const [protocolFeeSum, setProtocolFeeSum] = useState('');

  const onSubmit = async (event: React.FormEvent, address: string) => {
    event.preventDefault();
    const [sellerFee, royaltyFee, protocolFee] = await getNftSales(address);
    setSellerFeeSum(Utils.formatEther(sellerFee));
    setRoyaltyFeeSum(Utils.formatEther(royaltyFee));
    setProtocolFeeSum(Utils.formatEther(protocolFee));
  };

  return (
    <div className='card border my-10 border-secondary'>
      <div className='card-body'>
        <h2 className='card-title'>NFT Sales</h2>
        <p className='text-white'>0xEAdfF826D532dB453B74AF636B04232388e7BF0e</p>
        <div className='card-text'>
          <AddressForm 
            onSubmit={onSubmit} 
            address={address} 
            setAddress={setAddress} 
          />
          <NftSalesResponse 
            sellerFeeSum={sellerFeeSum} 
            royaltyFeeSum={royaltyFeeSum} 
            protocolFeeSum={protocolFeeSum} 
          />
        </div>
      </div>
    </div>
  );
};

