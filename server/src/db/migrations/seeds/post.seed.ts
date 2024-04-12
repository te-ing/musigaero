interface PostSeed {
  id: number;
  authorId: number;
  nickname: string;
  petname: string;
  deathday: string;
  title: string;
  body: string;
  image: string;
  type?: string;
  createdAt: string;
  updatedAt: string;
}

const postSeed: PostSeed[] = [
  {
    id: 6,
    title: '잘가 나비',
    image: '01HEES48FFBEBMEP4WSXBM95G7-dog_640.jpeg',
    type: 'standard',
    authorId: 1,
    petname: '나비',
    deathday: '2023-06-21 00:00:00',
    createdAt: '2023-11-05 12:35:45.313305',
    updatedAt: '2023-11-05 16:51:30.339297',
    nickname: 'test',
    body: '',
  },
  {
    id: 7,
    title: '곰이야 사랑해',
    image: '01HEF7AFK4XCF2E6B92MNSWSVD-곰이.png',
    type: 'standard',
    authorId: 5,
    petname: '곰이',
    deathday: '2023-10-19 00:00:00',
    createdAt: '2023-11-05 12:41:24.086887',
    updatedAt: '2023-11-05 16:54:26.703578',
    nickname: '곰이누나',
    body: '',
  },
  {
    id: 10,
    title: '사진이 세개',
    image:
      '01HEMXP0CN1NFQSMME34N2P4EM-Screenshot,01HEMXP4M169SNSDPBBWNFZ91X-image1.jpe,01HEMXP4M2E6QB2C2T9WHQTRHM-image2.png,01HEMXP4M219YHZDB764ZSF3TE-image3.png',
    type: 'standard',
    authorId: 1,
    petname: '사지니',
    deathday: '2023-11-07 21:56:16',
    createdAt: '2023-11-07 21:56:37.929355',
    updatedAt: '2023-11-07 21:56:37.929355',
    nickname: 'test',
    body: '그 임기는 4년으로 하며. 사영기업을 국유 또는 공유로 이전하거나 그 경영을 통제 또는 관리할 수 없다. 사면·감형 및 복권에 관한 사항은 법률로 정한다. 모든 국민은 사생활의 비밀과 자유를 침해받지 아니한다. 법률이 정하는 바에 의하여 대법관이 아닌 법관을 둘 수 있다. 국회는 국무총리 또는 국무위원의 해임을 대통령에게 건의할 수 있다. 직전대통령이 없을 때에는 대통령이 지명한다. 대한민국은 통일을 지향하며. 고용·임금 및 근로조건에 있어서 부당한 차별을 받지 아니한다. 군인은 현역을 면한 후가 아니면 국무위원으로 임명될 수 없다. 다만, 국군은 국가의 안전보장과 국토방위의 신성한 의무를 수행함을 사명으로 하며. 정당은 헌법재판소의 심판에 의하여 해산된다. 행정각부의 설치·조직과 직무범위는 법률로 정한다. 감사원은 세입·세출의 결산을 매년 검사하여 대통령과 차년도국회에 그 결과를 보고하여야 한다. 국가나 국민에게 중대한 재정적 부담을 지우는 조약 또는 입법사항에 관한 조약의 체결·비준에 대한 동의권을 가진다. 정당해산의 결정 또는 헌법소원에 관한 인용결정을 할 때에는 재판관 6인 이상의 찬성이 있어야 한다. 전직대통령의 신분과 예우에 관하여는 법률로 정한다. 농업생산성의 제고와 농지의 합리적인 이용을 위하거나 불가피한 사정으로 발생하는 농지의 임대차와 위탁경영은 법률이 정하는 바에 의하여 인정된다. 국무회의의 구성원으로서 국정을 심의한다. 국가는 건전한 소비행위를 계도하고 생산품의 품질향상을 촉구하기 위한 소비자보호운동을 법률이 정하는 바에 의하여 보장한다. 국민에 대하여 책임을 진다. 시장의 지배와 경제력의 남용을 방지하며. 대법원장과 대법관이 아닌 법관의 임기는 10년으로 하며. 그 임기는 4년으로 하며. 행정심판의 절차는 법률로 정하되. 대법관은 대법원장의 제청으로 국회의 동의를 얻어 대통령이 임명한다. 대통령은 내우·외환·천재·지변 또는 중대한 재정·경제상의 위기에 있어서 국가의 안전보장 또는 공공의 안녕질서를 유지하기 위하여 긴급한 조치가 필요하고 국회의 집회를 기다릴 여유가 없을 때에 한하여 최소한으로 필요한 재정·경제상의 처분을 하거나 이에 관하여 법률의 효력을 가지는 명령을 발할 수 있다. 제3항의 승인을 얻지 못한 때에는 그 처분 또는 명령은 그때부터 효력을 상실한다. 어떠한 특권도 이에 따르지 아니한다. 법령의 범위안에서 자치에 관한 규정을 제정할 수 있다. 국가는 여자의 복지와 권익의 향상을 위하여 노력하여야 한다. 동일한 범죄에 대하여 거듭 처벌받지 아니한다. 제1항의 지시를 받은 당해 행정기관은 이에 응하여야 한다. 모든 국민은 행위시의 법률에 의하여 범죄를 구성하지 아니하는 행위로 소추되지 아니하며. 대통령이 임시회의 집회를 요구할 때에는 기간과 집회요구의 이유를 명시하여야 한다.',
  },
  {
    id: 11,
    title: '사진이 세개',
    image:
      '01HEMXP0CN1NFQSMME34N2P4EM-Screenshot,01HEMXP4M169SNSDPBBWNFZ91X-image1.jpe,01HEMXP4M2E6QB2C2T9WHQTRHM-image2.png,01HEMXP4M219YHZDB764ZSF3TE-image3.png',
    type: 'standard',
    authorId: 1,
    petname: '사지니',
    deathday: '2023-11-07 21:56:16',
    createdAt: '2023-11-07 21:56:38.020846',
    updatedAt: '2023-11-07 21:56:38.020846',
    nickname: 'test',
    body: '그 임기는 4년으로 하며. 사영기업을 국유 또는 공유로 이전하거나 그 경영을 통제 또는 관리할 수 없다. 사면·감형 및 복권에 관한 사항은 법률로 정한다. 모든 국민은 사생활의 비밀과 자유를 침해받지 아니한다. 법률이 정하는 바에 의하여 대법관이 아닌 법관을 둘 수 있다. 국회는 국무총리 또는 국무위원의 해임을 대통령에게 건의할 수 있다. 직전대통령이 없을 때에는 대통령이 지명한다. 대한민국은 통일을 지향하며. 고용·임금 및 근로조건에 있어서 부당한 차별을 받지 아니한다. 군인은 현역을 면한 후가 아니면 국무위원으로 임명될 수 없다. 다만, 국군은 국가의 안전보장과 국토방위의 신성한 의무를 수행함을 사명으로 하며. 정당은 헌법재판소의 심판에 의하여 해산된다. 행정각부의 설치·조직과 직무범위는 법률로 정한다. 감사원은 세입·세출의 결산을 매년 검사하여 대통령과 차년도국회에 그 결과를 보고하여야 한다. 국가나 국민에게 중대한 재정적 부담을 지우는 조약 또는 입법사항에 관한 조약의 체결·비준에 대한 동의권을 가진다. 정당해산의 결정 또는 헌법소원에 관한 인용결정을 할 때에는 재판관 6인 이상의 찬성이 있어야 한다. 전직대통령의 신분과 예우에 관하여는 법률로 정한다. 농업생산성의 제고와 농지의 합리적인 이용을 위하거나 불가피한 사정으로 발생하는 농지의 임대차와 위탁경영은 법률이 정하는 바에 의하여 인정된다. 국무회의의 구성원으로서 국정을 심의한다. 국가는 건전한 소비행위를 계도하고 생산품의 품질향상을 촉구하기 위한 소비자보호운동을 법률이 정하는 바에 의하여 보장한다. 국민에 대하여 책임을 진다. 시장의 지배와 경제력의 남용을 방지하며. 대법원장과 대법관이 아닌 법관의 임기는 10년으로 하며. 그 임기는 4년으로 하며. 행정심판의 절차는 법률로 정하되. 대법관은 대법원장의 제청으로 국회의 동의를 얻어 대통령이 임명한다. 대통령은 내우·외환·천재·지변 또는 중대한 재정·경제상의 위기에 있어서 국가의 안전보장 또는 공공의 안녕질서를 유지하기 위하여 긴급한 조치가 필요하고 국회의 집회를 기다릴 여유가 없을 때에 한하여 최소한으로 필요한 재정·경제상의 처분을 하거나 이에 관하여 법률의 효력을 가지는 명령을 발할 수 있다. 제3항의 승인을 얻지 못한 때에는 그 처분 또는 명령은 그때부터 효력을 상실한다. 어떠한 특권도 이에 따르지 아니한다. 법령의 범위안에서 자치에 관한 규정을 제정할 수 있다. 국가는 여자의 복지와 권익의 향상을 위하여 노력하여야 한다. 동일한 범죄에 대하여 거듭 처벌받지 아니한다. 제1항의 지시를 받은 당해 행정기관은 이에 응하여야 한다. 모든 국민은 행위시의 법률에 의하여 범죄를 구성하지 아니하는 행위로 소추되지 아니하며. 대통령이 임시회의 집회를 요구할 때에는 기간과 집회요구의 이유를 명시하여야 한다.',
  },
  {
    id: 12,
    title: '안녕',
    image: '01HET2RM0RZ34B4K9YJJMSR8K2-dog.jpgimage.jpeg,01HET2RSX7JVSGBNK5PMKCK533-Screenshotimage.jpeg',
    type: 'standard',
    authorId: 1,
    petname: '나비',
    deathday: '2023-11-22 00:00:00',
    createdAt: '2023-11-09 22:01:36.931778',
    updatedAt: '2023-11-09 22:01:36.931778',
    nickname: 'test',
    body: '잘가',
  },
  {
    id: 13,
    title: '우린 지금 어디쯤에 있는 걸까',
    image: '01HET2WHJGM2N2ST54P51VB6WW-dog.jpgimage.jpeg',
    type: 'standard',
    authorId: 1,
    petname: '랄라스윗',
    deathday: '2023-11-02 00:00:00',
    createdAt: '2023-11-09 22:03:35.979880',
    updatedAt: '2023-11-09 22:03:35.979880',
    nickname: 'test',
    body: '흔적만 남았는데',
  },
  {
    id: 14,
    title: '다중이지미 테스트',
    image:
      'https://musigaero-bucket.s3.ap-northeast-2.amazonaws.com/image/1-dog-01HFJPE9Z467QKVGJ7GW7QVCH3.jpg,https://musigaero-bucket.s3.ap-northeast-2.amazonaws.com/image/1-%E1%84%80%E1%85%A9%E1%86%B7%E1%84%8B%E1%85%B5-01HFJPEJYR6918PNM3NV5GRQZ0.png,https://musigaero-bucket.s3.ap-northeast-2.amazonaws.com/image/1-dog_640-01HFJPEJYTK6YE3A8SE31QK4AX.jpeg,https://musigaero-bucket.s3.ap-northeast-2.amazonaws.com/image/1-Screenshot-01HFJPEJZ2TPWNMKSSZVK7ASZD.JPG',
    type: 'standard',
    authorId: 1,
    petname: '다중이',
    deathday: '2023-11-19 11:26:53',
    createdAt: '2023-11-19 11:27:26.720670',
    updatedAt: '2023-11-19 11:27:26.720670',
    nickname: 'test',
    body: '다중다중',
  },
  {
    id: 15,
    title: '제목입니다',
    image:
      'https://musigaero-bucket.s3.ap-northeast-2.amazonaws.com/image/1-dog-01HGTAQK0DB63EC471SNBY1B0B.jpg,https://musigaero-bucket.s3.ap-northeast-2.amazonaws.com/image/1-dog_640-01HGTAPECVKW5MC4PPREGE5DF5.jpeg,https://musigaero-bucket.s3.ap-northeast-2.amazonaws.com/image/1-Screenshot-01HGTAPECXFFSDYAE4Z9C06WVQ.JPG',
    type: 'standard',
    authorId: 1,
    petname: '반이',
    deathday: '2023-12-04 20:51:12',
    createdAt: '2023-12-04 20:52:05.443692',
    updatedAt: '2023-12-04 20:52:05.443692',
    nickname: 'test',
    body: '안녕',
  },
];

export default postSeed;
