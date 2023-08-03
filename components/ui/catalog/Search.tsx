import React, {FC} from 'react';
import {debounce} from 'debounce'
import {AiOutlineSearch} from "react-icons/Ai";
import clsx from 'clsx';
interface ISearch{
    setSearch:(text:string)=>void
    size?:'sm'|'md'|'lg'

}
const Search: FC<ISearch> = ({setSearch,size}) => {


    const apiDebounce = React.useCallback(
        debounce((e: string) => {
            if (setSearch) {
                setSearch(e)
            }
        }, 500),
        []
    )

    const onSetSearch=(text:string)=>{
        apiDebounce(text)
    }
    return (
        <div className={clsx(`py-0.5 relative w-96`,{
            'h-8': size === 'sm',
            'h-9': size === 'md',
            'h-11': size === 'lg',
        },)}>
            <AiOutlineSearch className='absolute top-1/4 right-3  z-10  ' size={22}/>
            <input placeholder='Поиск товара'  className='border w-96 border-gray-300 pl-2 h-full  p-1 rounded-xl relative focus:border-primary hover:border-primary 'onChange={(event)=>onSetSearch(event.target.value)} type='text'/>
        </div>
    );
};

export default Search;