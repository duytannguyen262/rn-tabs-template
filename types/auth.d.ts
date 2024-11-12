type RefreshTokenBody = {
  refreshToken: string;
};

type RefreshTokenResponse = {
  data: {
    accessToken: string;
    refreshToken: string;
  };
};
