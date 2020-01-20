export interface Posts{
    id: number;
    description: string;
    iconUrl: string;
    imageUrl: string;
    username: string;
    comments: Comments[];
    numberLikes: number;
    liked: boolean;
    flagLiked: boolean;
}

export interface Comments {
    username: string;
    comment: string;
}

export class  PostComment {
    id: number;
    fullName: string;
    accountName: string;
    photoUrl: string;
    comment: string;
}