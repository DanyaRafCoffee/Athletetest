// Public profile placeholder data (for future Django/Postgres integration)

export interface Sport {
  id: number;
  name: string;
  score: string;
  rank: string;
  gradientFrom: string;
  gradientTo: string;
  badgeColor: string;
}

export interface Opponent {
  id: number;
  name: string;
  avatar: string;
}

export interface LastGame {
  id: number;
  name: string;
  date: string;
  time: string;
  sport: string;
  result: string;
  isWin: boolean;
}

export const PUBLIC_PROFILE_DATA = {
  // Player basic info
  playerName: "Крылов (Spectrum) Даниил",
  username: "Spectrum",
  gender: "Мужской",
  age: "1800 лет",
  location: "г.Москва",
  registrationDate: "31 февраля 2020 года",
  
  // Profile images
  avatar: "https://api.builder.io/api/v1/image/assets/TEMP/2a0fa7549221137c07533a5988cd44ae32cda192",
  
  // Best sport
  bestSport: {
    name: "Шахматы",
    rank: "Искра III",
    rankProgress: "9800/10000",
    globalRanking: "#1",
    totalWins: 255,
    winRate: "99.5%",
    romanNumeral: "III",
    gradientFrom: "#4F0A0A",
    gradientTo: "#780000",
    badgeColor: "#760000",
    badgeImage: "https://api.builder.io/api/v1/image/assets/TEMP/5e5d19819780a143546753c37e99190bb009cdf0",
  },
  
  // Other sports
  otherSports: [
    {
      id: 1,
      name: "Волейбол",
      score: "9700/10000",
      rank: "III",
      gradientFrom: "#4F0A0A",
      gradientTo: "#780000",
      badgeColor: "#760000",
      badgeImage: "https://api.builder.io/api/v1/image/assets/TEMP/65c2779bc035689e645a64809941749ae694a4a3",
    },
    {
      id: 2,
      name: "Баскетбол",
      score: "9700/10000",
      rank: "III",
      gradientFrom: "#34064F",
      gradientTo: "#680288",
      badgeColor: "#8700BC",
      badgeImage: "https://api.builder.io/api/v1/image/assets/TEMP/91ad76b7822203253661bd13a330e3ad37e6e6d8",
    },
    {
      id: 3,
      name: "Футбол",
      score: "9700/10000",
      rank: "III",
      gradientFrom: "#008E79",
      gradientTo: "#00A9C0",
      badgeColor: "#0BA2C4",
      badgeImage: "https://api.builder.io/api/v1/image/assets/TEMP/26483a41c43f221ea136009c70dfae9d5d4d4265",
    },
    {
      id: 4,
      name: "Настольный теннис",
      score: "9700/10000",
      rank: "III",
      gradientFrom: "#763700",
      gradientTo: "#FFA04D",
      badgeColor: "#FF6200",
      badgeImage: "https://api.builder.io/api/v1/image/assets/TEMP/eeea5cd73df97f2be2eba6937d74a3f8e8a75a37",
    },
  ] as Sport[],
  
  // Last game
  lastGame: {
    id: 1,
    name: "Bootcamp with Absolute Vodka",
    date: "18.10.2025",
    time: "23:33",
    sport: "Литрбол",
    result: "Победа",
    isWin: true,
  } as LastGame,
  
  // Recent opponents
  recentOpponents: [
    {
      id: 1,
      name: "Крылов (Spectrum) Даниил",
      avatar: "https://api.builder.io/api/v1/image/assets/TEMP/1c0c1f7ca8ef2ae4380cf6cb33cd212e1dc8d200",
    },
    {
      id: 2,
      name: "Крылов (Spectrum) Даниил",
      avatar: "https://api.builder.io/api/v1/image/assets/TEMP/1c0c1f7ca8ef2ae4380cf6cb33cd212e1dc8d200",
    },
  ] as Opponent[],
  
  // Overall ranking
  overallRanking: {
    position: "1",
    name: "Крылов (Spectrum) Даниил",
    avatar: "https://api.builder.io/api/v1/image/assets/TEMP/1c0c1f7ca8ef2ae4380cf6cb33cd212e1dc8d200",
    badge: "https://api.builder.io/api/v1/image/assets/TEMP/887957b913bf2b1850a825a0f0ca5030b978544e",
  },
  
  // Header info
  welcomeMessage: "Добрый день, Захар",
  currentDate: "Сб, 11 октября 2025",
};
