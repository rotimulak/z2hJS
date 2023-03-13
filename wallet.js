const ethers = require("ethers");

main().then(async () => {
    console.log("===================");
});

async function main() {
    let walletCount = 0;
    while (walletCount < 1){
        const newWallet = ethers.Wallet.createRandom();
        str = '===\nAddress:'+ newWallet.address + '\nPrivateKey:'+ newWallet.privateKey + '\nPhrase: ' + newWallet.mnemonic.phrase + '\n===';
        let isGoodWallet = newWallet.address.toString().toLowerCase().includes('0xc0de'.toLowerCase());
        if (isGoodWallet){
            console.log(str);
            walletCount++;
        }
    }
}