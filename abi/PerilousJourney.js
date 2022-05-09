export default [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'player',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'heroId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'submissionId',
        type: 'uint256',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'groupId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'isGenZero',
        type: 'bool',
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'addedSurvivalChance',
        type: 'bool',
      },
      {
        indexed: true,
        internalType: 'bool',
        name: 'heroSurvived',
        type: 'bool',
      },
      {
        indexed: false,
        internalType: 'uint16',
        name: 'heroLevel',
        type: 'uint16',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'crystalAmount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'jewelAmount',
        type: 'uint256',
      },
    ],
    name: 'HeroClaimed',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'player',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'heroId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'submissionId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'groupId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'isGenZero',
        type: 'bool',
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'submittedWithGenZero',
        type: 'bool',
      },
    ],
    name: 'HeroSubmitted',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'heroId',
        type: 'uint256',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'player',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'rewardItem',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'itemQuantity',
        type: 'uint256',
      },
    ],
    name: 'JourneyReward',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'Paused',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'previousAdminRole',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'newAdminRole',
        type: 'bytes32',
      },
    ],
    name: 'RoleAdminChanged',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
    ],
    name: 'RoleGranted',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
    ],
    name: 'RoleRevoked',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'player',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'heroId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'stat',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint8',
        name: 'increase',
        type: 'uint8',
      },
      {
        indexed: false,
        internalType: 'uint8',
        name: 'updateType',
        type: 'uint8',
      },
    ],
    name: 'StatUp',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'Unpaused',
    type: 'event',
  },
  {
    inputs: [],
    name: 'DEFAULT_ADMIN_ROLE',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'MODERATOR_ROLE',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_heroId',
        type: 'uint256',
      },
      {
        internalType: 'uint8',
        name: 'stat1',
        type: 'uint8',
      },
      {
        internalType: 'uint8',
        name: 'stat2',
        type: 'uint8',
      },
      {
        internalType: 'uint8',
        name: 'stat3',
        type: 'uint8',
      },
    ],
    name: 'applySurvivalStatBonus',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'assistingAuction',
    outputs: [
      {
        internalType: 'contract IAssistingAuction',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_heroId',
        type: 'uint256',
      },
    ],
    name: 'cancelSubmission',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'claimEnd',
    outputs: [
      {
        internalType: 'uint64',
        name: '',
        type: 'uint64',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_heroId',
        type: 'uint256',
      },
    ],
    name: 'claimHero',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256[]',
        name: '_heroes',
        type: 'uint256[]',
      },
    ],
    name: 'claimHeroes',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'claimStart',
    outputs: [
      {
        internalType: 'uint64',
        name: '',
        type: 'uint64',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'crystals',
    outputs: [
      {
        internalType: 'contract IInventoryItem',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'flagStorage',
    outputs: [
      {
        internalType: 'contract IFlagStorage',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_heroId',
        type: 'uint256',
      },
    ],
    name: 'getHeroSubmission',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'id',
            type: 'uint256',
          },
          {
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'groupId',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'heroId',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'startBlock',
            type: 'uint256',
          },
          {
            internalType: 'bool',
            name: 'addedSurvivalChance',
            type: 'bool',
          },
        ],
        internalType: 'struct JourneyTypes.Submission',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
    ],
    name: 'getRoleAdmin',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        internalType: 'uint256',
        name: 'index',
        type: 'uint256',
      },
    ],
    name: 'getRoleMember',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
    ],
    name: 'getRoleMemberCount',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_id',
        type: 'uint256',
      },
    ],
    name: 'getSubmission',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'id',
            type: 'uint256',
          },
          {
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'groupId',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'heroId',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'startBlock',
            type: 'uint256',
          },
          {
            internalType: 'bool',
            name: 'addedSurvivalChance',
            type: 'bool',
          },
        ],
        internalType: 'struct JourneyTypes.Submission',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_address',
        type: 'address',
      },
    ],
    name: 'getUserSubmissions',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'id',
            type: 'uint256',
          },
          {
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'groupId',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'heroId',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'startBlock',
            type: 'uint256',
          },
          {
            internalType: 'bool',
            name: 'addedSurvivalChance',
            type: 'bool',
          },
        ],
        internalType: 'struct JourneyTypes.Submission[]',
        name: '',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'grantRole',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'graveyard',
    outputs: [
      {
        internalType: 'contract IGraveyard',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'hasRole',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'heroCore',
    outputs: [
      {
        internalType: 'contract IHeroCore',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'heroToSubmission',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_heroCoreAddress',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_assistingAuctionAddress',
        type: 'address',
      },
      {
        internalType: 'uint64',
        name: '_submissionStart',
        type: 'uint64',
      },
      {
        internalType: 'uint64',
        name: '_submissionEnd',
        type: 'uint64',
      },
      {
        internalType: 'uint64',
        name: '_claimStart',
        type: 'uint64',
      },
      {
        internalType: 'uint64',
        name: '_claimEnd',
        type: 'uint64',
      },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'pause',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'paused',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'profileUserSubmissions',
    outputs: [
      {
        internalType: 'uint256',
        name: 'id',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'groupId',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'heroId',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'startBlock',
        type: 'uint256',
      },
      {
        internalType: 'bool',
        name: 'addedSurvivalChance',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'questFund',
    outputs: [
      {
        internalType: 'contract IQuestFund',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'renounceRole',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'revokeRole',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'runes',
    outputs: [
      {
        internalType: 'contract IInventoryItem',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_assistingAuctionAddress',
        type: 'address',
      },
    ],
    name: 'setAssistingAuctionAddress',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint64',
        name: '_start',
        type: 'uint64',
      },
      {
        internalType: 'uint64',
        name: '_end',
        type: 'uint64',
      },
    ],
    name: 'setClaimWindow',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint8',
        name: '_index',
        type: 'uint8',
      },
      {
        internalType: 'address',
        name: '_address',
        type: 'address',
      },
    ],
    name: 'setCrystal',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_flagStorageAddress',
        type: 'address',
      },
    ],
    name: 'setFlagStorageAddress',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_graveyardAddress',
        type: 'address',
      },
    ],
    name: 'setGraveyardAddress',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_heroCoreAddress',
        type: 'address',
      },
    ],
    name: 'setHeroCoreAddress',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_questFundAddress',
        type: 'address',
      },
    ],
    name: 'setQuestFundAddress',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint8',
        name: '_index',
        type: 'uint8',
      },
      {
        internalType: 'address',
        name: '_address',
        type: 'address',
      },
    ],
    name: 'setRune',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint64',
        name: '_end',
        type: 'uint64',
      },
    ],
    name: 'setStatBonusEnd',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint8',
        name: '_index',
        type: 'uint8',
      },
      {
        internalType: 'address',
        name: '_address',
        type: 'address',
      },
    ],
    name: 'setStone',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint64',
        name: '_start',
        type: 'uint64',
      },
      {
        internalType: 'uint64',
        name: '_end',
        type: 'uint64',
      },
    ],
    name: 'setSubmissionWindow',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'statBonusEnd',
    outputs: [
      {
        internalType: 'uint64',
        name: '',
        type: 'uint64',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'stones',
    outputs: [
      {
        internalType: 'contract IInventoryItem',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'submissionEnd',
    outputs: [
      {
        internalType: 'uint64',
        name: '',
        type: 'uint64',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'submissionStart',
    outputs: [
      {
        internalType: 'uint64',
        name: '',
        type: 'uint64',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256[]',
        name: '_heroIds',
        type: 'uint256[]',
      },
    ],
    name: 'submitHeroes',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'genZeroId',
        type: 'uint256',
      },
      {
        internalType: 'uint256[]',
        name: '_heroIds',
        type: 'uint256[]',
      },
    ],
    name: 'submitHeroesWithGenZero',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes4',
        name: 'interfaceId',
        type: 'bytes4',
      },
    ],
    name: 'supportsInterface',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'unpause',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];
