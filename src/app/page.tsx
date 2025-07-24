import { ConnectAndSIWE } from "@/components/ConnectAndSIWE";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-3xl space-y-6">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">
            OnchainKit / Smart Wallet Demo
          </h1>
          <p className="text-gray-600">
            Sign in with your Smart Wallet using Coinbase SW
          </p>
        </div>

        <ConnectAndSIWE />

        <div className="mt-8 text-center text-sm text-gray-500">
          <p>
            This is a simplified demo of Smart Wallet integration using wagmi
            and coinbase wallet
          </p>
        </div>
      </div>
    </div>
  );
}
