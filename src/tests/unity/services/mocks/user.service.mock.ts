export const allUserMock = [
  {
    userId: 1,
    name: 'test',
    lastname: 'tests',
    username: 'userOnes',
    password: '12345678',
    cell: [
      {
        cellId: 1,
        idUser: 1,
        cell: '123456789'
      },
      {
        cellId: 2,
        idUser: 1,
        cell: '987654321'
      }
    ],
    email: [
      {
        emailId: 1,
        idUser: 1,
        email: 'userOne@test.com'
      }
    ]
  },
  {
    userId: 2,
    name: 'test2',
    lastname: 'test',
    username: 'userTwo',
    password: '12345678',
    cell: [
      {
        cellId: 3,
        idUser: 2,
        cell: '123456789'
      },
      {
        cellId: 4,
        idUser: 2,
        cell: '987654321'
      }
    ],
    email: [
      {
        emailId: 2,
        idUser: 2,
        email: 'userTwo@test.com'
      },
      {
        emailId: 3,
        idUser: 2,
        email: 'twoUser@test.com'
      }
    ]
  }
];

export const allUserMockNoPassword = [
  {
    userId: 1,
    name: 'test',
    lastname: 'tests',
    username: 'userOnes',
    cell: [
      {
        cellId: 1,
        idUser: 1,
        cell: '123456789'
      },
      {
        cellId: 2,
        idUser: 1,
        cell: '987654321'
      }
    ],
    email: [
      {
        emailId: 1,
        idUser: 1,
        email: 'userOne@test.com'
      }
    ]
  },
  {
    userId: 2,
    name: 'test2',
    lastname: 'test',
    username: 'userTwo',
    cell: [
      {
        cellId: 3,
        idUser: 2,
        cell: '123456789'
      },
      {
        cellId: 4,
        idUser: 2,
        cell: '987654321'
      }
    ],
    email: [
      {
        emailId: 2,
        idUser: 2,
        email: 'userTwo@test.com'
      },
      {
        emailId: 3,
        idUser: 2,
        email: 'twoUser@test.com'
      }
    ]
  }
];

export const newUserWithEmailCell = {
  newUser: {
    name: 'test1',
    lastname: 'test',
    username: 'arroz',
    password: '123456789'
  },

  cell: {
    cell: '0099999999'
  },

  email: {
    email: 'arroz@test.com'
  }
};
export const newUserWithCell = {
  newUser: {
    name: 'test1',
    lastname: 'test',
    username: 'arroz',
    password: '123456789'
  },

  cell: {
    cell: '0099999999'
  }

};

export const newUserWithEmail = {
  newUser: {
    name: 'test1',
    lastname: 'test',
    username: 'arroz',
    password: '123456789'
  },

  email: {
    email: 'arroz@test.com'
  }
};

export const newUser = {
  newUser: {
    name: 'test1',
    lastname: 'test',
    username: 'arroz',
    password: '123456789'
  }
};

export const resultCreateNewUser = {
  userId: 5,
  name: 'test1',
  lastname: 'test',
  username: 'arroz',
  password: '123456789'
};

export const resultExpectCreateNewUser = {
  userId: 5,
  name: 'test1',
  lastname: 'test',
  username: 'arroz'
};

export const calledWithFull = {
  lastname: 'test',
  name: 'test1',
  password: '$2a$08$auJKZF5DVTgRZ01n0s7EAenZeJJpst9LzzAKiq9dKzYY3iNfq8nkG',
  username: 'arroz',
  cell: {
    create: {
      cell: '0099999999'
    }
  },
  email: {
    create: {
      email: 'arroz@test.com'
    }
  }
};
export const calledWithEmail = {
  lastname: 'test',
  name: 'test1',
  password: '$2a$08$GC6qDj.BuH.z1MEVUXI1SuGlMHEW3/0CZNHfuQX6cte1xDucGcCgG',
  username: 'arroz',
  email: {
    create: {
      email: 'arroz@test.com'
    }
  }
};

export const calledWithCell = {
  lastname: 'test',
  name: 'test1',
  password: '$2a$08$GC6qDj.BuH.z1MEVUXI1SuGlMHEW3/0CZNHfuQX6cte1xDucGcCgG',
  username: 'arroz',
  cell: {
    create: {
      cell: '0099999999'
    }
  }
};

export const calledWithUser = {
  lastname: 'test',
  name: 'test1',
  password: '$2a$08$GC6qDj.BuH.z1MEVUXI1SuGlMHEW3/0CZNHfuQX6cte1xDucGcCgG',
  username: 'arroz'
};

export const updateUsername = {
  username: 'esquilo'
}

export const updatePassword = {
  password: 'Esquilo Voador'
}