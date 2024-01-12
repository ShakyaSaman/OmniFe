import { useState } from 'react'
import './App.css'
import Card from './components/card';
import Product from './components/product';

interface cardObjType {
  title: string;
  cardDesc: string;
  accordianInfos: Array<{
    accordionTitle: string;
    accordionContent: string;
  }>
}

const cardData: cardObjType[] = []

for(let i = 0; i < 8; i++){
  cardData.push({
      title: "card number " + i,
      cardDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mollis sodales nulla, quis dictum odio vehicula ac. Praesent venenatis nisi quis ante euismod tincidunt. Phasellus at metus et lectus blandit sodales. Nulla facilisi. Aliquam dapibus dui eu nulla faucibus, nec condimentum tellus auctor. Sed congue, nisl et aliquam posuere, urna dui ullamcorper neque, vel varius tortor elit ac augue. Praesent fringilla turpis tortor, id sodales tortor vulputate sed. Aliquam eget posuere turpis. Morbi luctus magna sit amet orci condimentum laoreet. Quisque vitae dignissim augue, sit amet semper ex. ",
      accordianInfos: [
        {
          accordionTitle: "Accordion Title",
          accordionContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus venenatis nulla sed neque cursus viverra. Sed mattis sit amet mauris et fringilla. Aliquam rhoncus convallis lorem eu pharetra. Ut finibus nibh vitae mauris pellentesque mattis. Ut nulla nulla, vulputate et tellus vel, interdum auctor justo. In nec arcu ut nisi suscipit scelerisque ac volutpat nibh. Nullam sagittis consectetur eros, non tincidunt nisi sagittis faucibus. Ut eget lacus eleifend, sollicitudin tellus sit amet, elementum quam. Duis sagittis at lorem ut varius. Cras id libero id tellus lobortis facilisis."
        },
        {
          accordionTitle: "Accordion Title",
          accordionContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus venenatis nulla sed neque cursus viverra. Sed mattis sit amet mauris et fringilla. Aliquam rhoncus convallis lorem eu pharetra. Ut finibus nibh vitae mauris pellentesque mattis. Ut nulla nulla, vulputate et tellus vel, interdum auctor justo. In nec arcu ut nisi suscipit scelerisque ac volutpat nibh. Nullam sagittis consectetur eros, non tincidunt nisi sagittis faucibus. Ut eget lacus eleifend, sollicitudin tellus sit amet, elementum quam. Duis sagittis at lorem ut varius. Cras id libero id tellus lobortis facilisis."
        },
        {
          accordionTitle: "Accordion Title",
          accordionContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus venenatis nulla sed neque cursus viverra. Sed mattis sit amet mauris et fringilla. Aliquam rhoncus convallis lorem eu pharetra. Ut finibus nibh vitae mauris pellentesque mattis. Ut nulla nulla, vulputate et tellus vel, interdum auctor justo. In nec arcu ut nisi suscipit scelerisque ac volutpat nibh. Nullam sagittis consectetur eros, non tincidunt nisi sagittis faucibus. Ut eget lacus eleifend, sollicitudin tellus sit amet, elementum quam. Duis sagittis at lorem ut varius. Cras id libero id tellus lobortis facilisis."
        },
        {
          accordionTitle: "Accordion Title",
          accordionContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus venenatis nulla sed neque cursus viverra. Sed mattis sit amet mauris et fringilla. Aliquam rhoncus convallis lorem eu pharetra. Ut finibus nibh vitae mauris pellentesque mattis. Ut nulla nulla, vulputate et tellus vel, interdum auctor justo. In nec arcu ut nisi suscipit scelerisque ac volutpat nibh. Nullam sagittis consectetur eros, non tincidunt nisi sagittis faucibus. Ut eget lacus eleifend, sollicitudin tellus sit amet, elementum quam. Duis sagittis at lorem ut varius. Cras id libero id tellus lobortis facilisis."
        },
        {
          accordionTitle: "Accordion Title",
          accordionContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus venenatis nulla sed neque cursus viverra. Sed mattis sit amet mauris et fringilla. Aliquam rhoncus convallis lorem eu pharetra. Ut finibus nibh vitae mauris pellentesque mattis. Ut nulla nulla, vulputate et tellus vel, interdum auctor justo. In nec arcu ut nisi suscipit scelerisque ac volutpat nibh. Nullam sagittis consectetur eros, non tincidunt nisi sagittis faucibus. Ut eget lacus eleifend, sollicitudin tellus sit amet, elementum quam. Duis sagittis at lorem ut varius. Cras id libero id tellus lobortis facilisis."
        },
        {
          accordionTitle: "Accordion Title",
          accordionContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus venenatis nulla sed neque cursus viverra. Sed mattis sit amet mauris et fringilla. Aliquam rhoncus convallis lorem eu pharetra. Ut finibus nibh vitae mauris pellentesque mattis. Ut nulla nulla, vulputate et tellus vel, interdum auctor justo. In nec arcu ut nisi suscipit scelerisque ac volutpat nibh. Nullam sagittis consectetur eros, non tincidunt nisi sagittis faucibus. Ut eget lacus eleifend, sollicitudin tellus sit amet, elementum quam. Duis sagittis at lorem ut varius. Cras id libero id tellus lobortis facilisis."
        },
        {
          accordionTitle: "Accordion Title",
          accordionContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus venenatis nulla sed neque cursus viverra. Sed mattis sit amet mauris et fringilla. Aliquam rhoncus convallis lorem eu pharetra. Ut finibus nibh vitae mauris pellentesque mattis. Ut nulla nulla, vulputate et tellus vel, interdum auctor justo. In nec arcu ut nisi suscipit scelerisque ac volutpat nibh. Nullam sagittis consectetur eros, non tincidunt nisi sagittis faucibus. Ut eget lacus eleifend, sollicitudin tellus sit amet, elementum quam. Duis sagittis at lorem ut varius. Cras id libero id tellus lobortis facilisis."
        },
        {
          accordionTitle: "Accordion Title",
          accordionContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus venenatis nulla sed neque cursus viverra. Sed mattis sit amet mauris et fringilla. Aliquam rhoncus convallis lorem eu pharetra. Ut finibus nibh vitae mauris pellentesque mattis. Ut nulla nulla, vulputate et tellus vel, interdum auctor justo. In nec arcu ut nisi suscipit scelerisque ac volutpat nibh. Nullam sagittis consectetur eros, non tincidunt nisi sagittis faucibus. Ut eget lacus eleifend, sollicitudin tellus sit amet, elementum quam. Duis sagittis at lorem ut varius. Cras id libero id tellus lobortis facilisis."
        },
        {
          accordionTitle: "Accordion Title",
          accordionContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus venenatis nulla sed neque cursus viverra. Sed mattis sit amet mauris et fringilla. Aliquam rhoncus convallis lorem eu pharetra. Ut finibus nibh vitae mauris pellentesque mattis. Ut nulla nulla, vulputate et tellus vel, interdum auctor justo. In nec arcu ut nisi suscipit scelerisque ac volutpat nibh. Nullam sagittis consectetur eros, non tincidunt nisi sagittis faucibus. Ut eget lacus eleifend, sollicitudin tellus sit amet, elementum quam. Duis sagittis at lorem ut varius. Cras id libero id tellus lobortis facilisis."
        },
        {
          accordionTitle: "Accordion Title",
          accordionContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus venenatis nulla sed neque cursus viverra. Sed mattis sit amet mauris et fringilla. Aliquam rhoncus convallis lorem eu pharetra. Ut finibus nibh vitae mauris pellentesque mattis. Ut nulla nulla, vulputate et tellus vel, interdum auctor justo. In nec arcu ut nisi suscipit scelerisque ac volutpat nibh. Nullam sagittis consectetur eros, non tincidunt nisi sagittis faucibus. Ut eget lacus eleifend, sollicitudin tellus sit amet, elementum quam. Duis sagittis at lorem ut varius. Cras id libero id tellus lobortis facilisis."
        },
        {
          accordionTitle: "Accordion Title",
          accordionContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus venenatis nulla sed neque cursus viverra. Sed mattis sit amet mauris et fringilla. Aliquam rhoncus convallis lorem eu pharetra. Ut finibus nibh vitae mauris pellentesque mattis. Ut nulla nulla, vulputate et tellus vel, interdum auctor justo. In nec arcu ut nisi suscipit scelerisque ac volutpat nibh. Nullam sagittis consectetur eros, non tincidunt nisi sagittis faucibus. Ut eget lacus eleifend, sollicitudin tellus sit amet, elementum quam. Duis sagittis at lorem ut varius. Cras id libero id tellus lobortis facilisis."
        },
        {
          accordionTitle: "Accordion Title",
          accordionContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus venenatis nulla sed neque cursus viverra. Sed mattis sit amet mauris et fringilla. Aliquam rhoncus convallis lorem eu pharetra. Ut finibus nibh vitae mauris pellentesque mattis. Ut nulla nulla, vulputate et tellus vel, interdum auctor justo. In nec arcu ut nisi suscipit scelerisque ac volutpat nibh. Nullam sagittis consectetur eros, non tincidunt nisi sagittis faucibus. Ut eget lacus eleifend, sollicitudin tellus sit amet, elementum quam. Duis sagittis at lorem ut varius. Cras id libero id tellus lobortis facilisis."
        },
        {
          accordionTitle: "Accordion Title",
          accordionContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus venenatis nulla sed neque cursus viverra. Sed mattis sit amet mauris et fringilla. Aliquam rhoncus convallis lorem eu pharetra. Ut finibus nibh vitae mauris pellentesque mattis. Ut nulla nulla, vulputate et tellus vel, interdum auctor justo. In nec arcu ut nisi suscipit scelerisque ac volutpat nibh. Nullam sagittis consectetur eros, non tincidunt nisi sagittis faucibus. Ut eget lacus eleifend, sollicitudin tellus sit amet, elementum quam. Duis sagittis at lorem ut varius. Cras id libero id tellus lobortis facilisis."
        },
        {
          accordionTitle: "Accordion Title",
          accordionContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus venenatis nulla sed neque cursus viverra. Sed mattis sit amet mauris et fringilla. Aliquam rhoncus convallis lorem eu pharetra. Ut finibus nibh vitae mauris pellentesque mattis. Ut nulla nulla, vulputate et tellus vel, interdum auctor justo. In nec arcu ut nisi suscipit scelerisque ac volutpat nibh. Nullam sagittis consectetur eros, non tincidunt nisi sagittis faucibus. Ut eget lacus eleifend, sollicitudin tellus sit amet, elementum quam. Duis sagittis at lorem ut varius. Cras id libero id tellus lobortis facilisis."
        },
        {
          accordionTitle: "Accordion Title",
          accordionContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus venenatis nulla sed neque cursus viverra. Sed mattis sit amet mauris et fringilla. Aliquam rhoncus convallis lorem eu pharetra. Ut finibus nibh vitae mauris pellentesque mattis. Ut nulla nulla, vulputate et tellus vel, interdum auctor justo. In nec arcu ut nisi suscipit scelerisque ac volutpat nibh. Nullam sagittis consectetur eros, non tincidunt nisi sagittis faucibus. Ut eget lacus eleifend, sollicitudin tellus sit amet, elementum quam. Duis sagittis at lorem ut varius. Cras id libero id tellus lobortis facilisis."
        },
        {
          accordionTitle: "Accordion Title",
          accordionContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus venenatis nulla sed neque cursus viverra. Sed mattis sit amet mauris et fringilla. Aliquam rhoncus convallis lorem eu pharetra. Ut finibus nibh vitae mauris pellentesque mattis. Ut nulla nulla, vulputate et tellus vel, interdum auctor justo. In nec arcu ut nisi suscipit scelerisque ac volutpat nibh. Nullam sagittis consectetur eros, non tincidunt nisi sagittis faucibus. Ut eget lacus eleifend, sollicitudin tellus sit amet, elementum quam. Duis sagittis at lorem ut varius. Cras id libero id tellus lobortis facilisis."
        }
      ]
    })
}

function App() {
  const [data, setUseData] = useState<Array<cardObjType>>(cardData)
  const [currentCardIndex, setCurrentCardIndex] = useState<number>(0)
  return (
    <div id="main-container" className='flex flex-col p-14'>
      <div className='flex flex-col items-center mb-7 text-[#000000]'>
        <span className='font-[600] text-[40px] leading-[48px]'>Section title</span>
        <span className='font-500] text-[24px] leading-[28.8px]'>Section subtitle</span>
      </div>
      <div id="card-container" className='flex justify-around w-full flex-wrap gap-[2%] items-center mobile:flex-col mobile:gap-5 gap-y-5'>
        {data.map((item, index) => (
          <Card key={index} cardIndex={index} cardObj={item} setCurrentCardIndex={setCurrentCardIndex} />
        ))}
      </div>


      <div id='product-container'className='mobile:hidden gap-8 bg-[#FFE58C] text-[#000000] rounded-3xl border-1 mt-5 flex justify-between pt-8 pr-12 pb-8 pl-12 self-center w-full'>
        <Product currentCardData={data[currentCardIndex]} currentCardIndex={currentCardIndex}  />
      </div>
      
    </div>
  )
}

export default App
