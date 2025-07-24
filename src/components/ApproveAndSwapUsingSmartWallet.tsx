// import { useAccount, useCallsStatus } from "wagmi";
// import { useWriteContracts } from "wagmi/experimental";
// import { useState } from "react";

// function BaseSepolliaDemo() {
//   const { address } = useAccount();
//   const [txId, setTxId] = useState(null);

//   const erc20Abi = [
//     {
//       name: "approve",
//       type: "function",
//       stateMutability: "nonpayable",
//       inputs: [
//         { name: "spender", type: "address" },
//         { name: "amount", type: "uint256" },
//       ],
//       outputs: [{ type: "bool" }],
//     },
//   ] as const;

//   const swapRouterAbi = [
//     {
//       inputs: [
//         {
//           name: "params",
//           type: "tuple",
//           components: [
//             { name: "tokenIn", type: "address" },
//             { name: "tokenOut", type: "address" },
//             { name: "fee", type: "uint24" },
//             { name: "recipient", type: "address" },
//             { name: "deadline", type: "uint256" },
//             { name: "amountIn", type: "uint256" },
//             { name: "amountOutMinimum", type: "uint256" },
//             { name: "sqrtPriceLimitX96", type: "uint160" },
//           ],
//         },
//       ],
//       name: "exactInputSingle",
//       outputs: [{ name: "amountOut", type: "uint256" }],
//       stateMutability: "payable",
//       type: "function",
//     },
//   ] as const;

//   const { writeContracts } = useWriteContracts();
//   const { data: callsStatus } = useCallsStatus({
//     id: txId,
//     query: {
//       enabled: !!txId,
//       refetchInterval: (data) => (data?.status === "CONFIRMED" ? false : 1000),
//     },
//   });

//   const handleApproveAndSwap = async () => {
//     // Token addresses on Base Sepolia
//     const usdcAddress = "0x036CbD53842c5426634e7929541eC2318f3dCF7e";
//     const wethAddress = "0x4200000000000000000000000000000000000006";
//     const swapRouterAddress = "0x8357227D4eDc78991Db6FDB9bD6ADE250536dE1d";

//     // Amount to approve and swap (e.g., 10 USDC with 6 decimals)
//     const amount = BigInt(10) * BigInt(10) ** BigInt(6);

//     // Deadline 20 minutes from now
//     const deadline = BigInt(Math.floor(Date.now() / 1000) + 1200);

//     const { data: id } = await writeContracts({
//       contracts: [
//         // First call: Approve the router to spend USDC
//         {
//           address: usdcAddress,
//           abi: erc20Abi,
//           functionName: "approve",
//           args: [swapRouterAddress, amount],
//         },
//         // Second call: Swap USDC for WETH
//         {
//           address: swapRouterAddress,
//           abi: swapRouterAbi,
//           functionName: "exactInputSingle",
//           args: [
//             {
//               tokenIn: usdcAddress, // USDC
//               tokenOut: wethAddress, // WETH
//               fee: 3000, // 0.3% fee tier
//               recipient: address, // Send output tokens to the user
//               deadline: deadline, // Expiration
//               amountIn: amount, // Amount from above
//               amountOutMinimum: BigInt(0), // No minimum (for demo purposes)
//               sqrtPriceLimitX96: BigInt(0), // No price limit
//             },
//           ],
//         },
//       ],
//     });

//     setTxId(id);
//   };

//   return (
//     <div className="p-4 border rounded-md">
//       <h2 className="text-xl font-bold mb-4">
//         Base Sepolia Batch Transaction Demo
//       </h2>
//       <p className="mb-4">
//         This demo approves and swaps 10 USDC to WETH in a single transaction.
//       </p>

//       <button
//         onClick={handleApproveAndSwap}
//         className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
//       >
//         Approve & Swap on Base Sepolia
//       </button>

//       {txId && (
//         <div className="mt-4 p-3 bg-gray-100 rounded-md">
//           <p>Transaction ID: {txId.substring(0, 10)}...</p>
//           <p>Status: {callsStatus?.status || "Processing..."}</p>

//           {callsStatus?.status === "CONFIRMED" && (
//             <p className="text-green-500">Transaction confirmed!</p>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }

// export default BaseSepolliaDemo;
