export interface SeriesProps {              //Interface = กำหนดชนิดข้อมูลให้กับ Component
    seriesList: {                           //properties
        name: string;
        imdb: number;
        cover: string;
        seasons: number;
        genre: string;
    }[]
}