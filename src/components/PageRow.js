export default function PageRow({title, description}) {
  return (
    <div className="page-row border-4 pl-2 pb-2 pt-1 sm:p-5 sm:pt-2 sm:p-2 my-5 truncate">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  )
}
