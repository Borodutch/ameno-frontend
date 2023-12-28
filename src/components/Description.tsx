import Link from 'components/Link'

export default function () {
  return (
    <>
      <h3>What's $AMENO? 🐣</h3>
      <p>
        The contract is{' '}
        <Link url="https://basescan.org/address/0x357b4Ef40A5cF049114B4566773e8A6a57F8E862#writeProxyContract">
          <span className="break-all">
            0x357b4Ef40A5cF049114B4566773e8A6a57F8E862
          </span>
        </Link>{' '}
        on the Base chain.
      </p>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube-nocookie.com/embed/kLaaJ_aeoyM?si=LaVKkKBtnGH8NNsw"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
      <ul>
        <li>
          There will always be at most 6,942,000 minted $AMENO in existence.
        </li>
        <li>
          A week after all $AMENO is minted, 20% of ETH will go back to hodlers
          proportionally. If you own 69,429 $AMENO, you will get 1% of 20% of
          ETH (or 0.2% of all ETH).
        </li>
        <li>You get 65,000 $AMENO for 1 ETH.</li>
        <li>LP kicks in after the mint is over.</li>
        <li>
          <b>
            Every 2 weeks after the $CASHBACK event everyone gets their balances
            doubled 🚀
          </b>
        </li>
        <li>Here to DORIME this $AMENO together 🤝</li>
      </ul>
    </>
  )
}
