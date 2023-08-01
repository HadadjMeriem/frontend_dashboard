import {Link} from 'react-router-dom';
import lung from '../../data/lungs-solid.svg'

export default function Header({
    heading,
    paragraph,
    linkName,
    linkUrl="#"
}){
    return(
        <div className="mb-10 mt-20 ">
            <div className="flex  justify-center">
                <img 
                    alt=""
                    className="h-14 w-14"
                   src={lung} />
                  
            </div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                {heading}
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600 mt-5">
            {paragraph} {' '}
            <Link to={linkUrl} className="font-medium text-indigo-800 hover:text-indigo-600">
                {linkName}
            </Link>
            </p>
        </div>
    )
}