export default function () {
  return (
    <>
      <div className="flex flex-col items-stretch gap-4 mt-8">
        <button
          class="btn btn-primary btn-lg"
          onClick={() => {
            window.open(
              'https://dexscreener.com/base/0x357b4Ef40A5cF049114B4566773e8A6a57F8E862',
              '_blank'
            )
          }}
        >
          👏 Buy $AMENO 👏
        </button>
      </div>
    </>
  )
}
