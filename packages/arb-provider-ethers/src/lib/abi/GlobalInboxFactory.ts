/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from 'ethers'
import { Provider } from 'ethers/providers'
import { UnsignedTransaction } from 'ethers/utils/transaction'

import { TransactionOverrides } from '.'
import { GlobalInbox } from './GlobalInbox'

export class GlobalInboxFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer)
  }

  deploy(overrides?: TransactionOverrides): Promise<GlobalInbox> {
    return super.deploy(overrides) as Promise<GlobalInbox>
  }
  getDeployTransaction(overrides?: TransactionOverrides): UnsignedTransaction {
    return super.getDeployTransaction(overrides)
  }
  attach(address: string): GlobalInbox {
    return super.attach(address) as GlobalInbox
  }
  connect(signer: Signer): GlobalInboxFactory {
    return super.connect(signer) as GlobalInboxFactory
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GlobalInbox {
    return new Contract(address, _abi, signerOrProvider) as GlobalInbox
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'BuddyContractDeployed',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'chain',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint8',
        name: 'kind',
        type: 'uint8',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'inboxSeqNum',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'MessageDelivered',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'chain',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint8',
        name: 'kind',
        type: 'uint8',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'inboxSeqNum',
        type: 'uint256',
      },
    ],
    name: 'MessageDeliveredFromOrigin',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'bytes32',
        name: 'nodeHash',
        type: 'bytes32',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'messageIndex',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'originalOwner',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'prevOwner',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'PaymentTransfer',
    type: 'event',
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'address',
        name: 'chain',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: 'contractData',
        type: 'bytes',
      },
    ],
    name: 'deployL2ContractPair',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'address',
        name: 'chain',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'erc20',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'depositERC20Message',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'address',
        name: 'chain',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'erc721',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'id',
        type: 'uint256',
      },
    ],
    name: 'depositERC721Message',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'address',
        name: 'chain',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
    ],
    name: 'depositEthMessage',
    outputs: [],
    payable: true,
    stateMutability: 'payable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'address',
        name: 'chain',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'erc20',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'depositPairedERC20Message',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        internalType: 'address',
        name: '_tokenContract',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_owner',
        type: 'address',
      },
    ],
    name: 'getERC20Balance',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        internalType: 'address',
        name: '_erc721',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_owner',
        type: 'address',
      },
    ],
    name: 'getERC721Tokens',
    outputs: [
      {
        internalType: 'uint256[]',
        name: '',
        type: 'uint256[]',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        internalType: 'address',
        name: '_owner',
        type: 'address',
      },
    ],
    name: 'getEthBalance',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'getInbox',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        internalType: 'address',
        name: 'originalOwner',
        type: 'address',
      },
      {
        internalType: 'bytes32',
        name: 'nodeHash',
        type: 'bytes32',
      },
      {
        internalType: 'uint256',
        name: 'messageIndex',
        type: 'uint256',
      },
    ],
    name: 'getPaymentOwner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        internalType: 'address',
        name: '_erc721',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_owner',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_tokenId',
        type: 'uint256',
      },
    ],
    name: 'hasERC721',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        internalType: 'address',
        name: '_tokenContract',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_chain',
        type: 'address',
      },
    ],
    name: 'isPairedContract',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        internalType: 'address',
        name: '_owner',
        type: 'address',
      },
    ],
    name: 'ownedERC20s',
    outputs: [
      {
        internalType: 'address[]',
        name: '',
        type: 'address[]',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        internalType: 'address',
        name: '_owner',
        type: 'address',
      },
    ],
    name: 'ownedERC721s',
    outputs: [
      {
        internalType: 'address[]',
        name: '',
        type: 'address[]',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'bytes',
        name: 'messageData',
        type: 'bytes',
      },
    ],
    name: 'sendInitializationMessage',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'address',
        name: 'chain',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: 'messageData',
        type: 'bytes',
      },
    ],
    name: 'sendL2Message',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'address',
        name: 'chain',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: 'messageData',
        type: 'bytes',
      },
    ],
    name: 'sendL2MessageFromOrigin',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'bytes',
        name: 'messages',
        type: 'bytes',
      },
      {
        internalType: 'uint256[]',
        name: 'messageCounts',
        type: 'uint256[]',
      },
      {
        internalType: 'bytes32[]',
        name: 'nodeHashes',
        type: 'bytes32[]',
      },
    ],
    name: 'sendMessages',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'address',
        name: 'originalOwner',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
      {
        internalType: 'bytes32',
        name: 'nodeHash',
        type: 'bytes32',
      },
      {
        internalType: 'uint256',
        name: 'messageIndex',
        type: 'uint256',
      },
    ],
    name: 'transferPayment',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'address',
        name: '_tokenContract',
        type: 'address',
      },
    ],
    name: 'withdrawERC20',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'address',
        name: '_erc721',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_tokenId',
        type: 'uint256',
      },
    ],
    name: 'withdrawERC721',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [],
    name: 'withdrawEth',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'address',
        name: '_tokenContract',
        type: 'address',
      },
    ],
    name: 'withdrawPairedERC20',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
]

