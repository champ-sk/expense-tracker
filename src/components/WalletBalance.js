import { useState } from "react";
const WalletBalance = () => {
  const [balance, setBalance] = useState(5000);
  return (
    <div>
      <h3>{balance}</h3>
    </div>
  );
};
export default WalletBalance;
