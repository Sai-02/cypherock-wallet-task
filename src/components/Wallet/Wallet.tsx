import CoinsList from './CoinsList';
import WalletHeader from './WalletHeader';
const Wallet = () => {
    return (
        <div className="pt-[21px] px-[40px]">
            <WalletHeader />
            <div className="mt-[45px] flex justify-between items-center">
                <h1 className="text-[#C78D4E] text-[20px] leading-6">Wallet 1</h1>
                <button className="py-[8px] px-[26px] rounded  text-[#BEB4A8]" style={{
                    background: "rgba(255, 255, 255, 0.06)"
                }}>
                    + Add Coin
                </button>
            </div>
            <CoinsList/>
        </div>
    )
}

export default Wallet