import { BookDetailsDto } from "../models/bookDetailsDto";

interface Props{
    book: BookDetailsDto;
}

export default function BookTableItem({book}:Props){
    return(
        <>
          <tr>
           <td key={book.id} className="px-2 py-1">{book.id}</td>
        <td>{book.title}</td>
        <td>{book.author}</td>
        <td>{book.description}</td>
        <td className="px-2 py-1"><button className="btn btn-warning">Update</button>
        <button className="btn btn-error">Delete</button></td>
      </tr>
        </>
    );
}