import { Alchemy, Network, Utils, BigNumber, GetNftSalesResponse, NftSale } from "alchemy-sdk";

// Configures the Alchemy SDK
const config = {
    apiKey: process.env.ALCHEMY_API_KEY, // Replace with your API key
    network: Network.ETH_MAINNET, // Replace with your network
};

// Creates an Alchemy object instance with the config to use for making requests
const alchemy = new Alchemy(config);

export const findContractDeployer = async (address: string) => {

  //The response fetches the contract deployer of the above address
  let response = await alchemy.core.findContractDeployer(address)

    //Logging the response to the console
    console.log(response)
  return response;
};

export const getNftFees = async (address: string) => {
    let options = {
      contractAddress: address,
    }
  
    let response: GetNftSalesResponse = await alchemy.nft.getNftSales(options)
    
    let sellerFeeSum = BigNumber.from(0);
    let royaltyFeeSum = BigNumber.from(0);
    let protocolFeeSum =BigNumber.from(0);
    
    response.nftSales.forEach((sale: NftSale) => {
      if (sale.sellerFee && sale.sellerFee.amount) {
        sellerFeeSum = sellerFeeSum.add(Utils.parseUnits(sale.sellerFee.amount, sale.sellerFee.decimals));
      }
      if (sale.royaltyFee && sale.royaltyFee.amount) {
        royaltyFeeSum = royaltyFeeSum.add(Utils.parseUnits(sale.royaltyFee.amount, sale.royaltyFee.decimals));
      }
      if (sale.protocolFee && sale.protocolFee.amount) {
        protocolFeeSum = protocolFeeSum.add(Utils.parseUnits(sale.protocolFee.amount, sale.protocolFee.decimals));
      }
    })
  
    console.log("Seller Fees Sum:", Utils.formatEther(sellerFeeSum))
    console.log("Royalty Fees Sum:", Utils.formatEther(royaltyFeeSum))
    console.log("Protocol Fees Sum:", Utils.formatEther(protocolFeeSum))
  
    return [sellerFeeSum, royaltyFeeSum, protocolFeeSum];
  }
export const getNftSales = async (address: string) => {
    let options = {
      contractAddress: address,
    }
  
    let response: GetNftSalesResponse = await alchemy.nft.getNftSales(options)
    let data = response.nftSales;
    console.log(data)
    return data;
  }

// getNftSales("0xEAdfF826D532dB453B74AF636B04232388e7BF0e")