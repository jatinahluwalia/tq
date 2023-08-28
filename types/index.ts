export type Hero = {
  id: number;
  name: string;
  alterEgo: string;
};

export type ServerError = {
  message: string;
};

export type User = {
  id: string;
  channelId: string;
};

export type Friends = {
  name: string;
};

export type Channel = {
  id: string;
  name: string;
};
