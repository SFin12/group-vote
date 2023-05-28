import { useSession } from "next-auth/react"
import { useEffect, useState } from "react"
import Layout from "../../components/Layout"
import LinkButton from "../../components/LinkButton"

type Props = {}

export default function MyGroupsPage({}: Props) {
  const { data: session, status } = useSession()
  const [content, setContent] = useState([])
 
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/my-groups")
      const json = await res.json()
      if (json.content) {
        console.log(json.content)
        setContent(json.content)
      }
    }
    fetchData()
  },[session])

  if (status === "loading") return <div>Loading...</div>
  if (status === "unauthenticated") return <div>Not logged in</div>
  if (status === "authenticated") {
    return (
      <Layout>
        <div className="flex flex-col items-center justify-center">
          <h1 className="">My Groups</h1>
         
            {content?.map((group) => (
              <div key={group.id}>
                <LinkButton href={`/my-groups/${group.id}`} className="bg-primary w-fit">{group.name}</LinkButton>
              </div>
            ))
  }
       
        </div>
      </Layout>
    )
  }
}
