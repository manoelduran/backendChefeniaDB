declare namespace Express {
    export interface Request {
        user: {
            id: string;
        };
        permissions: string[];
        io: any;
        connectedUsers: {
            [key: string]: string;
        };
    }
}