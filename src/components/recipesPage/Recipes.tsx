import React, { useState } from 'react'
import useBaseUrl from "@docusaurus/useBaseUrl";
import { useHistory } from 'react-router-dom';
import SearchBar from '@site/src/theme/SearchBar';

const filters = [{ "Technology": ["React UI kit", "Angular UI kit"] }, { "Tutorials type": ["Video", "Text", "docusaurus"] }, { "Industries": ["Team Comms", "Dating"] }, { "Integration tool": ["SDK", "Widget"] }]
const filterListData = [];
const Recipes = ({ props }) => {
    const [hideFilter, setHideFilter] = useState(false);
    const [hideFilterMobile, sethideFilterMobile] = useState(true);
    const [filterList, setFilterList] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);



    let baseURL = useBaseUrl('/').slice(0,-1)
    return (

        <div className='recipes-container flex flex-col px-4 md:px-16 dark:bg-black'>
            <div className='filter flex justify-between  pt-12 pb-6'>
                <div className='hide-filter z-10 cursor-pointer'>
                    <button className='ml-2 px-4 py-2 rounded-lg border-solid border-2 bg-gray-100 font-satoshi border-gray-300 font-medium dark:bg-cst-black dark:border-cst-border-dark hidden lg:block' onClick={() => { setHideFilter(!hideFilter) }}> {hideFilter ? "Show Filter" : "Hide Filters"}</button>
                    <button className='ml-2 px-4 py-2 rounded-lg border-solid border-2 bg-gray-100 font-satoshi border-gray-300 font-medium dark:bg-cst-black dark:border-cst-border-dark lg:hidden block' onClick={() => { sethideFilterMobile(!hideFilterMobile) }}> {hideFilterMobile ? "Filter" : "Hide"}</button>
                </div>
                <span className='blog-search-bar'>
                    <SearchBar props={{ contextualSearch: true, searchParameters: { facetFilters: ["hierarchy.lvl0:Blog"] } }} />
                </span>
            </div>
            <div className='content grid grid-flow-col grid-cols-12 gap-4'>
                {!hideFilter && <div className={` ${!hideFilter ? 'filters md:col-span-3 bg-white-100' : ''} ${hideFilterMobile ? 'hidden lg:block' : 'block lg:hidden col-span-12'}`}>

                    <>
                            <Filters filterList={filterList} setFilterList={setFilterList} />
                            <div className='flex gap-2 mt-8 items-center ml-2 cursor-pointer' onClick={() => {
                                setFilterList([])
                            }}>
                                <div className='text-md  font-satoshi font-bold'>
                                    Reset Filters
                                </div>
                                <img className='' src={baseURL+"/icons/trash.svg"} />
                            </div>
                        </>


                </div>}
                <div className='flex flex-col w-full'>

                    <div className={`recipes grid  ${!hideFilter ? ' grid-cols-1  gap-5 col-span-12 lg:col-span-9 ' : 'grid-cols-1  gap-5 lg:col-span-12 m-auto'} ${hideFilterMobile ? 'lg:col-span-1' : 'md:grid hidden'} `}>
                        <Card props={props} filterList={filterList} currentPage={currentPage} />
                    </div>

                </div>
            </div>
            <div>
                <div className='grid grid-flow-col grid-cols-12 mt-5'>
                    <div className={`${hideFilter ? "" : "col-span-3"}`}></div>
                    <div className={` m-auto z-50 ${hideFilter ? "col-span-12" : "col-span-9"}`}>

                        <Pagination filterList={filterList} props={props} currentPage={currentPage} setCurrentPage={setCurrentPage} baseURL={baseURL} />

                    </div>
                </div>
            </div>
            <NewsLetter />
        </div >
    )
}

function transformData(items, filterList) {

    let cardData = items.map(({ content }) => {

        return {
            title: content.metadata.title,
            description: content.metadata.description,
            date: content.metadata.date,
            formattedDate: content.metadata.formattedDate,
            permalink: content.metadata.permalink,
            tags: content.metadata.tags,
            link: content.metadata.permalink

        }
    })
    if (filterList.length > 0) {
        const data = cardData.filter(element => {

            let result = element.tags.map(element => {
                return element.label
            });
            return filterList.every(val => result.includes(val))
        });

        return data;
    }


    return cardData
}

