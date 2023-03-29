import { Link } from 'react-router-dom'
import { RiEdit2Fill, RiDeleteBin6Fill } from 'react-icons/ri'

export default function BookTable({ title, id, onClick }) {
    // états
    // comportements
    // rendu navigateur
  return (
    <>
        <td className="border border-slate-100"> {id} </td>
        <td className="border border-slate-100"> {title} </td>
        <td className="border border-slate-100 text-center py-2">
            <button className="btn btn-sm bg-blue-600 text-white mr-0 mb-2 md:mb-0 md:mr-2" title="Mettre  jour le livre"
                
            > 
                <Link to={`/livre/${id}`}> <RiEdit2Fill size={20} /> </Link>
            </button>
            <button className="btn btn-sm bg-red-600 text-white" title="Supprimer le livre" onClick={onClick}> 
                <RiDeleteBin6Fill size={20} />
            </button>
        </td>
    </>
  )
}
