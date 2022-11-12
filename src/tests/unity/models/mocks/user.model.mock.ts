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

export const oneUser = {
  userId: 1,
  name: 'test',
  lastname: 'test',
  username: 'userOne',
  password: '12345678'
};
