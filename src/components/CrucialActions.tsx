import { Ameno__factory } from '@borodutch/ameno-contract'
import { ContractTransactionResponse } from 'ethers'
import { useAccount } from 'wagmi'
import { useEthersSigner } from 'hooks/useEthers'
import { useState } from 'preact/hooks'
import env from 'helpers/env'

export default function () {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [actionSuccess, setActionSuccess] = useState(false)
  const signer = useEthersSigner()

  const { isConnected } = useAccount()

  if (!isConnected) {
    return null
  }

  async function performTransaction(
    action: Promise<ContractTransactionResponse>
  ) {
    setLoading(true)
    setActionSuccess(false)
    try {
      const tx = await action
      await tx.wait()
      setActionSuccess(true)
    } catch (error) {
      console.error(error)
      setError(error instanceof Error ? error.message : `${error}`)
    } finally {
      setLoading(false)
    }
  }

  async function singDorime() {
    const contract = Ameno__factory.connect(env.VITE_CONTRACT, signer)
    await performTransaction(contract.singDorime())
  }

  async function singAmeno() {
    const contract = Ameno__factory.connect(env.VITE_CONTRACT, signer)
    await performTransaction(contract.singAmeno())
  }

  return (
    <div className="flex flex-col gap-4 items-stretch">
      <h2>👇 Crucial actions</h2>
      <button
        class="btn btn-primary btn-lg"
        onClick={singDorime}
        disabled={loading}
      >
        {loading ? ' 🤔' : ''}Sing DORIME 🙏
      </button>
      <button
        class="btn btn-primary btn-lg"
        onClick={singAmeno}
        disabled={loading}
      >
        {loading ? ' 🤔' : ''}Sing AMENO 🚀
      </button>
      {actionSuccess && (
        <div role="alert" class="alert alert-success">
          <span role="img" aria-label="success">
            🎉
          </span>{' '}
          You did something with $AMENO successfully!
        </div>
      )}
      {error && (
        <div role="alert" class="alert alert-error break-all">
          {error}
        </div>
      )}
    </div>
  )
}
