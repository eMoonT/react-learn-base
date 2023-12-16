import { Link,useSearchParams,useParams } from "react-router-dom"

const Article = () => {
//   const [params] = useSearchParams()
  const params =  useParams()
  return (
    <div>Article {params.id} -- {params.name}</div>
  )
}

export default Article