import { BaseProvider, getDefaultProvider } from '@ethersproject/providers'

interface INetwork {
    chainId: number;
    rpc: string
}
const networks: {[name: string]: INetwork} = {
    "heco-mainnet": {
        chainId: 128,
        rpc: "https://http-mainnet.hecochain.com"
    },
    "heco-testnet": {
        chainId: 256,
        rpc: "https://http-testnet.hecochain.com"
    }
}

export function getCustomNetwork(chainId: number,rpc?: string): BaseProvider | undefined {
    if (typeof chainId !== "number") {
        return
    }
    for (const name in networks) {
        const standard = networks[name]
        if (chainId === standard.chainId) {
            return getDefaultProvider(standard.rpc)
        }
    }
    if (rpc) {
        return getDefaultProvider(rpc)
    }
    return
}