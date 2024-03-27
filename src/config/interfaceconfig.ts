export interface UserJSON {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    status: boolean;
    birthday: Date;
    skills: string[];
    avatar: {
      name: string;
      percent: number;
      size: number;
      status: string;
      type: string;
      uid: string;
      url: string;
    }[];
  }