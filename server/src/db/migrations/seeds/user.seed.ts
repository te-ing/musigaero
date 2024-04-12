interface UserSeed {
  id: number;
  email: string;
  nickname: string;
  password: string;
  createdAt: string;
  updatedAt: string;
}

const userSeed: UserSeed[] = [
  {
    id: 1,
    email: 'test@test.com',
    nickname: 'test',
    password: '$2a$10$0mwUJzqgTGQKYSZsBgHxDePAJAqbLSll4pj8eoSvXWuWu860Rvrje',
    createdAt: '2023-10-01 16:15:19.948095',
    updatedAt: '2023-10-01 16:15:20.017321',
  },
  {
    id: 2,
    email: 'admin@admin.com',
    nickname: 'test',
    password: '$2a$10$2KS98lXv3BZOOWD2GqXh5egq0scg.K5a4XZtwt7QKPeuohzJXGscO',
    createdAt: '2023-10-01 16:15:19.948095',
    updatedAt: '2023-10-01 16:15:20.017321',
  },
  {
    id: 3,
    email: '',
    nickname: '',
    password: '$2a$10$MsmgQagnPlyfWXK1KKXMMeIPj0Jd5xb3b53iXoNI3FjXySa.t2j7e',
    createdAt: '2023-10-01 16:15:19.948095',
    updatedAt: '2023-10-01 16:15:20.017321',
  },
  {
    id: 4,
    email: 'q@q.com',
    nickname: '테스트 유저',
    password: '$2a$10$E6UTR39KTB1gBmgATRZgJOdFwrcfXLyADGi7gS.ruWAyII0DWrqQW',
    createdAt: '2023-10-01 16:15:19.948095',
    updatedAt: '2023-10-01 16:15:20.017321',
  },
  {
    id: 5,
    email: 'user@user.com',
    nickname: '곰이 누나',
    password: '$2a$10$B452zR0c43r7UrFcmXbTG.AOKx6jUiClG0lEr9CXGmsHVz82PKsSG',
    createdAt: '2023-11-05 12:38:49.730452',
    updatedAt: '2023-11-05 12:40:43.750232',
  },
  {
    id: 6,
    email: 'test@test.user',
    nickname: '테스트 유저',
    password: '$2a$10$62juH2bhIMi8ufi9daYqruNToaX80amSTZwM5PGoFluDguV0CwWo.',
    createdAt: '2024-03-10 13:34:34.193474',
    updatedAt: '2024-03-10 13:34:34.193474',
  },
];

export default userSeed;
