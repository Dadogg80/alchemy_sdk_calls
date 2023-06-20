import React, { FormEvent, ChangeEvent } from 'react';

interface FormProps {
  onSubmit: (event: FormEvent, address: string) => void;
  address: string;
  setAddress: (address: string) => void;
}

const AddressForm: React.FC<FormProps> = ({ onSubmit, address, setAddress }) => {
  return (
    <div className='mx-10 my-10'>
      <form onSubmit={async (e) => await onSubmit(e, address)}>
        <input 
          type="text" 
          value={address}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setAddress(e.target.value)}
          placeholder="Enter Ethereum address"
          pattern="^0x[a-fA-F0-9]{40}$"
          required
        />
        <button 
          type="submit" 
          className='btn btn-secondary flex w-fit-content m-5'
        >
          getNftSales
        </button>
      </form>
    </div>   
  );
};

export default AddressForm;
