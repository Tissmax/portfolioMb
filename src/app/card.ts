export interface Card {
    id: number;
    title: string;
    text: string;
    description: string;
    iconUrl: [
        {id: number, url: string},
        {id: number, url: string},
        {id: number, url: string},
        {id: number, url: string},

    ]
}
