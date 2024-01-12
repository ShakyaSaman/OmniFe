import { useState, useEffect } from 'react'
import React from 'react'
import Product from './product';
import { FontAwesomeIcon } from '../fontawesome';


interface cardProps {
  cardIndex: number;
  cardObj: {
    title: string;
    cardDesc: string;
    accordianInfos: Array<{
      accordionTitle: string;
      accordionContent: string;
    }>;
  };
  setCurrentCardIndex: React.Dispatch<React.SetStateAction<number>>
}

const Card: React.FC<cardProps> = ({ cardIndex, cardObj, setCurrentCardIndex }) => {
  const [isClicked, setIsClicked] = useState(false)

  useEffect(() => {
    let cardElm = document.querySelector(`[data-card-index="${cardIndex}"]`)
    if (isClicked) {
      cardElm?.classList.remove('mobile:min-h-16');
      cardElm?.classList.remove('max-h-72');
      cardElm?.classList.remove('mobile:h-16');
    } else {
      cardElm?.classList.add('mobile:min-h-16');
      cardElm?.classList.add('max-h-72');
      cardElm?.classList.add('mobile:h-16');
    }
  }, [isClicked]);

  const handleDiscoverClick = (e) => {

    setCurrentCardIndex(cardIndex)
    let classes = ['bg-[#FFD540]', 'border-[#000000]', 'border-b-[5px]','border-r-[8px]','border-t-0']
    e.currentTarget.classList.add(...classes)
    const elementsWithAttribute = document.querySelectorAll(`div[data-card-index]:not([data-card-index="${cardIndex}"])`)

    // Add a class to each element
    elementsWithAttribute.forEach(element => {
      if (element) {
        element.querySelector('[data-btn]').classList.remove(...classes);
        element.querySelector('[data-btn]').classList.add('bg-[#EBECF5]');
      }
    });
  }

  const handleCardAccordian = () => {
    setIsClicked(prevClick => !prevClick)
  }

  return (
    <>
      <div data-card-index={cardIndex} className='box-border rounded-xl max-h-72 min-h-72 bg-[#FFFFFF] border-2 w-1/5 p-4 min-w-64 relative flex flex-col mobile:justify-normal h-full shadow hover:shadow-lg mobile:h-16 mobile:min-h-16 mobile:w-[100%]  mobile:border-b-[10px] mobile:border-b-[#FFD540] mobile:p-[10%] mobile:rounded-b-3xl gap-4'>

        {/* top part */}
        <div className='flex justify-between mobile:gap-[10px] items-start'>
          <p className='self-start break-words line-clamp-2 mobile:h-10 mobile:order-2 mobile:leading-[14px] justify-items-center font-[500] text-[16px] leading-[24px] text-[#000000] sm:text-[24px] max-h-16 p-0' onClick={handleCardAccordian}>{cardObj.title}</p>
          <FontAwesomeIcon icon='heart' className='mobile:order-1 mobile:w-6 self-start' style={{ fontSize: '2em' }} />
          <button className='hidden mobile:block order-3 self-start' onClick={handleCardAccordian}>
            {isClicked ? (<FontAwesomeIcon icon="minus" />) : (<FontAwesomeIcon icon="plus" />)}
          </button>
        </div>

        {isClicked && (
          <div className='flex flex-col bg-[#FFE58C] text-[#000000] rounded-3xl border-1 mt-5 p-4'>
            <Product currentCardData={cardObj} currentCardIndex={cardIndex} />
          </div>
        )}


        <div className='mobile:hidden'>

          <p className='w-5/6 break-words overflow-clip max-h-32 h-32 line-clamp-5'>
            {cardObj.cardDesc}
          </p>


          <button data-btn onClick={(e) => handleDiscoverClick(e)} className={`min-w-fit hover:bg-[#FFD540]  bg-[#EBECF5] p-2 self-start w-1/2 rounded-tr-3xl drop-shadow-2xl flex justify-between items-center absolute bottom-0 left-0`}>
            <span>Discover</span>
            <FontAwesomeIcon icon="arrow-down" />
          </button>

        </div>

      </div>
    </>
  )
}

export default React.memo(Card)