const _bytecode =
  '0x608060405234801561001057600080fd5b50612969806100206000396000f3fe6080604052600436106101405760003560e01c80636e2b89c5116100b6578063c3a8962c1161006f578063c3a8962c1461076a578063cb184d0e146107a5578063d2256c66146107ee578063f3e414f814610837578063f4f3b20014610870578063fbef861b146108a357610140565b80636e2b89c5146105aa57806374c6eccc146105dd5780638b7010aa14610668578063a0ef91df146106b1578063bca22b76146106c6578063bd4fbb361461070f57610140565b806344c75b7f1161010857806344c75b7f1461039f57806345a53f091461042a5780634d2301cc146104815780635bd21290146104c65780635cc96efa146104f4578063659e42cd1461056f57610140565b80630220168114610145578063072fd2bb146101915780630758fb0a146102ae57806321e2f2fa1461033957806333f2ac421461036c575b600080fd5b34801561015157600080fd5b506101786004803603602081101561016857600080fd5b50356001600160a01b031661092e565b6040805192835260208301919091528051918290030190f35b34801561019d57600080fd5b506102ac600480360360608110156101b457600080fd5b810190602081018135600160201b8111156101ce57600080fd5b8201836020820111156101e057600080fd5b803590602001918460018302840111600160201b8311171561020157600080fd5b919390929091602081019035600160201b81111561021e57600080fd5b82018360208201111561023057600080fd5b803590602001918460208302840111600160201b8311171561025157600080fd5b919390929091602081019035600160201b81111561026e57600080fd5b82018360208201111561028057600080fd5b803590602001918460208302840111600160201b831117156102a157600080fd5b509092509050610954565b005b3480156102ba57600080fd5b506102e9600480360360408110156102d157600080fd5b506001600160a01b0381358116916020013516610a1c565b60408051602080825283518183015283519192839290830191858101910280838360005b8381101561032557818101518382015260200161030d565b505050509050019250505060405180910390f35b34801561034557600080fd5b506102ac6004803603602081101561035c57600080fd5b50356001600160a01b0316610ae2565b34801561037857600080fd5b506102e96004803603602081101561038f57600080fd5b50356001600160a01b0316610b98565b3480156103ab57600080fd5b506102ac600480360360408110156103c257600080fd5b6001600160a01b038235169190810190604081016020820135600160201b8111156103ec57600080fd5b8201836020820111156103fe57600080fd5b803590602001918460018302840111600160201b8311171561041f57600080fd5b509092509050610c5b565b34801561043657600080fd5b5061046d6004803603606081101561044d57600080fd5b506001600160a01b03813581169160208101359091169060400135610cad565b604080519115158252519081900360200190f35b34801561048d57600080fd5b506104b4600480360360208110156104a457600080fd5b50356001600160a01b0316610d2d565b60408051918252519081900360200190f35b6102ac600480360360408110156104dc57600080fd5b506001600160a01b0381358116916020013516610d48565b34801561050057600080fd5b506102ac6004803603602081101561051757600080fd5b810190602081018135600160201b81111561053157600080fd5b82018360208201111561054357600080fd5b803590602001918460018302840111600160201b8311171561056457600080fd5b509092509050610d8e565b34801561057b57600080fd5b5061046d6004803603604081101561059257600080fd5b506001600160a01b0381358116916020013516610dd1565b3480156105b657600080fd5b506102e9600480360360208110156105cd57600080fd5b50356001600160a01b0316610dff565b3480156105e957600080fd5b506102ac6004803603604081101561060057600080fd5b6001600160a01b038235169190810190604081016020820135600160201b81111561062a57600080fd5b82018360208201111561063c57600080fd5b803590602001918460018302840111600160201b8311171561065d57600080fd5b509092509050610eb6565b34801561067457600080fd5b506102ac6004803603608081101561068b57600080fd5b506001600160a01b03813581169160208101358216916040820135169060600135610ef9565b3480156106bd57600080fd5b506102ac610f60565b3480156106d257600080fd5b506102ac600480360360808110156106e957600080fd5b506001600160a01b03813581169160208101358216916040820135169060600135610fab565b34801561071b57600080fd5b5061074e6004803603606081101561073257600080fd5b506001600160a01b03813516906020810135906040013561100c565b604080516001600160a01b039092168252519081900360200190f35b34801561077657600080fd5b506104b46004803603604081101561078d57600080fd5b506001600160a01b0381358116916020013516611077565b3480156107b157600080fd5b506102ac600480360360808110156107c857600080fd5b506001600160a01b038135811691602081013582169160408201351690606001356110de565b3480156107fa57600080fd5b506102ac6004803603608081101561081157600080fd5b506001600160a01b038135811691602081013590911690604081013590606001356110e9565b34801561084357600080fd5b506102ac6004803603604081101561085a57600080fd5b506001600160a01b03813516906020013561120c565b34801561087c57600080fd5b506102ac6004803603602081101561089357600080fd5b50356001600160a01b03166112bc565b3480156108af57600080fd5b506102ac600480360360408110156108c657600080fd5b6001600160a01b038235169190810190604081016020820135600160201b8111156108f057600080fd5b82018360208201111561090257600080fd5b803590602001918460018302840111600160201b8311171561092357600080fd5b509092509050611389565b6001600160a01b038116600090815260056020526040902080546001909101545b915091565b60008061095f6127ea565b8360005b81811015610a0e5760005b89898381811061097a57fe5b90506020020135811015610a05576109c98c8c8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250899250611442915050565b91975095509350856109e057505050505050610a14565b6109fd8888848181106109ef57fe5b90506020020135828661152e565b60010161096e565b50600101610963565b50505050505b505050505050565b6001600160a01b0380821660009081526003602090815260408083209386168352908390529020546060919080610a655750506040805160008152602081019091529050610adc565b816001016001820381548110610a7757fe5b9060005260206000209060030201600201805480602002602001604051908101604052809291908181526020018280548015610ad257602002820191906000526020600020905b815481526020019060010190808311610abe575b5050505050925050505b92915050565b6000610aee8233611077565b9050610afb33838361175c565b610b365760405162461bcd60e51b815260040180806020018281038252602e815260200180612907602e913960400191505060405180910390fd5b604080516340c10f1960e01b81523360048201526024810183905290516001600160a01b038416916340c10f1991604480830192600092919082900301818387803b158015610b8457600080fd5b505af1158015610a14573d6000803e3d6000fd5b6001600160a01b038116600090815260036020908152604091829020600181015483518181528184028101909301909352606092909183918015610be6578160200160208202803883390190505b50805190915060005b81811015610c5157836001018181548110610c0657fe5b600091825260209091206003909102015483516001600160a01b0390911690849083908110610c3157fe5b6001600160a01b0390921660209283029190910190910152600101610bef565b5090949350505050565b610c6533846118ed565b610ca88360053385858080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061192492505050565b505050565b6001600160a01b03808316600090815260036020908152604080832093871683529083905281205490919080610ce857600092505050610d26565b816001016001820381548110610cfa57fe5b906000526020600020906003020160010160008581526020019081526020016000205460001415925050505b9392505050565b6001600160a01b031660009081526002602052604090205490565b610d51826119fb565b604080516001600160a01b038316602082015234818301528151808203830181526060909101909152610d8a9083906000903390611924565b5050565b610d8a3360043385858080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061192492505050565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205460ff1690565b6001600160a01b03811660009081526020818152604091829020600181015483518181528184028101909301909352606092909183918015610e4b578160200160208202803883390190505b50805190915060005b81811015610c5157836001018181548110610e6b57fe5b600091825260209091206002909102015483516001600160a01b0390911690849083908110610e9657fe5b6001600160a01b0390921660209283029190910190910152600101610e54565b610ca88360033385858080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061192492505050565b610f04838583611a1a565b610f5a846002338660601b6001600160601b0319168660601b6001600160601b03191686604051602001808481526020018381526020018281526020019350505050604051602081830303815290604052611924565b50505050565b6000610f6b33610d2d565b3360008181526002602052604080822082905551929350909183156108fc0291849190818181858888f19350505050158015610d8a573d6000803e3d6000fd5b610fb6838583611a91565b610f5a846001338660601b6001600160601b0319168660601b6001600160601b03191686604051602001808481526020018381526020018281526020019350505050604051602081830303815290604052611924565b604080516020808201859052818301849052606086811b6001600160601b03191690830152825180830360540181526074909201835281519181019190912060009081526004909152908120546001600160a01b0316806110705784915050610d26565b9050610d26565b6001600160a01b03808216600090815260208181526040808320938616835290839052812054909190806110b057600092505050610adc565b8160010160018203815481106110c257fe5b9060005260206000209060020201600101549250505092915050565b610fb6838583611b1e565b60006110f685848461100c565b9050336001600160a01b0382161461114e576040805162461bcd60e51b815260206004820152601660248201527526bab9ba103132903830bcb6b2b73a1037bbb732b91760511b604482015290519081900360640190fd5b604080516020808201869052818301859052606088811b6001600160601b031916908301528251808303605401815260748301808552815191830191909120600090815260049092529083902080546001600160a01b0319166001600160a01b03898116918217909255918790526094830186905280891660b4840152841660d483015260f482015290517fb6cb19e71486466b0282ce82fd31a015b7c00f7d67cddc0da09cccfa58c6438391610114908290030190a15050505050565b611217338383611c6b565b611268576040805162461bcd60e51b815260206004820152601860248201527f57616c6c657420646f65736e2774206f776e20746f6b656e0000000000000000604482015290519081900360640190fd5b60408051632142170760e11b81523060048201523360248201526044810183905290516001600160a01b038416916342842e0e91606480830192600092919082900301818387803b158015610b8457600080fd5b60006112c88233611077565b90506112d533838361175c565b6113105760405162461bcd60e51b815260040180806020018281038252602e815260200180612907602e913960400191505060405180910390fd5b6040805163a9059cbb60e01b81523360048201526024810183905290516001600160a01b0384169163a9059cbb9160448083019260209291908290030181600087803b15801561135f57600080fd5b505af1158015611373573d6000803e3d6000fd5b505050506040513d6020811015610f5a57600080fd5b3332146113cb576040805162461bcd60e51b815260206004820152600b60248201526a6f726967696e206f6e6c7960a81b604482015290519081900360640190fd5b60006113f68460033386866040518083838082843760405192018290039091209350611ed392505050565b60408051828152905191925033916003916001600160a01b038816917fe923069519faf69b0726ed766a213f61b6f07f2ecf11d55582cc440d8806b0bc9181900360200190a450505050565b60008061144d6127ea565b839150600085838151811061145e57fe5b016020015160019093019260f81c9050611476611f27565b60030160ff168160ff1614611492575060009250839150611527565b600061149e8785611f2d565b91965094509050846114b95750600093508492506115279050565b60ff8116835260006114cb8886611f2d565b91975095509050856114e7575060009450859350611527915050565b6001600160a01b03811660208501526115008886611faa565b604087015290965094508561151f575060009450859350611527915050565b506001945050505b9250925092565b805160ff16611598576000611541612809565b61154e8360400151612201565b915091508161155e575050610ca8565b600061156f8260000151878761100c565b90506115808260000151878761225d565b61158f338284602001516122b9565b50505050610ca8565b805160ff16600114156116355760006115af612820565b6115bc8360400151612317565b91509150816115cc575050610ca8565b60006115dd8260200151878761100c565b90506115ee8260200151878761225d565b81516115fa9033610dd1565b1561161957611613338284600001518560400151612394565b5061162d565b61158f3382846000015185604001516123e0565b505050610ca8565b805160ff166002141561169f57600061164c612820565b6116598360400151612317565b9150915081611669575050610ca8565b600061167a8260200151878761100c565b905061168b8260200151878761225d565b61158f33828460000151856040015161240f565b805160ff1660051415610ca85780602001516001600160a01b03167fa98915d9854858ea787b0abcd4e8e3a96802bc19a25474a8b7017a303628e44482604001516040518080602001828103825283818151815260200191508051906020019080838360005b8381101561171d578181015183820152602001611705565b50505050905090810190601f16801561174a5780820380516001836020036101000a031916815260200191505b509250505060405180910390a2505050565b60008161176b57506001610d26565b6001600160a01b03808516600090815260208181526040808320938716835290839052902054806117a157600092505050610d26565b60008260010160018303815481106117b557fe5b9060005260206000209060020201905080600101548511156117dd5760009350505050610d26565b600181018054869003908190556118e0576001830180548391859160009190600019810190811061180a57fe5b600091825260208083206002909202909101546001600160a01b03168352820192909252604001902055600183018054600019810190811061184857fe5b906000526020600020906002020183600101600184038154811061186857fe5b60009182526020808320845460029093020180546001600160a01b0319166001600160a01b03938416178155600194850154908501559089168252859052604081205583018054806118b657fe5b60008281526020812060026000199093019283020180546001600160a01b03191681556001015590555b5060019695505050505050565b6001600160a01b0391821660009081526001602081815260408084209490951683529290925291909120805460ff19169091179055565b60006119398585858580519060200120611ed3565b9050826001600160a01b03168460ff16866001600160a01b03167f35e48d636f39df5c5ca2278452d6d89bf9f07c2ff15f46d08aa402c46638b88284866040518083815260200180602001828103825283818151815260200191508051906020019080838360005b838110156119b95781810151838201526020016119a1565b50505050905090810190601f1680156119e65780820380516001836020036101000a031916815260200191505b50935050505060405180910390a45050505050565b6001600160a01b03166000908152600260205260409020805434019055565b604080516323b872dd60e01b81523360048201523060248201526044810183905290516001600160a01b038516916323b872dd91606480830192600092919082900301818387803b158015611a6e57600080fd5b505af1158015611a82573d6000803e3d6000fd5b50505050610ca882848361242f565b604080516323b872dd60e01b81523360048201523060248201526044810183905290516001600160a01b038516916323b872dd9160648083019260209291908290030181600087803b158015611ae657600080fd5b505af1158015611afa573d6000803e3d6000fd5b505050506040513d6020811015611b1057600080fd5b50610ca890508284836125b3565b611b288383610dd1565b611b79576040805162461bcd60e51b815260206004820152601760248201527f6d7573742062652070616972656420636f6e7472616374000000000000000000604482015290519081900360640190fd5b604080516323b872dd60e01b81523360048201523060248201526044810183905290516001600160a01b038516916323b872dd9160648083019260209291908290030181600087803b158015611bce57600080fd5b505af1158015611be2573d6000803e3d6000fd5b505050506040513d6020811015611bf857600080fd5b505060408051632770a7eb60e21b81523060048201526024810183905290516001600160a01b03851691639dc29fac91604480830192600092919082900301818387803b158015611c4857600080fd5b505af1158015611c5c573d6000803e3d6000fd5b50505050610ca88284836125b3565b6001600160a01b03808416600090815260036020908152604080832093861683529083905281205490919080611ca657600092505050610d26565b6000826001016001830381548110611cba57fe5b600091825260208083208884526001600390930201918201905260409091205490915080611cef576000945050505050610d26565b60028201805482916001850191600091906000198101908110611d0e57fe5b600091825260208083209091015483528201929092526040019020556002820180546000198101908110611d3e57fe5b9060005260206000200154826002016001830381548110611d5b57fe5b600091825260208083209091019290925587815260018401909152604081205560028201805480611d8857fe5b6000828152602081208201600019908101919091550190556002820154611ec55760018401805484918691600091906000198101908110611dc557fe5b600091825260208083206003909202909101546001600160a01b031683528201929092526040019020556001840180546000198101908110611e0357fe5b9060005260206000209060030201846001016001850381548110611e2357fe5b60009182526020909120825460039092020180546001600160a01b0319166001600160a01b0390921691909117815560028083018054611e669284019190612840565b5050506001600160a01b03871660009081526020859052604081205560018401805480611e8f57fe5b60008281526020812060036000199093019283020180546001600160a01b031916815590611ec06002830182612890565b505090555b506001979650505050505050565b6001600160a01b03841660009081526005602052604081206001808201540182611f0187874342868a612688565b9050611f118360000154826126f1565b835550600190910181905590505b949350505050565b60035b90565b6000806000808551905084811080611f4757506021858203105b80611f6f5750611f5561271d565b60ff16868681518110611f6457fe5b016020015160f81c14155b15611f84575060009250839150829050611527565b600160218601611f9c8888840163ffffffff61272216565b935093509350509250925092565b60008060606000611fbb868661273e565b9195509350905083611fd1575060009250611527565b60208104601f8216600081611fe7576000611fea565b60015b60ff168301905060608360405190808252806020026020018201604052801561201d578160200160208202803883390190505b5090506060836040519080825280601f01601f19166020018201604052801561204d576020820181803883390190505b5090506000805b848110156121185760006120688e8c61273e565b919d509b5090508b612087575060009a50611527975050505050505050565b811580156120955750600087115b156120e8578060005b888110156120e1578181602081106120b257fe5b1a60f81b8682815181106120c257fe5b60200101906001600160f81b031916908160001a90535060010161209e565b505061210f565b8060001b858460018b0303815181106120fd57fe5b60209081029190910101526001909201915b50600101612054565b5060006121258d8b6127a0565b909a509050612132611f27565b60ff168160ff16146121505750600099506115279650505050505050565b60018a858560405160200180838051906020019060200280838360005b8381101561218557818101518382015260200161216d565b5050505090500182805190602001908083835b602083106121b75780518252601f199092019160209182019101612198565b6001836020036101000a038019825116818451168082178552505050505050905001925050506040516020818303038152906040529a509a509a5050505050505050509250925092565b600061220b612809565b60348351101561221e576000915061094f565b600c612230848263ffffffff6127c716565b6001600160a01b0316825260140161224e848263ffffffff61272216565b60208301525060019150915091565b60408051602080820194909452808201929092526001600160601b0319606094851b16938201939093528251605481830301815260749091018352805190820120600090815260049091522080546001600160a01b0319169055565b6001600160a01b0383166000908152600260205260408120548211156122e157506000610d26565b506001600160a01b0392831660009081526002602052604080822080548490039055929093168352912080549091019055600190565b6000612321612820565b604883511015612334576000915061094f565b600c612346848263ffffffff6127c716565b6001600160a01b03168252602001612364848263ffffffff6127c716565b6001600160a01b03166020830152601401612385848263ffffffff61272216565b60408301525060019150915091565b6000806123a18487611077565b9050828110156123bc576123b686858361175c565b506123c9565b6123c786858561175c565b505b6123d48585856125b3565b50600195945050505050565b60006123ed85848461175c565b6123f957506000611f1f565b6124048484846125b3565b506001949350505050565b600061241c858484611c6b565b61242857506000611f1f565b6124048484845b6001600160a01b038084166000908152600360209081526040808320938616835290839052902054806124ef576040805180820182526001600160a01b0386811682528251600080825260208083019095528484019182526001878101805491820180825590835291869020855160039092020180546001600160a01b031916919094161783559051805191946124ce926002850192909101906128b1565b5050506001600160a01b038516600090815260208490526040902081905590505b600082600101600183038154811061250357fe5b906000526020600020906003020190508060010160008581526020019081526020016000205460001461257d576040805162461bcd60e51b815260206004820152601d60248201527f63616e27742061646420616c7265616479206f776e656420746f6b656e000000604482015290519081900360640190fd5b60028101805460018181018355600083815260208082209093018890559254968352909201909152604090209290925550505050565b806125bd57610ca8565b6001600160a01b038084166000908152602081815260408083209386168352908390529020548061265457506040805180820182526001600160a01b0385811680835260006020808501828152600188810180548083018083559186528486209851600290910290980180546001600160a01b03191698909716979097178655905194019390935590815290849052919091208190555b8282600101600183038154811061266757fe5b60009182526020909120600160029092020101805490910190555050505050565b6040805160f89790971b6001600160f81b03191660208089019190915260609690961b6001600160601b03191660218801526035870194909452605586019290925260758501526095808501919091528151808503909101815260b59093019052815191012090565b604080516020808201949094528082019290925280518083038201815260609092019052805191012090565b600090565b6000816020018351101561273557600080fd5b50016020015190565b60008060008061274e86866127a0565b909350905061275b611f27565b60020160ff168160ff1614612774575060009250611527565b61277e8684611f2d565b9195509350915083612794575060009250611527565b50600192509250925092565b600080826001018484815181106127b357fe5b016020015190925060f81c90509250929050565b600081601401835110156127da57600080fd5b500160200151600160601b900490565b6040805160608082018352600080835260208301529181019190915290565b604080518082019091526000808252602082015290565b604080516060810182526000808252602082018190529181019190915290565b8280548282559060005260206000209081019282156128805760005260206000209182015b82811115612880578254825591600101919060010190612865565b5061288c9291506128ec565b5090565b50805460008255906000526020600020908101906128ae91906128ec565b50565b828054828255906000526020600020908101928215612880579160200282015b828111156128805782518255916020019190600101906128d1565b611f2a91905b8082111561288c57600081556001016128f256fe57616c6c657420646f65736e2774206f776e2073756666696369656e742062616c616e6365206f6620746f6b656ea265627a7a7231582015997d4893170b3e5da2b9b1b642e6f867cb467dcd6c18d676e5497c083d47e464736f6c63430005110032'
