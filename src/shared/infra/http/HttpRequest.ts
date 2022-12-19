interface User {
  id: string;
}

interface ConnectedUsers {
  [key: string]: any;
}

export interface File {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  destination: string;
  filename: string;
  path: string;
  size: number;
}

export interface HttpRequest {
  body?: any;
  user: User;
  clientIp?: string;
  permissions: string[];
  params?: any;
  io: any;
  query?: {
    [key: string]: any;
  };
  connectedUsers: ConnectedUsers;
  file?: File;
}
