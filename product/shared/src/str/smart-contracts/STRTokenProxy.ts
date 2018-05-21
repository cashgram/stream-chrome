export const STRTokenProxy = {
  contract_name: 'STRTokenProxy',
  abi: [
    {
      constant: true,
      inputs: [],
      name: 'implementation',
      outputs: [
        {
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          name: 'newAdmin',
          type: 'address',
        },
      ],
      name: 'changeAdmin',
      outputs: [],
      payable: false,
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          name: 'newImplementation',
          type: 'address',
        },
        {
          name: 'data',
          type: 'bytes32',
        },
      ],
      name: 'changeTokenImplementation',
      outputs: [],
      payable: false,
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'admin',
      outputs: [
        {
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      type: 'function',
    },
    {
      inputs: [
        {
          name: '_admin',
          type: 'address',
        },
        {
          name: '_implementation',
          type: 'address',
        },
      ],
      payable: false,
      type: 'constructor',
    },
    {
      payable: true,
      type: 'fallback',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          name: 'previous',
          type: 'address',
        },
        {
          indexed: false,
          name: 'current',
          type: 'address',
        },
      ],
      name: 'ImplementationChanged',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          name: 'previous',
          type: 'address',
        },
        {
          indexed: false,
          name: 'current',
          type: 'address',
        },
      ],
      name: 'AdminChanged',
      type: 'event',
    },
  ],
  unlinked_binary: '0x60606040526000600255341561001457600080fd5b60405160408061054483398101604052808051919060200180519150505b600160a060020a038216151561004757600080fd5b60018054600160a060020a031916600160a060020a03841617905561007a81600064010000000061008281026102d21704565b5b505061017d565b610098826401000000006102c361016e82021704565b15156100a357600080fd5b60008054600160a060020a031916600160a060020a038481169190911791829055166040517f6d69677261746553746f72616765286279746573333229000000000000000000815260170160405180910390207c01000000000000000000000000000000000000000000000000000000009004826040517c010000000000000000000000000000000000000000000000000000000063ffffffff841602815260048101919091526024016000604051808303818661646e5a03f492505050151561016957fe5b5b5050565b6000813b908111905b50919050565b6103b88061018c6000396000f300606060405236156100465763ffffffff60e060020a6000350416635c60da1b81146100915780638f283970146100c0578063e95182d8146100e1578063f851a44014610105575b5b6000805461008e91600160a060020a039091169036806020601f82018190048102016040519081016040528181529291906020840183838082843750610134945050505050565b5b005b341561009c57600080fd5b6100a4610179565b604051600160a060020a03909116815260200160405180910390f35b34156100cb57600080fd5b61008e600160a060020a0360043516610189565b005b34156100ec57600080fd5b61008e600160a060020a0360043516602435610237565b005b341561011057600080fd5b6100a46102b3565b604051600160a060020a03909116815260200160405180910390f35b61013d826102c3565b151561014857600080fd5b600080825160208401856127105a03f43d604051816000823e82801561016c578282f35b8282fd5b505050505b5050565b600054600160a060020a03165b90565b60015433600160a060020a039081169116146101a457600080fd5b600160a060020a03811615156101b957600080fd5b6001547f7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f90600160a060020a031682604051600160a060020a039283168152911660208201526040908101905180910390a16001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0383161790555b50565b60015433600160a060020a0390811691161461025257600080fd5b6000547fcfbf4028add9318bbf716f08c348595afb063b0e9feed1f86d33681a4b3ed4d390600160a060020a031683604051600160a060020a039283168152911660208201526040908101905180910390a161017582826102d2565b5b5050565b600154600160a060020a03165b90565b6000813b908111905b50919050565b6102db826102c3565b15156102e657600080fd5b6000805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a038481169190911791829055166040517f6d69677261746553746f726167652862797465733332290000000000000000008152601701604051809103902060e060020a90048260405160e060020a63ffffffff841602815260048101919091526024016000604051808303818661646e5a03f492505050151561017557fe5b5b50505600a165627a7a723058203e6253ce2ec1b4aa86d56469c120af0a4f8bd5619c63ba65d6fa61dde4ee428f0029',
  networks: {},
  schema_version: '0.0.5',
  updated_at: 1515134312396,
}