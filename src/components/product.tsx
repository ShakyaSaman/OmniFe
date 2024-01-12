import { useState } from 'react'
import React from 'react'
import { FontAwesomeIcon } from '../fontawesome';

interface productProps {
  currentCardData: {
    title: string;
    cardDesc: string;
    accordianInfos: Array<{
      accordionTitle: string;
      accordionContent: string;
    }>
  },
  currentCardIndex: number
}

const Product: React.FC<productProps> = (props) => {
  const [selectedAcc, setSelectedAcc] = useState<Object>({})

  const toggle = (i: number) => {
    if (selectedAcc && selectedAcc[props.currentCardIndex]?.accIndex == i) {
      return setSelectedAcc((prevObj) => ({
        ...prevObj,
        [props.currentCardIndex]: null
      }))
    }
    console.log('selectedAcc', selectedAcc)
    setSelectedAcc((prevObj) => ({
      ...prevObj,
      [props.currentCardIndex]: {
        accIndex: i
      }
    }))
  }

  const showModal = () => {
     document.querySelector('#modal')?.classList.remove('hidden')
  }

  return (
    <>
      <div className="product-info w-[40%] flex flex-col justify-between mobile:w-[100%]">
        <div className="text-[48px] leading-[57px] font-[600] mobile:text-[32px] mobile:leading-[38px]">
          {props.currentCardData.title}
        </div>
        <div className="product-desc line-clamp-5 break-words text-[24px] leading-[32px] font-[400] mobile:text-[20px] mobile:leading-[28px] max-h-52 overflow-hidden ">
          {props.currentCardData.cardDesc}
        </div>
        <button className='mobile:hidden self-start mt-24 text-[20px] leading-[24px] font-[600] bg-[#F15A29] text-[#000000] border-[#000000] border-[3px] rounded-[40px] pt-[10px] pr-[24px] pb-[10px] pl-[24px]' onClick={showModal} >
          Discover product
        </button>
      </div>

      <div className='accordian-list w-[60%] max-h-[400px] overflow-scroll mobile:self-center mobile:w-[100%] mobile:mt-6'>
        {props.currentCardData.accordianInfos.map((item, index) => (
          <div className='border-b border-black pb-2 cursor-pointer' onClick={() => toggle(index)}>
            <div className='flex justify-between items-center'>
              <div className='text-[#000000] font-[500] text-[18px]' key={index}>
                <FontAwesomeIcon icon="circle-nodes" className='mr-4 self-center'/>
                {item.accordionTitle}
                </div>
              <FontAwesomeIcon icon="chevron-down" />
            </div>
            <div onClick={(e) => e.stopPropagation()} className={selectedAcc && selectedAcc[props.currentCardIndex]?.accIndex == index ? 'accordian-content show' : 'accordian-content'}>
              {item.accordionContent}
            </div>

          </div>

        )
        )}
      </div>

      <button className='hidden mobile:block self-start mt-24 text-[20px] leading-[24px] font-[600] bg-[#F15A29] text-[#000000] border-[#000000] border-[3px] rounded-[40px] pt-[10px] pr-[18px] pb-[10px] pl-[18px]' onClick={showModal} >
          Discover product
        </button>
    </>
  )
}

export default React.memo(Product);
