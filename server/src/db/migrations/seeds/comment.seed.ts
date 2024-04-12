interface CommentSeed {
  id: number;
  password: string;
  body: string;
  replyId: string;
  postId: number;
  author: number | null;
  createdAt: string;
  updatedAt: string;
  nickname: string;
}

const commentSeed: CommentSeed[] = [
  {
    id: 13,
    password: '',
    body: '댓글\n',
    replyId: null,
    postId: 14,
    author: null,
    createdAt: '2023-11-26 13:53:35.570291',
    updatedAt: '2023-11-26 13:53:52.908980',
    nickname: '',
  },
  {
    id: 27,
    password: '',
    body: 'eee',
    replyId: null,
    postId: 14,
    author: null,
    createdAt: '2023-11-26 14:21:01.314120',
    updatedAt: '2023-11-26 14:21:01.314120',
    nickname: '익명',
  },
  {
    id: 33,
    password: '',
    body: '익명댓글',
    replyId: null,
    postId: 6,
    author: null,
    createdAt: '2023-11-26 14:38:22.906276',
    updatedAt: '2023-11-26 14:38:22.906276',
    nickname: '익명',
  },
  {
    id: 34,
    password: 'test',
    body: 'test',
    replyId: null,
    postId: 10,
    author: null,
    createdAt: '2023-11-26 14:47:39.404930',
    updatedAt: '2023-11-26 14:47:39.404930',
    nickname: '무지개유저',
  },
  {
    id: 35,
    password: 'test',
    body: '댓글작성',
    replyId: null,
    postId: 10,
    author: null,
    createdAt: '2023-11-26 14:47:56.615846',
    updatedAt: '2023-11-26 14:47:56.615846',
    nickname: '유저명',
  },
  {
    id: 36,
    password: 'test',
    body: 'test',
    replyId: null,
    postId: 10,
    author: null,
    createdAt: '2023-11-26 14:50:39.167359',
    updatedAt: '2023-11-26 14:50:39.167359',
    nickname: '무지개유저',
  },
  {
    id: 37,
    password: 'test',
    body: 'test',
    replyId: null,
    postId: 10,
    author: null,
    createdAt: '2023-11-26 14:51:27.995104',
    updatedAt: '2023-11-26 14:51:27.995104',
    nickname: '무지개유저',
  },
  {
    id: 39,
    password: '123',
    body: '123',
    replyId: null,
    postId: 11,
    author: 1,
    createdAt: '2023-11-26 16:31:16.721659',
    updatedAt: '2023-11-26 16:31:16.721659',
    nickname: 'test',
  },
  {
    id: 42,
    password: '',
    body: '유저의 댓글',
    replyId: null,
    postId: 6,
    author: 1,
    createdAt: '2023-11-26 16:49:00.883935',
    updatedAt: '2023-11-26 16:49:00.883935',
    nickname: 'test',
  },
  {
    id: 43,
    password: '123',
    body: '123',
    replyId: null,
    postId: 6,
    author: null,
    createdAt: '2023-11-26 16:49:51.642241',
    updatedAt: '2023-11-26 16:49:51.642241',
    nickname: '무지개유저',
  },
  {
    id: 47,
    password: null,
    body: "Speak to me often. Even if I don't understand your words, I feel your voice speaking to me. 👉",
    replyId: null,
    postId: 14,
    author: 1,
    createdAt: '2023-12-10 11:03:36.147458',
    updatedAt: '2023-12-10 11:03:36.147458',
    nickname: 'test',
  },
];

export default commentSeed;
