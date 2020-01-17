export interface Posts{
    id: number;
    description: string;
    imageUrl: string;
    userAvatar: string;
    comments: Comments[];
    numberLikes: number;
    liked: boolean;
    flagLiked: boolean; 
    username: string;
}

export interface Comments{
    username: string;
    comment: string;
}

