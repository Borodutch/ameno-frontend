import '@rainbow-me/rainbowkit/styles.css'

import { PropsWithChildren } from 'preact/compat'
import {
  RainbowKitProvider,
  darkTheme,
  getDefaultWallets,
} from '@rainbow-me/rainbowkit'
import { WagmiConfig, configureChains, createConfig } from 'wagmi'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { base } from 'wagmi/chains'
import { publicProvider } from 'wagmi/providers/public'
import env from 'helpers/env'

const { chains, publicClient } = configureChains(
  [base],
  [alchemyProvider({ apiKey: env.VITE_ALCHEMY_BASE }), publicProvider()]
)

const { connectors } = getDefaultWallets({
  appName: '$AMENO',
  projectId: '1a66d1e5c2c9632e2dddbd53c8da7e73',
  chains,
})

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
})

export default function ({ children }: PropsWithChildren) {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider coolMode chains={chains} theme={darkTheme()}>
        {children}
      </RainbowKitProvider>
    </WagmiConfig>
  )
}
