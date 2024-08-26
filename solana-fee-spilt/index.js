import {
    Connection,
    clusterApiUrl,
    Keypair,
    PublicKey,
    Transaction,
    sendAndConfirmTransaction,
    SystemProgram,
    LAMPORTS_PER_SOL,
  } from '@solana/web3.js';
import bs58 from 'bs58'
import { config } from 'dotenv';
config();
  
  async function splitFee(
    recipients,
    amounts,
    totalAmount
  ) {
    // Initialize the Solana connection to the devnet cluster
    const connection = new Connection(clusterApiUrl('devnet'));
  
    // Create a new transaction
    const transaction = new Transaction();
    // Create a Keypair instance from the private key
    const fromWallet = Keypair.fromSecretKey(bs58.decode(process.env.PRIVATE_KEY));
  
    // Loop through the recipients and add a transfer instruction to the transaction
    recipients.forEach((recipient, index) => {
      transaction.add(
        SystemProgram.transfer({
          fromPubkey: fromWallet.publicKey, // The public key of the wallet sending the funds
          toPubkey: new PublicKey(recipient), // The public key of the recipient
          lamports: Math.floor(amounts[index] * LAMPORTS_PER_SOL), // Convert the amount in SOL to lamports
        })
      );
    });
  
    // Get the latest block hash
    const { blockhash } = await connection.getLatestBlockhash();
  
    // Set the recent blockhash and fee payer for the transaction
    transaction.recentBlockhash = blockhash;
    transaction.feePayer = fromWallet.publicKey;
  
    const signature = await sendAndConfirmTransaction(
      connection,
      transaction,
      [fromWallet],
    );
    console.log('Payment Successful 🎊', signature);
    console.log(`Txn Log: https://explorer.solana.com/tx/${signature}}?cluster=devnet`)
    return signature; // Return the transaction ID
  }
  
  // // Example usage:
  const recipients = [
    'FFvPUNGYsQa4vjLAcCJ4zx8vZ4BSqQoCbMMyG3VNuEnd', // Recipient Address 1
    '6WdSAAE49mp7bxKScXDNV41zX1Uk9bCTg6QeaV6YkToy' // Recipient Address 2
  ];
  const amounts = [0.5, 0.5]; // 0.5 SOL each
  const totalAmount = 1; // Total amount in SOL
  
  splitFee(recipients, amounts, totalAmount)
    .then(txid => console.log('Transaction ID:', txid))
    .catch(error => console.error('Error:', error));