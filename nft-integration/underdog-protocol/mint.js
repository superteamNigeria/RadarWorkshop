const sdk = require("api")("@underdog/v2.0#5vgec2olujb1d8j");

sdk.server("https://devnet.underdogprotocol.com");
sdk.auth("api-key");

const mintNFT = async (req, res) => {
  try {
    const pubkeys = [" pub keys"];

    // Iterate over the pubkeys array
    for (const pubkey of pubkeys) {
      console.log(pubkey);

      const { data } = await sdk.postV2ProjectsProjectidNfts(
        {
          receiverAddress: pubkey,
          name: "SuperteamNG  Bootcamp",
          externalUrl: "https://x.com/superteamng?s=21",
          symbol: "SLB",
          description: "Thank you for attending the  Bootcamp on solana ",
          attributes: {
            Location: "Virtual",
            Date: "August 24 2024",
            "Proof of ": "Viewership",
          },
          receiver: {
            namespace: "Superteam",
            identifier: "https://x.com/superteamng?s=21",
            address: pubkey,
          },
          image:
            "https://res.cloudinary.com/dtfvdjvyr/image/upload/v1724090383/Profile_Picture_dykec6.png",
        },
        { projectId: "1" }
      );

      console.log(data);
    }
  } catch (err) {
    console.error(err);
  }
};

mintNFT();
