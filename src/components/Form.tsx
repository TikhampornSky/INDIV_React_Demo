import React, {FC, ChangeEvent, MouseEvent, useState, Dispatch, SetStateAction } from 'react'   //FC = Function Component
import { SeriesProps } from '../interfaces/SeriesProps' 

interface Props {                   //props ที่รับเข้ามา
    seriesList: SeriesProps["seriesList"],       //กำหนด Type โดยกำหนดตัว Type เป็น SeriesProps["seriesList"] 
    setSeriesList: Dispatch<SetStateAction<SeriesProps["seriesList"]>>          //Dispatch<Action>
}

const Form: FC<Props> = ({ seriesList, setSeriesList }) => {         //FC<Props> คือการรับ Props เข้ามาทำงาน
    const [name, setName] = useState("")
    const [genre, setGenre] = useState("")
    const [cover, setCover] = useState("")
    const [imdb, setImdb] = useState<SeriesProps | any>(0)
    const [seasons, setSeasons] = useState<SeriesProps | any>(0)        //<SeriesProps | any> = set type to be "Any"

    //console.log(name, genre, cover, imdb, seasons)

    const setNameinputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    }
    const setGenreinputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setGenre(event.target.value)
    }
    const setCoverinputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setCover(event.target.value)
    }
    const setImdbinputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setImdb(event.target.value)
    }
    const setSeasonsinputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setSeasons(event.target.value)
    }

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        if (!name && !genre && !cover && !imdb && !seasons) {
            alert("Please Fill In Every Box")
            return ;
        }
        const seriesData = {name, genre, cover, imdb, seasons}
        setSeriesList([...seriesList, seriesData])      //Update Series Data
        setName("")
        setGenre("")
        setCover("")
        setImdb(0)
        setSeasons(0)
    }

    return (
        <div>
            <h1> Form </h1>
            <div className='form-container'>
                <div className='form-div'>
                    <label htmlFor='name'>Name</label>
                    <input type="text" name="name" value={name} onChange={setNameinputHandler}></input>
                </div>
                <div className='form-div'>
                    <label htmlFor='genre'>Genre</label>
                    <input type="text" name="genre" value={genre} onChange={setGenreinputHandler}></input>
                </div>
                <div className='form-div'>
                    <label htmlFor='cover'>Cover</label>
                    <input type="text" name="cover" value={cover} onChange={setCoverinputHandler}></input>
                </div>
                <div className='form-div'>
                    <label htmlFor='imdb'>IMDB</label>
                    <input type="number" name="imdb" value={imdb} onChange={setImdbinputHandler}></input>
                </div>
                <div className='form-div'>
                    <label htmlFor='seasons'>Seasons</label>
                    <input type="number" name="seasons" value={seasons} onChange={setSeasonsinputHandler}></input>
                </div>
                <button type="button" onClick={handleClick}>ADD Series</button>
            </div>
        </div>
    )
}

export default Form