function Pagination({ filterList, props, currentPage, setCurrentPage, baseURL }) {
    const data = transformData(props.items, filterList);
    const recipesPerPage = 2;
    const totalPage = Math.ceil(data?.length / recipesPerPage);

    const handleNextPage = () => {
        if (currentPage < totalPage - 1) {
            setCurrentPage(currentPage + 1);
        }
    }

    const handlePrevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1)
        }
    }

    return (
        <div className='flex gap-5 mt-4 w-full '>

            <img className='cursor-pointer' onClick={handlePrevPage} src={`${baseURL + "/icons/chevron-left.svg"}`} />
            {Array(totalPage).fill(0).map((_, i) =>
                <span
                    key={i}
                    onClick={() => setCurrentPage(i)}
                    className={currentPage === i ? 'active px-2 rounded-lg bg-gray-200 border border-solid border-gray-300 cursor-pointer font-satoshi font-semibold' : 'cursor-pointer'}
                >
                    {i + 1}
                </span>
            )}

            <img className='cursor-pointer' onClick={handleNextPage} src={`${baseURL + "/icons/chevron-right.svg"}`} />
        </div>
    )
}

// {data.slice(currentPage, (currentPage * recipesPerPage) + recipesPerPage).map((item) => {
//     return <div>{item}</div>
// })}

function Card({ props, filterList, currentPage }) {
    const history = useHistory();
    const { items } = props
    const data = transformData(items, filterList)
    const recipesPerPage = 2;
    const currentItems = data.slice(currentPage * recipesPerPage, (currentPage + 1) * recipesPerPage);
    return currentItems.map((item, index) => {
        return (
            <div key={index} className="  p-4  recipe-card dark:bg-gray-200 dark:border-white cursor-pointer" onClick={() => {
            history.push(item.permalink)
        }}>
            <h1 className='font-semibold font-satoshi'>{item.title}</h1>
            <hr className='bg-black w-[30%] h-[2px] m-0' />
            <p className='font-satoshi mt-4 '>{item.description}</p>
            <div className='flex gap-2 recipes-filter-badges flex-wrap'>
                {filterList.map((tag) => {
                    return <button className='px-2 py-1 font-satoshi border-gray-300  font-semibold'>{tag}</button>
                })}
            </div>

        </div >)
    })
}

function Filters({ filterList, setFilterList }) {

    let baseURL = useBaseUrl('/').slice(0,-1)
    const [toggle, setToggle] = useState([true, true, true, true])


    const handleFilterList = (item) => {
        if (filterList.includes(item)) {
            setFilterList(filterList.filter((i) => { return i != item }))
        }
        else {
            setFilterList([...filterList, item])
        }
    }

    const handleToggle = (index) => {
        let arr = toggle.map((item, i) => {
            if (i == index) return !item
            return item
        })
        setToggle(arr)
    }
    return <div>
        {filters.map((tech, index) => {
            return (<div key={Object.keys(tech)[0]} className='p-2 pt-0 ' >
                <hr className={index === 0 ? 'mt-0' : 'mt-6'} />
                <div className='flex justify-between ' onClick={() => handleToggle(index)}>
                    <h2 className='font-satoshi font-medium'>{Object.keys(tech)}</h2>
                    <button className={`dark:bg-black filter-caret ${toggle[index] ? 'active' : ''} mt-2`} ></button>
                </div>
                {toggle[index] && <div className='flex flex-wrap'>
                    {tech[`${[Object.keys(tech)]}`].map((item, index) => {
                        return <div key={index} className={`dark:border-cst-border-dark filter-button flex gap-2 px-2 rounded-lg border-solid border-2  font-satoshi font-medium  m-1 w-fit ${filterList.includes(item) ? 'active' : ''}`} onClick={() => handleFilterList(item)}> <span>{item}</span> <img className='cross-button' src={`${baseURL + "/icons/cross.svg"}`} /></div >
                    })}

                </div>
                }
            </div>)
        })}
    </div>
}

function NewsLetter() {
    let baseURL = useBaseUrl('/').slice(0,-1)
    return <>
        <div className='news-letter-container dark:bg-gray-900 relative'>
            <img src={useBaseUrl("/imgs/news-letter-planet.svg")} alt="planet" className="absolute news-letter-planet-1" />
            <div className='news-letter-content md:h-70 md:w-[60%] '>
                <h3 className='font-satoshi'>Join Our newsletter</h3>
                <h1 className='font-satoshi dark:text-white '>What you need to know to create your product with Comectchat.</h1>
                <div className='flex gap-2 '>
                    <div className='flex items-center newsletter-input gap-3 dark:border-white dark:bg-gray-200'>
                        <img className='' src={`${baseURL+"/icons/mail.svg"}`} />
                        <input className='font-satoshi  focus:outline-none focus:border-none dark:text-black' placeholder='Type your email...' />
                    </div>
                    <button className='font-satoshi newsletter-btn border-none cursor-pointer' > Subscribe </button>
                </div>
            </div>
        </div>
    </>
}

export default Recipes


