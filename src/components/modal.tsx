
interface cardProps {
    title: string;
    desc: string
  }

const Modal: React.FC<cardProps> = ({ title, desc }) => {
    return (
        <div id="modal" className="fixed inset-0 flex items-center justify-center hidden w-[80%] m-auto">
            <div className="fixed inset-0 bg-black opacity-50"></div>

            <div className="bg-white p-8 rounded-lg z-10">
                <h2 className="text-2xl font-bold mb-4">{title}</h2>
                <p>{desc}</p>
                <button id="closeModal" onClick={() => document.querySelector('#modal')?.classList.add('hidden')} className="bg-gray-500 text-white px-4 py-2 mt-4">Close</button>
            </div>
        </div>
    )
}

export default Modal

