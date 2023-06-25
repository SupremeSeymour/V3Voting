import { Account } from "../components/Account";
import { Connect } from "../components/Connect";
import { Connected } from "../components/Connected";
import { Approval } from "../components/Approval";

export function Page() {
  return (
    <>
      <h1>V3 Voting</h1>

      <Connect />

      <Connected>
        <Account />
        <hr />
        <hr />
        <Approval />
      </Connected>
    </>
  );
}

export default Page;

// Create random number and save somewhere as protoID -> give to ReadCreateHash -> browserID
// With that result give it to StartSession along with large number(for time), browserID, time
// To end Session -> give browserID, address, score
// getCaptcha() func
/* const handleSubmit = async () => {
  const proof = await getProof("0xCC737a94FecaeC165AbCf12dED095BB13F037685", captchaText);
  const proofHex = '0x' + proof.toString('hex');
  onSubmit(421613, "0xB6E7d41064915D69fcb277001c8aAF61d087d9b4", 0, proofHex, userAddress);
};*/
// WriteonSubmitCaptcha(destinationID, ZkaptchaAddress, gas, proof, userAddress)
// Wait for it 20-30s
// Result
