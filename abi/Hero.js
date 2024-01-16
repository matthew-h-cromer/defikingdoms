export default [
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'facetAddress',
            type: 'address'
          },
          {
            internalType: 'enum IDiamondCut.FacetCutAction',
            name: 'action',
            type: 'uint8'
          },
          {
            internalType: 'bytes4[]',
            name: 'functionSelectors',
            type: 'bytes4[]'
          }
        ],
        indexed: false,
        internalType: 'struct IDiamondCut.FacetCut[]',
        name: '_diamondCut',
        type: 'tuple[]'
      },
      {
        indexed: false,
        internalType: 'address',
        name: '_init',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: '_calldata',
        type: 'bytes'
      }
    ],
    name: 'DiamondCut',
    type: 'event'
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'facetAddress',
            type: 'address'
          },
          {
            internalType: 'enum IDiamondCut.FacetCutAction',
            name: 'action',
            type: 'uint8'
          },
          {
            internalType: 'bytes4[]',
            name: 'functionSelectors',
            type: 'bytes4[]'
          }
        ],
        internalType: 'struct IDiamondCut.FacetCut[]',
        name: '_diamondCut',
        type: 'tuple[]'
      },
      {
        internalType: 'address',
        name: '_init',
        type: 'address'
      },
      {
        internalType: 'bytes',
        name: '_calldata',
        type: 'bytes'
      }
    ],
    name: 'diamondCut',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'bytes4',
        name: '_functionSelector',
        type: 'bytes4'
      }
    ],
    name: 'facetAddress',
    outputs: [
      {
        internalType: 'address',
        name: 'facetAddress_',
        type: 'address'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'facetAddresses',
    outputs: [
      {
        internalType: 'address[]',
        name: 'facetAddresses_',
        type: 'address[]'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_facet',
        type: 'address'
      }
    ],
    name: 'facetFunctionSelectors',
    outputs: [
      {
        internalType: 'bytes4[]',
        name: 'facetFunctionSelectors_',
        type: 'bytes4[]'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'facets',
    outputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'facetAddress',
            type: 'address'
          },
          {
            internalType: 'bytes4[]',
            name: 'functionSelectors',
            type: 'bytes4[]'
          }
        ],
        internalType: 'struct IDiamondLoupe.Facet[]',
        name: 'facets_',
        type: 'tuple[]'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'bytes4',
        name: '_interfaceId',
        type: 'bytes4'
      }
    ],
    name: 'supportsInterface',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address'
      }
    ],
    name: 'OwnershipTransferred',
    type: 'event'
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: 'owner_',
        type: 'address'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_newOwner',
        type: 'address'
      }
    ],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'approved',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256'
      }
    ],
    name: 'Approval',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'operator',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'approved',
        type: 'bool'
      }
    ],
    name: 'ApprovalForAll',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'heroId',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'summonerId',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'assistantId',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'statGenes',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'visualGenes',
        type: 'uint256'
      }
    ],
    name: 'HeroDarkSummoned',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'heroId',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'staminaFullAt',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint64',
        name: 'xp',
        type: 'uint64'
      },
      {
        indexed: false,
        internalType: 'uint16',
        name: 'fishing',
        type: 'uint16'
      },
      {
        indexed: false,
        internalType: 'uint16',
        name: 'foraging',
        type: 'uint16'
      },
      {
        indexed: false,
        internalType: 'uint16',
        name: 'gardening',
        type: 'uint16'
      },
      {
        indexed: false,
        internalType: 'uint16',
        name: 'mining',
        type: 'uint16'
      }
    ],
    name: 'HeroQuestCompleteUpdated',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'heroId',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'quest',
        type: 'address'
      }
    ],
    name: 'HeroQuestUpdated',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'heroId',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'staminaFullAt',
        type: 'uint256'
      }
    ],
    name: 'HeroStaminaFullAtUpdated',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'heroId',
        type: 'uint256'
      },
      {
        components: [
          {
            internalType: 'uint256',
            name: 'staminaFullAt',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'hpFullAt',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'mpFullAt',
            type: 'uint256'
          },
          {
            internalType: 'uint16',
            name: 'level',
            type: 'uint16'
          },
          {
            internalType: 'uint64',
            name: 'xp',
            type: 'uint64'
          },
          {
            internalType: 'address',
            name: 'currentQuest',
            type: 'address'
          },
          {
            internalType: 'uint8',
            name: 'sp',
            type: 'uint8'
          },
          {
            internalType: 'enum HeroStatus',
            name: 'status',
            type: 'uint8'
          }
        ],
        indexed: false,
        internalType: 'struct HeroState',
        name: 'heroState',
        type: 'tuple'
      }
    ],
    name: 'HeroStateUpdated',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'heroId',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'summonerId',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'assistantId',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'statGenes',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'visualGenes',
        type: 'uint256'
      }
    ],
    name: 'HeroSummoned',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'heroId',
        type: 'uint256'
      },
      {
        components: [
          {
            internalType: 'uint256',
            name: 'id',
            type: 'uint256'
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'summonedTime',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'nextSummonTime',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'summonerId',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'assistantId',
                type: 'uint256'
              },
              {
                internalType: 'uint32',
                name: 'summons',
                type: 'uint32'
              },
              {
                internalType: 'uint32',
                name: 'maxSummons',
                type: 'uint32'
              }
            ],
            internalType: 'struct SummoningInfo',
            name: 'summoningInfo',
            type: 'tuple'
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'statGenes',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'visualGenes',
                type: 'uint256'
              },
              {
                internalType: 'enum Rarity',
                name: 'rarity',
                type: 'uint8'
              },
              {
                internalType: 'bool',
                name: 'shiny',
                type: 'bool'
              },
              {
                internalType: 'uint16',
                name: 'generation',
                type: 'uint16'
              },
              {
                internalType: 'uint32',
                name: 'firstName',
                type: 'uint32'
              },
              {
                internalType: 'uint32',
                name: 'lastName',
                type: 'uint32'
              },
              {
                internalType: 'uint8',
                name: 'shinyStyle',
                type: 'uint8'
              },
              {
                internalType: 'uint8',
                name: 'class',
                type: 'uint8'
              },
              {
                internalType: 'uint8',
                name: 'subClass',
                type: 'uint8'
              }
            ],
            internalType: 'struct HeroInfo',
            name: 'info',
            type: 'tuple'
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'staminaFullAt',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'hpFullAt',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'mpFullAt',
                type: 'uint256'
              },
              {
                internalType: 'uint16',
                name: 'level',
                type: 'uint16'
              },
              {
                internalType: 'uint64',
                name: 'xp',
                type: 'uint64'
              },
              {
                internalType: 'address',
                name: 'currentQuest',
                type: 'address'
              },
              {
                internalType: 'uint8',
                name: 'sp',
                type: 'uint8'
              },
              {
                internalType: 'enum HeroStatus',
                name: 'status',
                type: 'uint8'
              }
            ],
            internalType: 'struct HeroState',
            name: 'state',
            type: 'tuple'
          },
          {
            components: [
              {
                internalType: 'uint16',
                name: 'strength',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'intelligence',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'wisdom',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'luck',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'agility',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'vitality',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'endurance',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'dexterity',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'hp',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'mp',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'stamina',
                type: 'uint16'
              }
            ],
            internalType: 'struct HeroStats',
            name: 'stats',
            type: 'tuple'
          },
          {
            components: [
              {
                internalType: 'uint16',
                name: 'strength',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'intelligence',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'wisdom',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'luck',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'agility',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'vitality',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'endurance',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'dexterity',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'hpSm',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'hpRg',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'hpLg',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'mpSm',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'mpRg',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'mpLg',
                type: 'uint16'
              }
            ],
            internalType: 'struct HeroStatGrowth',
            name: 'primaryStatGrowth',
            type: 'tuple'
          },
          {
            components: [
              {
                internalType: 'uint16',
                name: 'strength',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'intelligence',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'wisdom',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'luck',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'agility',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'vitality',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'endurance',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'dexterity',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'hpSm',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'hpRg',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'hpLg',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'mpSm',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'mpRg',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'mpLg',
                type: 'uint16'
              }
            ],
            internalType: 'struct HeroStatGrowth',
            name: 'secondaryStatGrowth',
            type: 'tuple'
          },
          {
            components: [
              {
                internalType: 'uint16',
                name: 'mining',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'gardening',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'foraging',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'fishing',
                type: 'uint16'
              }
            ],
            internalType: 'struct HeroProfessions',
            name: 'professions',
            type: 'tuple'
          }
        ],
        indexed: false,
        internalType: 'struct Hero',
        name: 'hero',
        type: 'tuple'
      }
    ],
    name: 'HeroUpdated',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'heroId',
        type: 'uint256'
      },
      {
        components: [
          {
            internalType: 'uint256',
            name: 'id',
            type: 'uint256'
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'summonedTime',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'nextSummonTime',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'summonerId',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'assistantId',
                type: 'uint256'
              },
              {
                internalType: 'uint32',
                name: 'summons',
                type: 'uint32'
              },
              {
                internalType: 'uint32',
                name: 'maxSummons',
                type: 'uint32'
              }
            ],
            internalType: 'struct SummoningInfo',
            name: 'summoningInfo',
            type: 'tuple'
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'statGenes',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'visualGenes',
                type: 'uint256'
              },
              {
                internalType: 'enum Rarity',
                name: 'rarity',
                type: 'uint8'
              },
              {
                internalType: 'bool',
                name: 'shiny',
                type: 'bool'
              },
              {
                internalType: 'uint16',
                name: 'generation',
                type: 'uint16'
              },
              {
                internalType: 'uint32',
                name: 'firstName',
                type: 'uint32'
              },
              {
                internalType: 'uint32',
                name: 'lastName',
                type: 'uint32'
              },
              {
                internalType: 'uint8',
                name: 'shinyStyle',
                type: 'uint8'
              },
              {
                internalType: 'uint8',
                name: 'class',
                type: 'uint8'
              },
              {
                internalType: 'uint8',
                name: 'subClass',
                type: 'uint8'
              }
            ],
            internalType: 'struct HeroInfo',
            name: 'info',
            type: 'tuple'
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'staminaFullAt',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'hpFullAt',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'mpFullAt',
                type: 'uint256'
              },
              {
                internalType: 'uint16',
                name: 'level',
                type: 'uint16'
              },
              {
                internalType: 'uint64',
                name: 'xp',
                type: 'uint64'
              },
              {
                internalType: 'address',
                name: 'currentQuest',
                type: 'address'
              },
              {
                internalType: 'uint8',
                name: 'sp',
                type: 'uint8'
              },
              {
                internalType: 'enum HeroStatus',
                name: 'status',
                type: 'uint8'
              }
            ],
            internalType: 'struct HeroState',
            name: 'state',
            type: 'tuple'
          },
          {
            components: [
              {
                internalType: 'uint16',
                name: 'strength',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'intelligence',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'wisdom',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'luck',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'agility',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'vitality',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'endurance',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'dexterity',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'hp',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'mp',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'stamina',
                type: 'uint16'
              }
            ],
            internalType: 'struct HeroStats',
            name: 'stats',
            type: 'tuple'
          },
          {
            components: [
              {
                internalType: 'uint16',
                name: 'strength',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'intelligence',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'wisdom',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'luck',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'agility',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'vitality',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'endurance',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'dexterity',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'hpSm',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'hpRg',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'hpLg',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'mpSm',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'mpRg',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'mpLg',
                type: 'uint16'
              }
            ],
            internalType: 'struct HeroStatGrowth',
            name: 'primaryStatGrowth',
            type: 'tuple'
          },
          {
            components: [
              {
                internalType: 'uint16',
                name: 'strength',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'intelligence',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'wisdom',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'luck',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'agility',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'vitality',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'endurance',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'dexterity',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'hpSm',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'hpRg',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'hpLg',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'mpSm',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'mpRg',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'mpLg',
                type: 'uint16'
              }
            ],
            internalType: 'struct HeroStatGrowth',
            name: 'secondaryStatGrowth',
            type: 'tuple'
          },
          {
            components: [
              {
                internalType: 'uint16',
                name: 'mining',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'gardening',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'foraging',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'fishing',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'craft1',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'craft2',
                type: 'uint16'
              }
            ],
            internalType: 'struct HeroProfessionsV2',
            name: 'professions',
            type: 'tuple'
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'equippedSlots',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'petId',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'weapon1Id',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'weapon2Id',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'offhand1Id',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'offhand2Id',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'armorId',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'accessoryId',
                type: 'uint256'
              }
            ],
            internalType: 'struct HeroEquipment',
            name: 'equipment',
            type: 'tuple'
          }
        ],
        indexed: false,
        internalType: 'struct HeroV2',
        name: 'hero',
        type: 'tuple'
      }
    ],
    name: 'HeroUpdatedV2',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'heroId',
        type: 'uint256'
      },
      {
        components: [
          {
            internalType: 'uint256',
            name: 'id',
            type: 'uint256'
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'summonedTime',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'nextSummonTime',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'summonerId',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'assistantId',
                type: 'uint256'
              },
              {
                internalType: 'uint32',
                name: 'summons',
                type: 'uint32'
              },
              {
                internalType: 'uint32',
                name: 'maxSummons',
                type: 'uint32'
              }
            ],
            internalType: 'struct SummoningInfo',
            name: 'summoningInfo',
            type: 'tuple'
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'statGenes',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'visualGenes',
                type: 'uint256'
              },
              {
                internalType: 'enum Rarity',
                name: 'rarity',
                type: 'uint8'
              },
              {
                internalType: 'bool',
                name: 'shiny',
                type: 'bool'
              },
              {
                internalType: 'uint16',
                name: 'generation',
                type: 'uint16'
              },
              {
                internalType: 'uint32',
                name: 'firstName',
                type: 'uint32'
              },
              {
                internalType: 'uint32',
                name: 'lastName',
                type: 'uint32'
              },
              {
                internalType: 'uint8',
                name: 'shinyStyle',
                type: 'uint8'
              },
              {
                internalType: 'uint8',
                name: 'class',
                type: 'uint8'
              },
              {
                internalType: 'uint8',
                name: 'subClass',
                type: 'uint8'
              }
            ],
            internalType: 'struct HeroInfo',
            name: 'info',
            type: 'tuple'
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'staminaFullAt',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'hpFullAt',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'mpFullAt',
                type: 'uint256'
              },
              {
                internalType: 'uint16',
                name: 'level',
                type: 'uint16'
              },
              {
                internalType: 'uint64',
                name: 'xp',
                type: 'uint64'
              },
              {
                internalType: 'address',
                name: 'currentQuest',
                type: 'address'
              },
              {
                internalType: 'uint8',
                name: 'sp',
                type: 'uint8'
              },
              {
                internalType: 'enum HeroStatus',
                name: 'status',
                type: 'uint8'
              }
            ],
            internalType: 'struct HeroState',
            name: 'state',
            type: 'tuple'
          },
          {
            components: [
              {
                internalType: 'uint16',
                name: 'strength',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'intelligence',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'wisdom',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'luck',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'agility',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'vitality',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'endurance',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'dexterity',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'hp',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'mp',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'stamina',
                type: 'uint16'
              }
            ],
            internalType: 'struct HeroStats',
            name: 'stats',
            type: 'tuple'
          },
          {
            components: [
              {
                internalType: 'uint16',
                name: 'strength',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'intelligence',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'wisdom',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'luck',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'agility',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'vitality',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'endurance',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'dexterity',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'hpSm',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'hpRg',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'hpLg',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'mpSm',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'mpRg',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'mpLg',
                type: 'uint16'
              }
            ],
            internalType: 'struct HeroStatGrowth',
            name: 'primaryStatGrowth',
            type: 'tuple'
          },
          {
            components: [
              {
                internalType: 'uint16',
                name: 'strength',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'intelligence',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'wisdom',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'luck',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'agility',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'vitality',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'endurance',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'dexterity',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'hpSm',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'hpRg',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'hpLg',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'mpSm',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'mpRg',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'mpLg',
                type: 'uint16'
              }
            ],
            internalType: 'struct HeroStatGrowth',
            name: 'secondaryStatGrowth',
            type: 'tuple'
          },
          {
            components: [
              {
                internalType: 'uint16',
                name: 'mining',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'gardening',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'foraging',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'fishing',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'craft1',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'craft2',
                type: 'uint16'
              }
            ],
            internalType: 'struct HeroProfessionsV2',
            name: 'professions',
            type: 'tuple'
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'equippedSlots',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'petId',
                type: 'uint256'
              },
              {
                internalType: 'uint128',
                name: 'weapon1Id',
                type: 'uint128'
              },
              {
                internalType: 'uint128',
                name: 'weapon1VisageId',
                type: 'uint128'
              },
              {
                internalType: 'uint128',
                name: 'weapon2Id',
                type: 'uint128'
              },
              {
                internalType: 'uint128',
                name: 'weapon2VisageId',
                type: 'uint128'
              },
              {
                internalType: 'uint128',
                name: 'offhand1Id',
                type: 'uint128'
              },
              {
                internalType: 'uint128',
                name: 'offhand1VisageId',
                type: 'uint128'
              },
              {
                internalType: 'uint128',
                name: 'offhand2Id',
                type: 'uint128'
              },
              {
                internalType: 'uint128',
                name: 'offhand2VisageId',
                type: 'uint128'
              },
              {
                internalType: 'uint128',
                name: 'armorId',
                type: 'uint128'
              },
              {
                internalType: 'uint128',
                name: 'armorVisageId',
                type: 'uint128'
              },
              {
                internalType: 'uint128',
                name: 'accessoryId',
                type: 'uint128'
              },
              {
                internalType: 'uint128',
                name: 'accessoryVisageId',
                type: 'uint128'
              }
            ],
            internalType: 'struct HeroEquipmentV2',
            name: 'equipment',
            type: 'tuple'
          }
        ],
        indexed: false,
        internalType: 'struct HeroV3',
        name: 'hero',
        type: 'tuple'
      }
    ],
    name: 'HeroUpdatedV3',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint8',
        name: 'version',
        type: 'uint8'
      }
    ],
    name: 'Initialized',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'account',
        type: 'address'
      }
    ],
    name: 'Paused',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32'
      },
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'previousAdminRole',
        type: 'bytes32'
      },
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'newAdminRole',
        type: 'bytes32'
      }
    ],
    name: 'RoleAdminChanged',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'account',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address'
      }
    ],
    name: 'RoleGranted',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'account',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address'
      }
    ],
    name: 'RoleRevoked',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256'
      }
    ],
    name: 'Transfer',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'account',
        type: 'address'
      }
    ],
    name: 'Unpaused',
    type: 'event'
  },
  {
    inputs: [],
    name: 'BRIDGE_ROLE',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'DEFAULT_ADMIN_ROLE',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'HERO_MODERATOR_ROLE',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'MINTER_ROLE',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'MODERATOR_ROLE',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'accessoryCoreAddress',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'to',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256'
      }
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'armorCoreAddress',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address'
      }
    ],
    name: 'balanceOf',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_id',
        type: 'uint256'
      },
      {
        internalType: 'address',
        name: '_to',
        type: 'address'
      }
    ],
    name: 'bridgeMint',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256'
      }
    ],
    name: 'getApproved',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32'
      }
    ],
    name: 'getRoleAdmin',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32'
      },
      {
        internalType: 'address',
        name: 'account',
        type: 'address'
      }
    ],
    name: 'grantRole',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32'
      },
      {
        internalType: 'address',
        name: 'account',
        type: 'address'
      }
    ],
    name: 'hasRole',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address'
      },
      {
        internalType: 'address',
        name: 'operator',
        type: 'address'
      }
    ],
    name: 'isApprovedForAll',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_from',
        type: 'address'
      },
      {
        internalType: 'address',
        name: '_newOwner',
        type: 'address'
      },
      {
        internalType: 'uint256[]',
        name: 'heroIds',
        type: 'uint256[]'
      }
    ],
    name: 'multiSafeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'name',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'nextHeroId',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256'
      }
    ],
    name: 'ownerOf',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'pause',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'paused',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'petCoreAddress',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32'
      },
      {
        internalType: 'address',
        name: 'account',
        type: 'address'
      }
    ],
    name: 'renounceRole',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32'
      },
      {
        internalType: 'address',
        name: 'account',
        type: 'address'
      }
    ],
    name: 'revokeRole',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'from',
        type: 'address'
      },
      {
        internalType: 'address',
        name: 'to',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256'
      }
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'from',
        type: 'address'
      },
      {
        internalType: 'address',
        name: 'to',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256'
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes'
      }
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_address',
        type: 'address'
      }
    ],
    name: 'setAccessoryCoreAddress',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'operator',
        type: 'address'
      },
      {
        internalType: 'bool',
        name: 'approved',
        type: 'bool'
      }
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_address',
        type: 'address'
      }
    ],
    name: 'setArmorCoreAddress',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_address',
        type: 'address'
      }
    ],
    name: 'setPetCoreAddress',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_address',
        type: 'address'
      }
    ],
    name: 'setWeaponCoreAddress',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'symbol',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'index',
        type: 'uint256'
      }
    ],
    name: 'tokenByIndex',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: 'index',
        type: 'uint256'
      }
    ],
    name: 'tokenOfOwnerByIndex',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256'
      }
    ],
    name: 'tokenURI',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'totalSupply',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'from',
        type: 'address'
      },
      {
        internalType: 'address',
        name: 'to',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256'
      }
    ],
    name: 'transferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'unpause',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'weaponCoreAddress',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'heroId',
        type: 'uint256'
      },
      {
        components: [
          {
            internalType: 'uint256',
            name: 'equippedSlots',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'petId',
            type: 'uint256'
          },
          {
            internalType: 'uint128',
            name: 'weapon1Id',
            type: 'uint128'
          },
          {
            internalType: 'uint128',
            name: 'weapon1VisageId',
            type: 'uint128'
          },
          {
            internalType: 'uint128',
            name: 'weapon2Id',
            type: 'uint128'
          },
          {
            internalType: 'uint128',
            name: 'weapon2VisageId',
            type: 'uint128'
          },
          {
            internalType: 'uint128',
            name: 'offhand1Id',
            type: 'uint128'
          },
          {
            internalType: 'uint128',
            name: 'offhand1VisageId',
            type: 'uint128'
          },
          {
            internalType: 'uint128',
            name: 'offhand2Id',
            type: 'uint128'
          },
          {
            internalType: 'uint128',
            name: 'offhand2VisageId',
            type: 'uint128'
          },
          {
            internalType: 'uint128',
            name: 'armorId',
            type: 'uint128'
          },
          {
            internalType: 'uint128',
            name: 'armorVisageId',
            type: 'uint128'
          },
          {
            internalType: 'uint128',
            name: 'accessoryId',
            type: 'uint128'
          },
          {
            internalType: 'uint128',
            name: 'accessoryVisageId',
            type: 'uint128'
          }
        ],
        indexed: false,
        internalType: 'struct HeroEquipmentV2',
        name: 'equipment',
        type: 'tuple'
      }
    ],
    name: 'HeroEquipmentSetV2',
    type: 'event'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_statGenes',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: '_visualGenes',
        type: 'uint256'
      },
      {
        internalType: 'enum Rarity',
        name: '_rarity',
        type: 'uint8'
      },
      {
        internalType: 'bool',
        name: '_shiny',
        type: 'bool'
      },
      {
        components: [
          {
            internalType: 'address',
            name: 'owner',
            type: 'address'
          },
          {
            internalType: 'uint256',
            name: 'summonerId',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'assistantId',
            type: 'uint256'
          },
          {
            internalType: 'uint16',
            name: 'generation',
            type: 'uint16'
          },
          {
            internalType: 'uint256',
            name: 'createdBlock',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'heroId',
            type: 'uint256'
          },
          {
            internalType: 'uint8',
            name: 'summonerTears',
            type: 'uint8'
          },
          {
            internalType: 'uint8',
            name: 'assistantTears',
            type: 'uint8'
          },
          {
            internalType: 'address',
            name: 'enhancementStone',
            type: 'address'
          },
          {
            internalType: 'uint32',
            name: 'maxSummons',
            type: 'uint32'
          },
          {
            internalType: 'uint32',
            name: 'firstName',
            type: 'uint32'
          },
          {
            internalType: 'uint32',
            name: 'lastName',
            type: 'uint32'
          },
          {
            internalType: 'uint8',
            name: 'shinyStyle',
            type: 'uint8'
          },
          {
            internalType: 'bool',
            name: 'darkSummoned',
            type: 'bool'
          },
          {
            internalType: 'uint8',
            name: 'rarityBonusCharges',
            type: 'uint8'
          }
        ],
        internalType: 'struct HeroCrystal',
        name: '_crystal',
        type: 'tuple'
      },
      {
        internalType: 'uint256',
        name: '_crystalId',
        type: 'uint256'
      }
    ],
    name: 'createHero',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_id',
        type: 'uint256'
      },
      {
        internalType: 'uint8',
        name: '_stat',
        type: 'uint8'
      }
    ],
    name: 'getHeroDuelInfo',
    outputs: [
      {
        components: [
          {
            internalType: 'uint16',
            name: 'statValue',
            type: 'uint16'
          },
          {
            internalType: 'uint8',
            name: 'class',
            type: 'uint8'
          },
          {
            internalType: 'uint8',
            name: 'subClass',
            type: 'uint8'
          },
          {
            internalType: 'uint8',
            name: 'element',
            type: 'uint8'
          },
          {
            internalType: 'uint8',
            name: 'background',
            type: 'uint8'
          }
        ],
        internalType: 'struct HeroDuelInfo',
        name: 'heroDuelInfo',
        type: 'tuple'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256[]',
        name: '_ids',
        type: 'uint256[]'
      },
      {
        internalType: 'uint8[]',
        name: '_stats',
        type: 'uint8[]'
      }
    ],
    name: 'getHeroDuelInfos',
    outputs: [
      {
        components: [
          {
            internalType: 'uint16',
            name: 'statValue',
            type: 'uint16'
          },
          {
            internalType: 'uint8',
            name: 'class',
            type: 'uint8'
          },
          {
            internalType: 'uint8',
            name: 'subClass',
            type: 'uint8'
          },
          {
            internalType: 'uint8',
            name: 'element',
            type: 'uint8'
          },
          {
            internalType: 'uint8',
            name: 'background',
            type: 'uint8'
          }
        ],
        internalType: 'struct HeroDuelInfo[]',
        name: 'heroDuelInfos',
        type: 'tuple[]'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_id',
        type: 'uint256'
      }
    ],
    name: 'getHeroDuelSnapshot',
    outputs: [
      {
        components: [
          {
            components: [
              {
                internalType: 'uint16',
                name: 'strength',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'intelligence',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'wisdom',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'luck',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'agility',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'vitality',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'endurance',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'dexterity',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'hp',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'mp',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'stamina',
                type: 'uint16'
              }
            ],
            internalType: 'struct HeroStats',
            name: 'stats',
            type: 'tuple'
          },
          {
            internalType: 'uint8',
            name: 'class',
            type: 'uint8'
          },
          {
            internalType: 'uint8',
            name: 'subClass',
            type: 'uint8'
          },
          {
            internalType: 'uint8',
            name: 'element',
            type: 'uint8'
          },
          {
            internalType: 'uint8',
            name: 'background',
            type: 'uint8'
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'equippedSlots',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'petId',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'weapon1Id',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'weapon2Id',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'offhand1Id',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'offhand2Id',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'armorId',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'accessoryId',
                type: 'uint256'
              }
            ],
            internalType: 'struct HeroEquipment',
            name: 'equipment',
            type: 'tuple'
          }
        ],
        internalType: 'struct HeroDuelSnapshot',
        name: 'heroDuelSnapshot',
        type: 'tuple'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256[]',
        name: '_ids',
        type: 'uint256[]'
      }
    ],
    name: 'getHeroDuelSnapshots',
    outputs: [
      {
        components: [
          {
            components: [
              {
                internalType: 'uint16',
                name: 'strength',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'intelligence',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'wisdom',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'luck',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'agility',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'vitality',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'endurance',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'dexterity',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'hp',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'mp',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'stamina',
                type: 'uint16'
              }
            ],
            internalType: 'struct HeroStats',
            name: 'stats',
            type: 'tuple'
          },
          {
            internalType: 'uint8',
            name: 'class',
            type: 'uint8'
          },
          {
            internalType: 'uint8',
            name: 'subClass',
            type: 'uint8'
          },
          {
            internalType: 'uint8',
            name: 'element',
            type: 'uint8'
          },
          {
            internalType: 'uint8',
            name: 'background',
            type: 'uint8'
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'equippedSlots',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'petId',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'weapon1Id',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'weapon2Id',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'offhand1Id',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'offhand2Id',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'armorId',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'accessoryId',
                type: 'uint256'
              }
            ],
            internalType: 'struct HeroEquipment',
            name: 'equipment',
            type: 'tuple'
          }
        ],
        internalType: 'struct HeroDuelSnapshot[]',
        name: 'heroDuelSnapshots',
        type: 'tuple[]'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'heroId',
        type: 'uint256'
      },
      {
        components: [
          {
            internalType: 'uint256',
            name: 'equippedSlots',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'petId',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'weapon1Id',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'weapon2Id',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'offhand1Id',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'offhand2Id',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'armorId',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'accessoryId',
            type: 'uint256'
          }
        ],
        indexed: false,
        internalType: 'struct HeroEquipment',
        name: 'equipment',
        type: 'tuple'
      }
    ],
    name: 'HeroEquipmentSet',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'heroId',
        type: 'uint256'
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'petId',
        type: 'uint256'
      }
    ],
    name: 'PetEquipped',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'heroId',
        type: 'uint256'
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'petId',
        type: 'uint256'
      }
    ],
    name: 'PetUnequipped',
    type: 'event'
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'heroId',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'equipmentId',
            type: 'uint256'
          },
          {
            internalType: 'enum HeroEquipmentSlot',
            name: 'slot',
            type: 'uint8'
          }
        ],
        internalType: 'struct HeroChangeEquipmentInput',
        name: '_input',
        type: 'tuple'
      }
    ],
    name: 'changeEquipment',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'heroId',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'equipmentId',
            type: 'uint256'
          },
          {
            internalType: 'enum HeroEquipmentSlot',
            name: 'slot',
            type: 'uint8'
          }
        ],
        internalType: 'struct HeroChangeEquipmentInput',
        name: '_input',
        type: 'tuple'
      },
      {
        internalType: 'address',
        name: '_account',
        type: 'address'
      }
    ],
    name: 'changeEquipmentOnBehalf',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'heroId',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'equipmentId',
            type: 'uint256'
          },
          {
            internalType: 'enum HeroEquipmentSlot',
            name: 'slot',
            type: 'uint8'
          }
        ],
        internalType: 'struct HeroChangeEquipmentInput[]',
        name: '_inputs',
        type: 'tuple[]'
      }
    ],
    name: 'multiChangeEquipment',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_from',
        type: 'address'
      },
      {
        internalType: 'address',
        name: '_newOwner',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: '_heroId',
        type: 'uint256'
      }
    ],
    name: 'removeVisagesAndTransferHeroAndEquipmentFrom',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_heroId',
        type: 'uint256'
      },
      {
        internalType: 'address',
        name: '_account',
        type: 'address'
      }
    ],
    name: 'unequipEverythingOnBehalf',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_id',
        type: 'uint256'
      }
    ],
    name: 'getHeroEquipmentV2',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'equippedSlots',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'petId',
            type: 'uint256'
          },
          {
            internalType: 'uint128',
            name: 'weapon1Id',
            type: 'uint128'
          },
          {
            internalType: 'uint128',
            name: 'weapon1VisageId',
            type: 'uint128'
          },
          {
            internalType: 'uint128',
            name: 'weapon2Id',
            type: 'uint128'
          },
          {
            internalType: 'uint128',
            name: 'weapon2VisageId',
            type: 'uint128'
          },
          {
            internalType: 'uint128',
            name: 'offhand1Id',
            type: 'uint128'
          },
          {
            internalType: 'uint128',
            name: 'offhand1VisageId',
            type: 'uint128'
          },
          {
            internalType: 'uint128',
            name: 'offhand2Id',
            type: 'uint128'
          },
          {
            internalType: 'uint128',
            name: 'offhand2VisageId',
            type: 'uint128'
          },
          {
            internalType: 'uint128',
            name: 'armorId',
            type: 'uint128'
          },
          {
            internalType: 'uint128',
            name: 'armorVisageId',
            type: 'uint128'
          },
          {
            internalType: 'uint128',
            name: 'accessoryId',
            type: 'uint128'
          },
          {
            internalType: 'uint128',
            name: 'accessoryVisageId',
            type: 'uint128'
          }
        ],
        internalType: 'struct HeroEquipmentV2',
        name: '',
        type: 'tuple'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_id',
        type: 'uint256'
      }
    ],
    name: 'getHeroInfo',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'statGenes',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'visualGenes',
            type: 'uint256'
          },
          {
            internalType: 'enum Rarity',
            name: 'rarity',
            type: 'uint8'
          },
          {
            internalType: 'bool',
            name: 'shiny',
            type: 'bool'
          },
          {
            internalType: 'uint16',
            name: 'generation',
            type: 'uint16'
          },
          {
            internalType: 'uint32',
            name: 'firstName',
            type: 'uint32'
          },
          {
            internalType: 'uint32',
            name: 'lastName',
            type: 'uint32'
          },
          {
            internalType: 'uint8',
            name: 'shinyStyle',
            type: 'uint8'
          },
          {
            internalType: 'uint8',
            name: 'class',
            type: 'uint8'
          },
          {
            internalType: 'uint8',
            name: 'subClass',
            type: 'uint8'
          }
        ],
        internalType: 'struct HeroInfo',
        name: '',
        type: 'tuple'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_id',
        type: 'uint256'
      }
    ],
    name: 'getHeroPrimaryStatGrowth',
    outputs: [
      {
        components: [
          {
            internalType: 'uint16',
            name: 'strength',
            type: 'uint16'
          },
          {
            internalType: 'uint16',
            name: 'intelligence',
            type: 'uint16'
          },
          {
            internalType: 'uint16',
            name: 'wisdom',
            type: 'uint16'
          },
          {
            internalType: 'uint16',
            name: 'luck',
            type: 'uint16'
          },
          {
            internalType: 'uint16',
            name: 'agility',
            type: 'uint16'
          },
          {
            internalType: 'uint16',
            name: 'vitality',
            type: 'uint16'
          },
          {
            internalType: 'uint16',
            name: 'endurance',
            type: 'uint16'
          },
          {
            internalType: 'uint16',
            name: 'dexterity',
            type: 'uint16'
          },
          {
            internalType: 'uint16',
            name: 'hpSm',
            type: 'uint16'
          },
          {
            internalType: 'uint16',
            name: 'hpRg',
            type: 'uint16'
          },
          {
            internalType: 'uint16',
            name: 'hpLg',
            type: 'uint16'
          },
          {
            internalType: 'uint16',
            name: 'mpSm',
            type: 'uint16'
          },
          {
            internalType: 'uint16',
            name: 'mpRg',
            type: 'uint16'
          },
          {
            internalType: 'uint16',
            name: 'mpLg',
            type: 'uint16'
          }
        ],
        internalType: 'struct HeroStatGrowth',
        name: '',
        type: 'tuple'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_id',
        type: 'uint256'
      }
    ],
    name: 'getHeroProfessionsV2',
    outputs: [
      {
        components: [
          {
            internalType: 'uint16',
            name: 'mining',
            type: 'uint16'
          },
          {
            internalType: 'uint16',
            name: 'gardening',
            type: 'uint16'
          },
          {
            internalType: 'uint16',
            name: 'foraging',
            type: 'uint16'
          },
          {
            internalType: 'uint16',
            name: 'fishing',
            type: 'uint16'
          },
          {
            internalType: 'uint16',
            name: 'craft1',
            type: 'uint16'
          },
          {
            internalType: 'uint16',
            name: 'craft2',
            type: 'uint16'
          }
        ],
        internalType: 'struct HeroProfessionsV2',
        name: '',
        type: 'tuple'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_id',
        type: 'uint256'
      }
    ],
    name: 'getHeroSecondaryStatGrowth',
    outputs: [
      {
        components: [
          {
            internalType: 'uint16',
            name: 'strength',
            type: 'uint16'
          },
          {
            internalType: 'uint16',
            name: 'intelligence',
            type: 'uint16'
          },
          {
            internalType: 'uint16',
            name: 'wisdom',
            type: 'uint16'
          },
          {
            internalType: 'uint16',
            name: 'luck',
            type: 'uint16'
          },
          {
            internalType: 'uint16',
            name: 'agility',
            type: 'uint16'
          },
          {
            internalType: 'uint16',
            name: 'vitality',
            type: 'uint16'
          },
          {
            internalType: 'uint16',
            name: 'endurance',
            type: 'uint16'
          },
          {
            internalType: 'uint16',
            name: 'dexterity',
            type: 'uint16'
          },
          {
            internalType: 'uint16',
            name: 'hpSm',
            type: 'uint16'
          },
          {
            internalType: 'uint16',
            name: 'hpRg',
            type: 'uint16'
          },
          {
            internalType: 'uint16',
            name: 'hpLg',
            type: 'uint16'
          },
          {
            internalType: 'uint16',
            name: 'mpSm',
            type: 'uint16'
          },
          {
            internalType: 'uint16',
            name: 'mpRg',
            type: 'uint16'
          },
          {
            internalType: 'uint16',
            name: 'mpLg',
            type: 'uint16'
          }
        ],
        internalType: 'struct HeroStatGrowth',
        name: '',
        type: 'tuple'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_id',
        type: 'uint256'
      }
    ],
    name: 'getHeroState',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'staminaFullAt',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'hpFullAt',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'mpFullAt',
            type: 'uint256'
          },
          {
            internalType: 'uint16',
            name: 'level',
            type: 'uint16'
          },
          {
            internalType: 'uint64',
            name: 'xp',
            type: 'uint64'
          },
          {
            internalType: 'address',
            name: 'currentQuest',
            type: 'address'
          },
          {
            internalType: 'uint8',
            name: 'sp',
            type: 'uint8'
          },
          {
            internalType: 'enum HeroStatus',
            name: 'status',
            type: 'uint8'
          }
        ],
        internalType: 'struct HeroState',
        name: '',
        type: 'tuple'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_id',
        type: 'uint256'
      }
    ],
    name: 'getHeroStats',
    outputs: [
      {
        components: [
          {
            internalType: 'uint16',
            name: 'strength',
            type: 'uint16'
          },
          {
            internalType: 'uint16',
            name: 'intelligence',
            type: 'uint16'
          },
          {
            internalType: 'uint16',
            name: 'wisdom',
            type: 'uint16'
          },
          {
            internalType: 'uint16',
            name: 'luck',
            type: 'uint16'
          },
          {
            internalType: 'uint16',
            name: 'agility',
            type: 'uint16'
          },
          {
            internalType: 'uint16',
            name: 'vitality',
            type: 'uint16'
          },
          {
            internalType: 'uint16',
            name: 'endurance',
            type: 'uint16'
          },
          {
            internalType: 'uint16',
            name: 'dexterity',
            type: 'uint16'
          },
          {
            internalType: 'uint16',
            name: 'hp',
            type: 'uint16'
          },
          {
            internalType: 'uint16',
            name: 'mp',
            type: 'uint16'
          },
          {
            internalType: 'uint16',
            name: 'stamina',
            type: 'uint16'
          }
        ],
        internalType: 'struct HeroStats',
        name: '',
        type: 'tuple'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_id',
        type: 'uint256'
      }
    ],
    name: 'getHeroSummoningInfo',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'summonedTime',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'nextSummonTime',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'summonerId',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'assistantId',
            type: 'uint256'
          },
          {
            internalType: 'uint32',
            name: 'summons',
            type: 'uint32'
          },
          {
            internalType: 'uint32',
            name: 'maxSummons',
            type: 'uint32'
          }
        ],
        internalType: 'struct SummoningInfo',
        name: '',
        type: 'tuple'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_id',
        type: 'uint256'
      }
    ],
    name: 'getHeroV3',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'id',
            type: 'uint256'
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'summonedTime',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'nextSummonTime',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'summonerId',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'assistantId',
                type: 'uint256'
              },
              {
                internalType: 'uint32',
                name: 'summons',
                type: 'uint32'
              },
              {
                internalType: 'uint32',
                name: 'maxSummons',
                type: 'uint32'
              }
            ],
            internalType: 'struct SummoningInfo',
            name: 'summoningInfo',
            type: 'tuple'
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'statGenes',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'visualGenes',
                type: 'uint256'
              },
              {
                internalType: 'enum Rarity',
                name: 'rarity',
                type: 'uint8'
              },
              {
                internalType: 'bool',
                name: 'shiny',
                type: 'bool'
              },
              {
                internalType: 'uint16',
                name: 'generation',
                type: 'uint16'
              },
              {
                internalType: 'uint32',
                name: 'firstName',
                type: 'uint32'
              },
              {
                internalType: 'uint32',
                name: 'lastName',
                type: 'uint32'
              },
              {
                internalType: 'uint8',
                name: 'shinyStyle',
                type: 'uint8'
              },
              {
                internalType: 'uint8',
                name: 'class',
                type: 'uint8'
              },
              {
                internalType: 'uint8',
                name: 'subClass',
                type: 'uint8'
              }
            ],
            internalType: 'struct HeroInfo',
            name: 'info',
            type: 'tuple'
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'staminaFullAt',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'hpFullAt',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'mpFullAt',
                type: 'uint256'
              },
              {
                internalType: 'uint16',
                name: 'level',
                type: 'uint16'
              },
              {
                internalType: 'uint64',
                name: 'xp',
                type: 'uint64'
              },
              {
                internalType: 'address',
                name: 'currentQuest',
                type: 'address'
              },
              {
                internalType: 'uint8',
                name: 'sp',
                type: 'uint8'
              },
              {
                internalType: 'enum HeroStatus',
                name: 'status',
                type: 'uint8'
              }
            ],
            internalType: 'struct HeroState',
            name: 'state',
            type: 'tuple'
          },
          {
            components: [
              {
                internalType: 'uint16',
                name: 'strength',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'intelligence',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'wisdom',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'luck',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'agility',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'vitality',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'endurance',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'dexterity',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'hp',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'mp',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'stamina',
                type: 'uint16'
              }
            ],
            internalType: 'struct HeroStats',
            name: 'stats',
            type: 'tuple'
          },
          {
            components: [
              {
                internalType: 'uint16',
                name: 'strength',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'intelligence',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'wisdom',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'luck',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'agility',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'vitality',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'endurance',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'dexterity',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'hpSm',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'hpRg',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'hpLg',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'mpSm',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'mpRg',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'mpLg',
                type: 'uint16'
              }
            ],
            internalType: 'struct HeroStatGrowth',
            name: 'primaryStatGrowth',
            type: 'tuple'
          },
          {
            components: [
              {
                internalType: 'uint16',
                name: 'strength',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'intelligence',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'wisdom',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'luck',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'agility',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'vitality',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'endurance',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'dexterity',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'hpSm',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'hpRg',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'hpLg',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'mpSm',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'mpRg',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'mpLg',
                type: 'uint16'
              }
            ],
            internalType: 'struct HeroStatGrowth',
            name: 'secondaryStatGrowth',
            type: 'tuple'
          },
          {
            components: [
              {
                internalType: 'uint16',
                name: 'mining',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'gardening',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'foraging',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'fishing',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'craft1',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'craft2',
                type: 'uint16'
              }
            ],
            internalType: 'struct HeroProfessionsV2',
            name: 'professions',
            type: 'tuple'
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'equippedSlots',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'petId',
                type: 'uint256'
              },
              {
                internalType: 'uint128',
                name: 'weapon1Id',
                type: 'uint128'
              },
              {
                internalType: 'uint128',
                name: 'weapon1VisageId',
                type: 'uint128'
              },
              {
                internalType: 'uint128',
                name: 'weapon2Id',
                type: 'uint128'
              },
              {
                internalType: 'uint128',
                name: 'weapon2VisageId',
                type: 'uint128'
              },
              {
                internalType: 'uint128',
                name: 'offhand1Id',
                type: 'uint128'
              },
              {
                internalType: 'uint128',
                name: 'offhand1VisageId',
                type: 'uint128'
              },
              {
                internalType: 'uint128',
                name: 'offhand2Id',
                type: 'uint128'
              },
              {
                internalType: 'uint128',
                name: 'offhand2VisageId',
                type: 'uint128'
              },
              {
                internalType: 'uint128',
                name: 'armorId',
                type: 'uint128'
              },
              {
                internalType: 'uint128',
                name: 'armorVisageId',
                type: 'uint128'
              },
              {
                internalType: 'uint128',
                name: 'accessoryId',
                type: 'uint128'
              },
              {
                internalType: 'uint128',
                name: 'accessoryVisageId',
                type: 'uint128'
              }
            ],
            internalType: 'struct HeroEquipmentV2',
            name: 'equipment',
            type: 'tuple'
          }
        ],
        internalType: 'struct HeroV3',
        name: '',
        type: 'tuple'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256[]',
        name: '_ids',
        type: 'uint256[]'
      }
    ],
    name: 'getHeroesV3',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'id',
            type: 'uint256'
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'summonedTime',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'nextSummonTime',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'summonerId',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'assistantId',
                type: 'uint256'
              },
              {
                internalType: 'uint32',
                name: 'summons',
                type: 'uint32'
              },
              {
                internalType: 'uint32',
                name: 'maxSummons',
                type: 'uint32'
              }
            ],
            internalType: 'struct SummoningInfo',
            name: 'summoningInfo',
            type: 'tuple'
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'statGenes',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'visualGenes',
                type: 'uint256'
              },
              {
                internalType: 'enum Rarity',
                name: 'rarity',
                type: 'uint8'
              },
              {
                internalType: 'bool',
                name: 'shiny',
                type: 'bool'
              },
              {
                internalType: 'uint16',
                name: 'generation',
                type: 'uint16'
              },
              {
                internalType: 'uint32',
                name: 'firstName',
                type: 'uint32'
              },
              {
                internalType: 'uint32',
                name: 'lastName',
                type: 'uint32'
              },
              {
                internalType: 'uint8',
                name: 'shinyStyle',
                type: 'uint8'
              },
              {
                internalType: 'uint8',
                name: 'class',
                type: 'uint8'
              },
              {
                internalType: 'uint8',
                name: 'subClass',
                type: 'uint8'
              }
            ],
            internalType: 'struct HeroInfo',
            name: 'info',
            type: 'tuple'
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'staminaFullAt',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'hpFullAt',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'mpFullAt',
                type: 'uint256'
              },
              {
                internalType: 'uint16',
                name: 'level',
                type: 'uint16'
              },
              {
                internalType: 'uint64',
                name: 'xp',
                type: 'uint64'
              },
              {
                internalType: 'address',
                name: 'currentQuest',
                type: 'address'
              },
              {
                internalType: 'uint8',
                name: 'sp',
                type: 'uint8'
              },
              {
                internalType: 'enum HeroStatus',
                name: 'status',
                type: 'uint8'
              }
            ],
            internalType: 'struct HeroState',
            name: 'state',
            type: 'tuple'
          },
          {
            components: [
              {
                internalType: 'uint16',
                name: 'strength',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'intelligence',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'wisdom',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'luck',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'agility',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'vitality',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'endurance',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'dexterity',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'hp',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'mp',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'stamina',
                type: 'uint16'
              }
            ],
            internalType: 'struct HeroStats',
            name: 'stats',
            type: 'tuple'
          },
          {
            components: [
              {
                internalType: 'uint16',
                name: 'strength',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'intelligence',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'wisdom',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'luck',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'agility',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'vitality',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'endurance',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'dexterity',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'hpSm',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'hpRg',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'hpLg',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'mpSm',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'mpRg',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'mpLg',
                type: 'uint16'
              }
            ],
            internalType: 'struct HeroStatGrowth',
            name: 'primaryStatGrowth',
            type: 'tuple'
          },
          {
            components: [
              {
                internalType: 'uint16',
                name: 'strength',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'intelligence',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'wisdom',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'luck',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'agility',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'vitality',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'endurance',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'dexterity',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'hpSm',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'hpRg',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'hpLg',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'mpSm',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'mpRg',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'mpLg',
                type: 'uint16'
              }
            ],
            internalType: 'struct HeroStatGrowth',
            name: 'secondaryStatGrowth',
            type: 'tuple'
          },
          {
            components: [
              {
                internalType: 'uint16',
                name: 'mining',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'gardening',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'foraging',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'fishing',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'craft1',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'craft2',
                type: 'uint16'
              }
            ],
            internalType: 'struct HeroProfessionsV2',
            name: 'professions',
            type: 'tuple'
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'equippedSlots',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'petId',
                type: 'uint256'
              },
              {
                internalType: 'uint128',
                name: 'weapon1Id',
                type: 'uint128'
              },
              {
                internalType: 'uint128',
                name: 'weapon1VisageId',
                type: 'uint128'
              },
              {
                internalType: 'uint128',
                name: 'weapon2Id',
                type: 'uint128'
              },
              {
                internalType: 'uint128',
                name: 'weapon2VisageId',
                type: 'uint128'
              },
              {
                internalType: 'uint128',
                name: 'offhand1Id',
                type: 'uint128'
              },
              {
                internalType: 'uint128',
                name: 'offhand1VisageId',
                type: 'uint128'
              },
              {
                internalType: 'uint128',
                name: 'offhand2Id',
                type: 'uint128'
              },
              {
                internalType: 'uint128',
                name: 'offhand2VisageId',
                type: 'uint128'
              },
              {
                internalType: 'uint128',
                name: 'armorId',
                type: 'uint128'
              },
              {
                internalType: 'uint128',
                name: 'armorVisageId',
                type: 'uint128'
              },
              {
                internalType: 'uint128',
                name: 'accessoryId',
                type: 'uint128'
              },
              {
                internalType: 'uint128',
                name: 'accessoryVisageId',
                type: 'uint128'
              }
            ],
            internalType: 'struct HeroEquipmentV2',
            name: 'equipment',
            type: 'tuple'
          }
        ],
        internalType: 'struct HeroV3[]',
        name: '',
        type: 'tuple[]'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_address',
        type: 'address'
      }
    ],
    name: 'getUserHeroes',
    outputs: [
      {
        internalType: 'uint256[]',
        name: '',
        type: 'uint256[]'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256[]',
        name: '_heroIds',
        type: 'uint256[]'
      },
      {
        internalType: 'address',
        name: '_address',
        type: 'address'
      }
    ],
    name: 'heroesAreOwnedByAddress',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_id',
        type: 'uint256'
      }
    ],
    name: 'getHero',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'id',
            type: 'uint256'
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'summonedTime',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'nextSummonTime',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'summonerId',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'assistantId',
                type: 'uint256'
              },
              {
                internalType: 'uint32',
                name: 'summons',
                type: 'uint32'
              },
              {
                internalType: 'uint32',
                name: 'maxSummons',
                type: 'uint32'
              }
            ],
            internalType: 'struct SummoningInfo',
            name: 'summoningInfo',
            type: 'tuple'
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'statGenes',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'visualGenes',
                type: 'uint256'
              },
              {
                internalType: 'enum Rarity',
                name: 'rarity',
                type: 'uint8'
              },
              {
                internalType: 'bool',
                name: 'shiny',
                type: 'bool'
              },
              {
                internalType: 'uint16',
                name: 'generation',
                type: 'uint16'
              },
              {
                internalType: 'uint32',
                name: 'firstName',
                type: 'uint32'
              },
              {
                internalType: 'uint32',
                name: 'lastName',
                type: 'uint32'
              },
              {
                internalType: 'uint8',
                name: 'shinyStyle',
                type: 'uint8'
              },
              {
                internalType: 'uint8',
                name: 'class',
                type: 'uint8'
              },
              {
                internalType: 'uint8',
                name: 'subClass',
                type: 'uint8'
              }
            ],
            internalType: 'struct HeroInfo',
            name: 'info',
            type: 'tuple'
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'staminaFullAt',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'hpFullAt',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'mpFullAt',
                type: 'uint256'
              },
              {
                internalType: 'uint16',
                name: 'level',
                type: 'uint16'
              },
              {
                internalType: 'uint64',
                name: 'xp',
                type: 'uint64'
              },
              {
                internalType: 'address',
                name: 'currentQuest',
                type: 'address'
              },
              {
                internalType: 'uint8',
                name: 'sp',
                type: 'uint8'
              },
              {
                internalType: 'enum HeroStatus',
                name: 'status',
                type: 'uint8'
              }
            ],
            internalType: 'struct HeroState',
            name: 'state',
            type: 'tuple'
          },
          {
            components: [
              {
                internalType: 'uint16',
                name: 'strength',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'intelligence',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'wisdom',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'luck',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'agility',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'vitality',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'endurance',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'dexterity',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'hp',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'mp',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'stamina',
                type: 'uint16'
              }
            ],
            internalType: 'struct HeroStats',
            name: 'stats',
            type: 'tuple'
          },
          {
            components: [
              {
                internalType: 'uint16',
                name: 'strength',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'intelligence',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'wisdom',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'luck',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'agility',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'vitality',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'endurance',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'dexterity',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'hpSm',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'hpRg',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'hpLg',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'mpSm',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'mpRg',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'mpLg',
                type: 'uint16'
              }
            ],
            internalType: 'struct HeroStatGrowth',
            name: 'primaryStatGrowth',
            type: 'tuple'
          },
          {
            components: [
              {
                internalType: 'uint16',
                name: 'strength',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'intelligence',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'wisdom',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'luck',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'agility',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'vitality',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'endurance',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'dexterity',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'hpSm',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'hpRg',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'hpLg',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'mpSm',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'mpRg',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'mpLg',
                type: 'uint16'
              }
            ],
            internalType: 'struct HeroStatGrowth',
            name: 'secondaryStatGrowth',
            type: 'tuple'
          },
          {
            components: [
              {
                internalType: 'uint16',
                name: 'mining',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'gardening',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'foraging',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'fishing',
                type: 'uint16'
              }
            ],
            internalType: 'struct HeroProfessions',
            name: 'professions',
            type: 'tuple'
          }
        ],
        internalType: 'struct Hero',
        name: '',
        type: 'tuple'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'id',
            type: 'uint256'
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'summonedTime',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'nextSummonTime',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'summonerId',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'assistantId',
                type: 'uint256'
              },
              {
                internalType: 'uint32',
                name: 'summons',
                type: 'uint32'
              },
              {
                internalType: 'uint32',
                name: 'maxSummons',
                type: 'uint32'
              }
            ],
            internalType: 'struct SummoningInfo',
            name: 'summoningInfo',
            type: 'tuple'
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'statGenes',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'visualGenes',
                type: 'uint256'
              },
              {
                internalType: 'enum Rarity',
                name: 'rarity',
                type: 'uint8'
              },
              {
                internalType: 'bool',
                name: 'shiny',
                type: 'bool'
              },
              {
                internalType: 'uint16',
                name: 'generation',
                type: 'uint16'
              },
              {
                internalType: 'uint32',
                name: 'firstName',
                type: 'uint32'
              },
              {
                internalType: 'uint32',
                name: 'lastName',
                type: 'uint32'
              },
              {
                internalType: 'uint8',
                name: 'shinyStyle',
                type: 'uint8'
              },
              {
                internalType: 'uint8',
                name: 'class',
                type: 'uint8'
              },
              {
                internalType: 'uint8',
                name: 'subClass',
                type: 'uint8'
              }
            ],
            internalType: 'struct HeroInfo',
            name: 'info',
            type: 'tuple'
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'staminaFullAt',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'hpFullAt',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'mpFullAt',
                type: 'uint256'
              },
              {
                internalType: 'uint16',
                name: 'level',
                type: 'uint16'
              },
              {
                internalType: 'uint64',
                name: 'xp',
                type: 'uint64'
              },
              {
                internalType: 'address',
                name: 'currentQuest',
                type: 'address'
              },
              {
                internalType: 'uint8',
                name: 'sp',
                type: 'uint8'
              },
              {
                internalType: 'enum HeroStatus',
                name: 'status',
                type: 'uint8'
              }
            ],
            internalType: 'struct HeroState',
            name: 'state',
            type: 'tuple'
          },
          {
            components: [
              {
                internalType: 'uint16',
                name: 'strength',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'intelligence',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'wisdom',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'luck',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'agility',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'vitality',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'endurance',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'dexterity',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'hp',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'mp',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'stamina',
                type: 'uint16'
              }
            ],
            internalType: 'struct HeroStats',
            name: 'stats',
            type: 'tuple'
          },
          {
            components: [
              {
                internalType: 'uint16',
                name: 'strength',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'intelligence',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'wisdom',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'luck',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'agility',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'vitality',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'endurance',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'dexterity',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'hpSm',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'hpRg',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'hpLg',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'mpSm',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'mpRg',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'mpLg',
                type: 'uint16'
              }
            ],
            internalType: 'struct HeroStatGrowth',
            name: 'primaryStatGrowth',
            type: 'tuple'
          },
          {
            components: [
              {
                internalType: 'uint16',
                name: 'strength',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'intelligence',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'wisdom',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'luck',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'agility',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'vitality',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'endurance',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'dexterity',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'hpSm',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'hpRg',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'hpLg',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'mpSm',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'mpRg',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'mpLg',
                type: 'uint16'
              }
            ],
            internalType: 'struct HeroStatGrowth',
            name: 'secondaryStatGrowth',
            type: 'tuple'
          },
          {
            components: [
              {
                internalType: 'uint16',
                name: 'mining',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'gardening',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'foraging',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'fishing',
                type: 'uint16'
              }
            ],
            internalType: 'struct HeroProfessions',
            name: 'professions',
            type: 'tuple'
          }
        ],
        internalType: 'struct Hero',
        name: '_hero',
        type: 'tuple'
      }
    ],
    name: 'updateHero',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_id',
        type: 'uint256'
      }
    ],
    name: 'getHeroEquipment',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'equippedSlots',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'petId',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'weapon1Id',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'weapon2Id',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'offhand1Id',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'offhand2Id',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'armorId',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'accessoryId',
            type: 'uint256'
          }
        ],
        internalType: 'struct HeroEquipment',
        name: '',
        type: 'tuple'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_id',
        type: 'uint256'
      }
    ],
    name: 'getHeroV2',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'id',
            type: 'uint256'
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'summonedTime',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'nextSummonTime',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'summonerId',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'assistantId',
                type: 'uint256'
              },
              {
                internalType: 'uint32',
                name: 'summons',
                type: 'uint32'
              },
              {
                internalType: 'uint32',
                name: 'maxSummons',
                type: 'uint32'
              }
            ],
            internalType: 'struct SummoningInfo',
            name: 'summoningInfo',
            type: 'tuple'
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'statGenes',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'visualGenes',
                type: 'uint256'
              },
              {
                internalType: 'enum Rarity',
                name: 'rarity',
                type: 'uint8'
              },
              {
                internalType: 'bool',
                name: 'shiny',
                type: 'bool'
              },
              {
                internalType: 'uint16',
                name: 'generation',
                type: 'uint16'
              },
              {
                internalType: 'uint32',
                name: 'firstName',
                type: 'uint32'
              },
              {
                internalType: 'uint32',
                name: 'lastName',
                type: 'uint32'
              },
              {
                internalType: 'uint8',
                name: 'shinyStyle',
                type: 'uint8'
              },
              {
                internalType: 'uint8',
                name: 'class',
                type: 'uint8'
              },
              {
                internalType: 'uint8',
                name: 'subClass',
                type: 'uint8'
              }
            ],
            internalType: 'struct HeroInfo',
            name: 'info',
            type: 'tuple'
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'staminaFullAt',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'hpFullAt',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'mpFullAt',
                type: 'uint256'
              },
              {
                internalType: 'uint16',
                name: 'level',
                type: 'uint16'
              },
              {
                internalType: 'uint64',
                name: 'xp',
                type: 'uint64'
              },
              {
                internalType: 'address',
                name: 'currentQuest',
                type: 'address'
              },
              {
                internalType: 'uint8',
                name: 'sp',
                type: 'uint8'
              },
              {
                internalType: 'enum HeroStatus',
                name: 'status',
                type: 'uint8'
              }
            ],
            internalType: 'struct HeroState',
            name: 'state',
            type: 'tuple'
          },
          {
            components: [
              {
                internalType: 'uint16',
                name: 'strength',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'intelligence',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'wisdom',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'luck',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'agility',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'vitality',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'endurance',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'dexterity',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'hp',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'mp',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'stamina',
                type: 'uint16'
              }
            ],
            internalType: 'struct HeroStats',
            name: 'stats',
            type: 'tuple'
          },
          {
            components: [
              {
                internalType: 'uint16',
                name: 'strength',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'intelligence',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'wisdom',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'luck',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'agility',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'vitality',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'endurance',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'dexterity',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'hpSm',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'hpRg',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'hpLg',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'mpSm',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'mpRg',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'mpLg',
                type: 'uint16'
              }
            ],
            internalType: 'struct HeroStatGrowth',
            name: 'primaryStatGrowth',
            type: 'tuple'
          },
          {
            components: [
              {
                internalType: 'uint16',
                name: 'strength',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'intelligence',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'wisdom',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'luck',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'agility',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'vitality',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'endurance',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'dexterity',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'hpSm',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'hpRg',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'hpLg',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'mpSm',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'mpRg',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'mpLg',
                type: 'uint16'
              }
            ],
            internalType: 'struct HeroStatGrowth',
            name: 'secondaryStatGrowth',
            type: 'tuple'
          },
          {
            components: [
              {
                internalType: 'uint16',
                name: 'mining',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'gardening',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'foraging',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'fishing',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'craft1',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'craft2',
                type: 'uint16'
              }
            ],
            internalType: 'struct HeroProfessionsV2',
            name: 'professions',
            type: 'tuple'
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'equippedSlots',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'petId',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'weapon1Id',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'weapon2Id',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'offhand1Id',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'offhand2Id',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'armorId',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'accessoryId',
                type: 'uint256'
              }
            ],
            internalType: 'struct HeroEquipment',
            name: 'equipment',
            type: 'tuple'
          }
        ],
        internalType: 'struct HeroV2',
        name: '',
        type: 'tuple'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256[]',
        name: '_ids',
        type: 'uint256[]'
      }
    ],
    name: 'getHeroesV2',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'id',
            type: 'uint256'
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'summonedTime',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'nextSummonTime',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'summonerId',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'assistantId',
                type: 'uint256'
              },
              {
                internalType: 'uint32',
                name: 'summons',
                type: 'uint32'
              },
              {
                internalType: 'uint32',
                name: 'maxSummons',
                type: 'uint32'
              }
            ],
            internalType: 'struct SummoningInfo',
            name: 'summoningInfo',
            type: 'tuple'
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'statGenes',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'visualGenes',
                type: 'uint256'
              },
              {
                internalType: 'enum Rarity',
                name: 'rarity',
                type: 'uint8'
              },
              {
                internalType: 'bool',
                name: 'shiny',
                type: 'bool'
              },
              {
                internalType: 'uint16',
                name: 'generation',
                type: 'uint16'
              },
              {
                internalType: 'uint32',
                name: 'firstName',
                type: 'uint32'
              },
              {
                internalType: 'uint32',
                name: 'lastName',
                type: 'uint32'
              },
              {
                internalType: 'uint8',
                name: 'shinyStyle',
                type: 'uint8'
              },
              {
                internalType: 'uint8',
                name: 'class',
                type: 'uint8'
              },
              {
                internalType: 'uint8',
                name: 'subClass',
                type: 'uint8'
              }
            ],
            internalType: 'struct HeroInfo',
            name: 'info',
            type: 'tuple'
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'staminaFullAt',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'hpFullAt',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'mpFullAt',
                type: 'uint256'
              },
              {
                internalType: 'uint16',
                name: 'level',
                type: 'uint16'
              },
              {
                internalType: 'uint64',
                name: 'xp',
                type: 'uint64'
              },
              {
                internalType: 'address',
                name: 'currentQuest',
                type: 'address'
              },
              {
                internalType: 'uint8',
                name: 'sp',
                type: 'uint8'
              },
              {
                internalType: 'enum HeroStatus',
                name: 'status',
                type: 'uint8'
              }
            ],
            internalType: 'struct HeroState',
            name: 'state',
            type: 'tuple'
          },
          {
            components: [
              {
                internalType: 'uint16',
                name: 'strength',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'intelligence',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'wisdom',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'luck',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'agility',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'vitality',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'endurance',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'dexterity',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'hp',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'mp',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'stamina',
                type: 'uint16'
              }
            ],
            internalType: 'struct HeroStats',
            name: 'stats',
            type: 'tuple'
          },
          {
            components: [
              {
                internalType: 'uint16',
                name: 'strength',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'intelligence',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'wisdom',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'luck',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'agility',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'vitality',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'endurance',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'dexterity',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'hpSm',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'hpRg',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'hpLg',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'mpSm',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'mpRg',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'mpLg',
                type: 'uint16'
              }
            ],
            internalType: 'struct HeroStatGrowth',
            name: 'primaryStatGrowth',
            type: 'tuple'
          },
          {
            components: [
              {
                internalType: 'uint16',
                name: 'strength',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'intelligence',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'wisdom',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'luck',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'agility',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'vitality',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'endurance',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'dexterity',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'hpSm',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'hpRg',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'hpLg',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'mpSm',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'mpRg',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'mpLg',
                type: 'uint16'
              }
            ],
            internalType: 'struct HeroStatGrowth',
            name: 'secondaryStatGrowth',
            type: 'tuple'
          },
          {
            components: [
              {
                internalType: 'uint16',
                name: 'mining',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'gardening',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'foraging',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'fishing',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'craft1',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'craft2',
                type: 'uint16'
              }
            ],
            internalType: 'struct HeroProfessionsV2',
            name: 'professions',
            type: 'tuple'
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'equippedSlots',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'petId',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'weapon1Id',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'weapon2Id',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'offhand1Id',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'offhand2Id',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'armorId',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'accessoryId',
                type: 'uint256'
              }
            ],
            internalType: 'struct HeroEquipment',
            name: 'equipment',
            type: 'tuple'
          }
        ],
        internalType: 'struct HeroV2[]',
        name: '',
        type: 'tuple[]'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'id',
            type: 'uint256'
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'summonedTime',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'nextSummonTime',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'summonerId',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'assistantId',
                type: 'uint256'
              },
              {
                internalType: 'uint32',
                name: 'summons',
                type: 'uint32'
              },
              {
                internalType: 'uint32',
                name: 'maxSummons',
                type: 'uint32'
              }
            ],
            internalType: 'struct SummoningInfo',
            name: 'summoningInfo',
            type: 'tuple'
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'statGenes',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'visualGenes',
                type: 'uint256'
              },
              {
                internalType: 'enum Rarity',
                name: 'rarity',
                type: 'uint8'
              },
              {
                internalType: 'bool',
                name: 'shiny',
                type: 'bool'
              },
              {
                internalType: 'uint16',
                name: 'generation',
                type: 'uint16'
              },
              {
                internalType: 'uint32',
                name: 'firstName',
                type: 'uint32'
              },
              {
                internalType: 'uint32',
                name: 'lastName',
                type: 'uint32'
              },
              {
                internalType: 'uint8',
                name: 'shinyStyle',
                type: 'uint8'
              },
              {
                internalType: 'uint8',
                name: 'class',
                type: 'uint8'
              },
              {
                internalType: 'uint8',
                name: 'subClass',
                type: 'uint8'
              }
            ],
            internalType: 'struct HeroInfo',
            name: 'info',
            type: 'tuple'
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'staminaFullAt',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'hpFullAt',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'mpFullAt',
                type: 'uint256'
              },
              {
                internalType: 'uint16',
                name: 'level',
                type: 'uint16'
              },
              {
                internalType: 'uint64',
                name: 'xp',
                type: 'uint64'
              },
              {
                internalType: 'address',
                name: 'currentQuest',
                type: 'address'
              },
              {
                internalType: 'uint8',
                name: 'sp',
                type: 'uint8'
              },
              {
                internalType: 'enum HeroStatus',
                name: 'status',
                type: 'uint8'
              }
            ],
            internalType: 'struct HeroState',
            name: 'state',
            type: 'tuple'
          },
          {
            components: [
              {
                internalType: 'uint16',
                name: 'strength',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'intelligence',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'wisdom',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'luck',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'agility',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'vitality',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'endurance',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'dexterity',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'hp',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'mp',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'stamina',
                type: 'uint16'
              }
            ],
            internalType: 'struct HeroStats',
            name: 'stats',
            type: 'tuple'
          },
          {
            components: [
              {
                internalType: 'uint16',
                name: 'strength',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'intelligence',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'wisdom',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'luck',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'agility',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'vitality',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'endurance',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'dexterity',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'hpSm',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'hpRg',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'hpLg',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'mpSm',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'mpRg',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'mpLg',
                type: 'uint16'
              }
            ],
            internalType: 'struct HeroStatGrowth',
            name: 'primaryStatGrowth',
            type: 'tuple'
          },
          {
            components: [
              {
                internalType: 'uint16',
                name: 'strength',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'intelligence',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'wisdom',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'luck',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'agility',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'vitality',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'endurance',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'dexterity',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'hpSm',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'hpRg',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'hpLg',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'mpSm',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'mpRg',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'mpLg',
                type: 'uint16'
              }
            ],
            internalType: 'struct HeroStatGrowth',
            name: 'secondaryStatGrowth',
            type: 'tuple'
          },
          {
            components: [
              {
                internalType: 'uint16',
                name: 'mining',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'gardening',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'foraging',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'fishing',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'craft1',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'craft2',
                type: 'uint16'
              }
            ],
            internalType: 'struct HeroProfessionsV2',
            name: 'professions',
            type: 'tuple'
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'equippedSlots',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'petId',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'weapon1Id',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'weapon2Id',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'offhand1Id',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'offhand2Id',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'armorId',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'accessoryId',
                type: 'uint256'
              }
            ],
            internalType: 'struct HeroEquipment',
            name: 'equipment',
            type: 'tuple'
          }
        ],
        internalType: 'struct HeroV2',
        name: '_hero',
        type: 'tuple'
      }
    ],
    name: 'updateHeroV2',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_heroId',
        type: 'uint256'
      },
      {
        components: [
          {
            internalType: 'uint256',
            name: 'equippedSlots',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'petId',
            type: 'uint256'
          },
          {
            internalType: 'uint128',
            name: 'weapon1Id',
            type: 'uint128'
          },
          {
            internalType: 'uint128',
            name: 'weapon1VisageId',
            type: 'uint128'
          },
          {
            internalType: 'uint128',
            name: 'weapon2Id',
            type: 'uint128'
          },
          {
            internalType: 'uint128',
            name: 'weapon2VisageId',
            type: 'uint128'
          },
          {
            internalType: 'uint128',
            name: 'offhand1Id',
            type: 'uint128'
          },
          {
            internalType: 'uint128',
            name: 'offhand1VisageId',
            type: 'uint128'
          },
          {
            internalType: 'uint128',
            name: 'offhand2Id',
            type: 'uint128'
          },
          {
            internalType: 'uint128',
            name: 'offhand2VisageId',
            type: 'uint128'
          },
          {
            internalType: 'uint128',
            name: 'armorId',
            type: 'uint128'
          },
          {
            internalType: 'uint128',
            name: 'armorVisageId',
            type: 'uint128'
          },
          {
            internalType: 'uint128',
            name: 'accessoryId',
            type: 'uint128'
          },
          {
            internalType: 'uint128',
            name: 'accessoryVisageId',
            type: 'uint128'
          }
        ],
        internalType: 'struct HeroEquipmentV2',
        name: '_heroEquipment',
        type: 'tuple'
      }
    ],
    name: 'updateHeroEquipment',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_heroId',
        type: 'uint256'
      },
      {
        internalType: 'address',
        name: '_quest',
        type: 'address'
      },
      {
        internalType: 'address',
        name: '_owner',
        type: 'address'
      }
    ],
    name: 'updateHeroQuest',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_heroId',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: '_staminaFullAt',
        type: 'uint256'
      },
      {
        internalType: 'uint64',
        name: '_xp',
        type: 'uint64'
      },
      {
        internalType: 'uint16',
        name: '_fishing',
        type: 'uint16'
      },
      {
        internalType: 'uint16',
        name: '_foraging',
        type: 'uint16'
      },
      {
        internalType: 'uint16',
        name: '_gardening',
        type: 'uint16'
      },
      {
        internalType: 'uint16',
        name: '_mining',
        type: 'uint16'
      },
      {
        internalType: 'address',
        name: '_owner',
        type: 'address'
      }
    ],
    name: 'updateHeroQuestComplete',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_heroId',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: '_staminaFullAt',
        type: 'uint256'
      },
      {
        internalType: 'address',
        name: '_owner',
        type: 'address'
      }
    ],
    name: 'updateHeroStaminaFullAt',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_heroId',
        type: 'uint256'
      },
      {
        components: [
          {
            internalType: 'uint256',
            name: 'staminaFullAt',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'hpFullAt',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'mpFullAt',
            type: 'uint256'
          },
          {
            internalType: 'uint16',
            name: 'level',
            type: 'uint16'
          },
          {
            internalType: 'uint64',
            name: 'xp',
            type: 'uint64'
          },
          {
            internalType: 'address',
            name: 'currentQuest',
            type: 'address'
          },
          {
            internalType: 'uint8',
            name: 'sp',
            type: 'uint8'
          },
          {
            internalType: 'enum HeroStatus',
            name: 'status',
            type: 'uint8'
          }
        ],
        internalType: 'struct HeroState',
        name: '_heroState',
        type: 'tuple'
      }
    ],
    name: 'updateHeroState',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'id',
            type: 'uint256'
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'summonedTime',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'nextSummonTime',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'summonerId',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'assistantId',
                type: 'uint256'
              },
              {
                internalType: 'uint32',
                name: 'summons',
                type: 'uint32'
              },
              {
                internalType: 'uint32',
                name: 'maxSummons',
                type: 'uint32'
              }
            ],
            internalType: 'struct SummoningInfo',
            name: 'summoningInfo',
            type: 'tuple'
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'statGenes',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'visualGenes',
                type: 'uint256'
              },
              {
                internalType: 'enum Rarity',
                name: 'rarity',
                type: 'uint8'
              },
              {
                internalType: 'bool',
                name: 'shiny',
                type: 'bool'
              },
              {
                internalType: 'uint16',
                name: 'generation',
                type: 'uint16'
              },
              {
                internalType: 'uint32',
                name: 'firstName',
                type: 'uint32'
              },
              {
                internalType: 'uint32',
                name: 'lastName',
                type: 'uint32'
              },
              {
                internalType: 'uint8',
                name: 'shinyStyle',
                type: 'uint8'
              },
              {
                internalType: 'uint8',
                name: 'class',
                type: 'uint8'
              },
              {
                internalType: 'uint8',
                name: 'subClass',
                type: 'uint8'
              }
            ],
            internalType: 'struct HeroInfo',
            name: 'info',
            type: 'tuple'
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'staminaFullAt',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'hpFullAt',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'mpFullAt',
                type: 'uint256'
              },
              {
                internalType: 'uint16',
                name: 'level',
                type: 'uint16'
              },
              {
                internalType: 'uint64',
                name: 'xp',
                type: 'uint64'
              },
              {
                internalType: 'address',
                name: 'currentQuest',
                type: 'address'
              },
              {
                internalType: 'uint8',
                name: 'sp',
                type: 'uint8'
              },
              {
                internalType: 'enum HeroStatus',
                name: 'status',
                type: 'uint8'
              }
            ],
            internalType: 'struct HeroState',
            name: 'state',
            type: 'tuple'
          },
          {
            components: [
              {
                internalType: 'uint16',
                name: 'strength',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'intelligence',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'wisdom',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'luck',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'agility',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'vitality',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'endurance',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'dexterity',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'hp',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'mp',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'stamina',
                type: 'uint16'
              }
            ],
            internalType: 'struct HeroStats',
            name: 'stats',
            type: 'tuple'
          },
          {
            components: [
              {
                internalType: 'uint16',
                name: 'strength',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'intelligence',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'wisdom',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'luck',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'agility',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'vitality',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'endurance',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'dexterity',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'hpSm',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'hpRg',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'hpLg',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'mpSm',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'mpRg',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'mpLg',
                type: 'uint16'
              }
            ],
            internalType: 'struct HeroStatGrowth',
            name: 'primaryStatGrowth',
            type: 'tuple'
          },
          {
            components: [
              {
                internalType: 'uint16',
                name: 'strength',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'intelligence',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'wisdom',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'luck',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'agility',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'vitality',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'endurance',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'dexterity',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'hpSm',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'hpRg',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'hpLg',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'mpSm',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'mpRg',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'mpLg',
                type: 'uint16'
              }
            ],
            internalType: 'struct HeroStatGrowth',
            name: 'secondaryStatGrowth',
            type: 'tuple'
          },
          {
            components: [
              {
                internalType: 'uint16',
                name: 'mining',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'gardening',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'foraging',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'fishing',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'craft1',
                type: 'uint16'
              },
              {
                internalType: 'uint16',
                name: 'craft2',
                type: 'uint16'
              }
            ],
            internalType: 'struct HeroProfessionsV2',
            name: 'professions',
            type: 'tuple'
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'equippedSlots',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'petId',
                type: 'uint256'
              },
              {
                internalType: 'uint128',
                name: 'weapon1Id',
                type: 'uint128'
              },
              {
                internalType: 'uint128',
                name: 'weapon1VisageId',
                type: 'uint128'
              },
              {
                internalType: 'uint128',
                name: 'weapon2Id',
                type: 'uint128'
              },
              {
                internalType: 'uint128',
                name: 'weapon2VisageId',
                type: 'uint128'
              },
              {
                internalType: 'uint128',
                name: 'offhand1Id',
                type: 'uint128'
              },
              {
                internalType: 'uint128',
                name: 'offhand1VisageId',
                type: 'uint128'
              },
              {
                internalType: 'uint128',
                name: 'offhand2Id',
                type: 'uint128'
              },
              {
                internalType: 'uint128',
                name: 'offhand2VisageId',
                type: 'uint128'
              },
              {
                internalType: 'uint128',
                name: 'armorId',
                type: 'uint128'
              },
              {
                internalType: 'uint128',
                name: 'armorVisageId',
                type: 'uint128'
              },
              {
                internalType: 'uint128',
                name: 'accessoryId',
                type: 'uint128'
              },
              {
                internalType: 'uint128',
                name: 'accessoryVisageId',
                type: 'uint128'
              }
            ],
            internalType: 'struct HeroEquipmentV2',
            name: 'equipment',
            type: 'tuple'
          }
        ],
        internalType: 'struct HeroV3',
        name: '_hero',
        type: 'tuple'
      }
    ],
    name: 'updateHeroV3',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_from',
        type: 'address'
      },
      {
        internalType: 'address',
        name: '_newOwner',
        type: 'address'
      },
      {
        internalType: 'uint256[]',
        name: 'heroIds',
        type: 'uint256[]'
      }
    ],
    name: 'multiTransferHeroAndEquipmentFrom',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_from',
        type: 'address'
      },
      {
        internalType: 'address',
        name: '_newOwner',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: '_heroId',
        type: 'uint256'
      }
    ],
    name: 'transferHeroAndEquipmentFrom',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  }
];
