export type CredentialType = {
  username: string;
  password: string;
}

export type TokensType = {
  access_token: string;
  expires_in: number;
  refresh_expires_in: number;
  refresh_token: string;
}
