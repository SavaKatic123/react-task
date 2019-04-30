const MOCK_PRODUCT_LIST = [
  {
    id:1,
    name:"Beef - Tongue, Fresh",
    price:"$6.14",
    department:"Food"
 },
 {
    id:2,
    name:"IPhone X",
    price:"$900.13",
    department:"Electronics"
 },
 {
    id:3,
    name:"Gibson Les Paul",
    price:"$900.67",
    department:"Music"
 }
];

const MOCK_EXACT_SEARCH_QUERIES = [
  {
    query: 'Curry Powder',
    length: 1
  },
  {
    query: 'Electronics',
    length: 3
  },
  {
    query: 'PR-23',
    length: 1
  }
];

const MOCK_SUBSTRING_SEARCH_QUERIES = [
  {
    query: 'Paul',
    length: 2
  },
  {
    query: 'Powder',
    length: 1
  },
  {
    query: 'PR-',
    length: 30
  },
  {
    query: 'Ele',
    length: 3
  },
  {
    query: 'phone',
    length: 2
  }
];

const MOCK_CASE_INSENSITIVE_SEARCH_QUERIES = [
  {
    query: 'pAUL',
    length: 2
  },
  {
    query: 'pOWDER',
    length: 1
  },
  {
    query: 'pr-',
    length: 30
  },
  {
    query: 'eLE',
    length: 3
  },
  {
    query: 'PhOnE',
    length: 2
  }
];

const MOCK_FILTER_INVALID_VALUES = [
  {
    from: 'abc',
    to: '123',
    length: 0
  },
  {
    from: '123',
    to: 'abc',
    length: 0
  },
  {
    from: 'abc',
    to: 'abc',
    length: 0
  },
  {
    from: 'abc123',
    to: 'abc123',
    length: 0
  }
];

const MOCK_SEARCH_INVALID_VALUES = [
  {
    query: '123',
    length: 0
  },
  {
    query: '123abc',
    length: 0
  },
  {
    query: 'ABC',
    length: 0
  }
]

export {
  MOCK_PRODUCT_LIST,
  MOCK_EXACT_SEARCH_QUERIES,
  MOCK_SUBSTRING_SEARCH_QUERIES,
  MOCK_CASE_INSENSITIVE_SEARCH_QUERIES,
  MOCK_FILTER_INVALID_VALUES,
  MOCK_SEARCH_INVALID_VALUES
};