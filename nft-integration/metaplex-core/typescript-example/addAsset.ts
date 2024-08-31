import {
  generateSigner,
  createSignerFromKeypair,
  signerIdentity,
} from "@metaplex-foundation/umi";
import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
import { base58 } from "@metaplex-foundation/umi/serializers";
import { createCollection } from "@metaplex-foundation/mpl-core";

//add secret key to the wallet.json
import wallet from "../wallet.json";

// setup umi
const umi = createUmi("https://api.devnet.solana.com", "finalized");

let keypair = umi.eddsa.createKeypairFromSecretKey(new Uint8Array(wallet));

const adminSigner = createSignerFromKeypair(umi, keypair);

umi.use(signerIdentity(adminSigner));
(async () => {
  //Generate collection keypair
  // used to sign the create collection and create a collection
  const collection = generateSigner(umi);
  console.log(
    "This is your collection address",
    collection.publicKey.toString()
  );

  //Create the collection

  let tx = await createCollection(umi, {
    collection,
    name: "SuperteamNG",
    uri: "https://res.cloudinary.com/dtfvdjvyr/image/upload/v1720977255/Solana_logo_natqeg.png",
    plugins: [
      {
        type: "PermanentFreezeDelegate",
        frozen: true,
        authority: { type: "None" },
      },
    ],
  }).sendAndConfirm(umi);

  //Deserialize the signature
  console.log(
    "Collection Created: https://solana.fm/tx/" +
      base58.deserialize(tx.signature)[0] +
      "?cluster=devnet-alpha"
  );
})();
