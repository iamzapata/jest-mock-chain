import useEmailShare from "./useEmailShare"

export const EmailShare = () => {
  const [userDdata, { isLoading }, { error }] = useEmailShare()

  if(error) return <div>Oops! Nothing to see here!</div>

  if (isLoading || !userDdata) return null

  const { name } = userDdata

  return <div>Hello, {name}!</div>
}
