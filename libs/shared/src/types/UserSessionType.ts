export type UserSessionType = {
  id: string;
  username: string,
  userId: string,
  ipAddress: string,
  start: number,
  lastAccess: number,
  clients: Record<string, string>,
}