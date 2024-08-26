// Import dependencies
import {

    Connection,
    clusterApiUrl,
    Keypair,
    PublicKey,
    Transaction,
    sendAndConfirmTransaction,
    SystemProgram,LAMPORTS_PER_SOL

} from '@solana/web3.js';
import bs58 from 'bs58';
import { config } from 'dotenv';

config()

async function splitFee(
    totalAmount
) {

    // Initiate a solana connection

    const connection = new Connection(clusterApiUrl('devnet'))

    // create a new transaction
    const transaction = new Transaction()

    const fromWallet = Keypair.fromSecretKey(bs58.decode(process.env.PRIVATE_KEY))
    
    const recipient_1 = 'FFvPUNGYsQa4vjLAcCJ4zx8vZ4BSqQoCbMMyG3VNuEnd'; // 75%
    const recipient_2 = '6WdSAAE49mp7bxKScXDNV41zX1Uk9bCTg6QeaV6YkToy'; // 25%

    
    transaction.add(
        SystemProgram.transfer(
            {
                fromPubkey: fromWallet.publicKey,
                toPubkey: new PublicKey(recipient_1),
                lamports: Math.floor(totalAmount * LAMPORTS_PER_SOL * 0.75)
            }
        )
    )

    transaction.add(
        SystemProgram.transfer(
            {
                fromPubkey: fromWallet.publicKey,
                toPubkey: new PublicKey(recipient_2),
                lamports: Math.floor(totalAmount * LAMPORTS_PER_SOL * 0.25)
            }
        )
    )

    // // Get the latest block hash

    const { blockhash } = await connection.getLatestBlockhash();

    // set the recent blockhash and fee pay for txn
    transaction.recentBlockhash = blockhash;
    transaction.feePayer= fromWallet.publicKey;

   const signature =  await sendAndConfirmTransaction(
            connection,
            transaction,
            [fromWallet]
        );

    console.log('Payment Successful 🎊', signature);
    console.log(`txn log: https://explorer.solana.com/tx/${signature}}?cluster=devnet`);

    return signature
}


const totalAmount = 0.1; // Total amount in SOL

splitFee(totalAmount)
.then(txid => console.log('Transaction ID:', txid))
.catch(error => console.error('Error:', error));