import CrucialActions from 'components/CrucialActions'
import Description from 'components/Description'
import Mint from 'components/Mint'
import Wallet from 'components/Wallet'

export default function () {
  return (
    <Wallet>
      <div className="container mx-auto max-w-prose p-10 prose">
        <h1>$AMENO</h1>
        <Description />
        <Mint />
        <CrucialActions />
      </div>
    </Wallet>
  )
}
