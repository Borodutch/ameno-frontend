import { Ameno__factory } from '@borodutch/ameno-contract'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { ethers } from 'ethers'
import { useAccount } from 'wagmi'
import { useEthersSigner } from 'hooks/useEthers'
import { useState } from 'preact/hooks'
import env from 'helpers/env'

export default function () {
  const [amount, setAmount] = useState(1000)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const { isConnected } = useAccount()
  const signer = useEthersSigner()

  async function mint() {
    setLoading(true)
    setError('')
    setSuccess(false)
    try {
      if (!signer) {
        throw new Error('No signer')
      }
      const contract = Ameno__factory.connect(env.VITE_CONTRACT, signer)
      const tx = await contract.mint({
        value: ethers.parseEther(`${amount / 65000}`),
      })
      await tx.wait()
      setSuccess(true)
    } catch (error) {
      console.error(error)
      setError(error instanceof Error ? error.message : `${error}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <h3>Mint $AMENO 🫦</h3>
      <input
        type="number"
        class="input input-bordered w-full"
        placeholder="How much $AMENO do you want?"
        min={0}
        value={amount}
        onChange={(e) => setAmount(parseInt(e.currentTarget.value))}
      />
      <div class="label">
        <span class="label-text-alt">
          Cost: ~{(amount / 65000).toFixed(3)} ETH
        </span>
      </div>
      <div className="flex flex-col items-stretch gap-4 mt-8">
        <ConnectButton />
        {isConnected && (
          <button
            disabled={loading}
            class="btn btn-primary btn-lg"
            onClick={mint}
          >
            {loading ? ' 🤔' : ''}The mint $AMENO button
          </button>
        )}
        {success && (
          <div role="alert" class="alert alert-success break-all">
            <span role="img" aria-label="success">
              🎉
            </span>{' '}
            You now have +{amount} $AMENO.
          </div>
        )}
        {error && (
          <div role="alert" class="alert alert-error break-all">
            {error}
          </div>
        )}
      </div>
    </>
  )
}
