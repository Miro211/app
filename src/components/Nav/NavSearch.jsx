import Style from './NavSearch.module.css'
export default function Search(){
    return(
        <div className={Style.search}>
            <input type="search" placeholder='Որոնում' />
        </div>
    )
}
