type UserData = {
  name: string
}

type Request = {
  isLoading: boolean
}

type ErrorResult = {
  error: Error | null
}

type UseEmailShareReuslt = [UserData, Request, ErrorResult]

export default function useEmailShare(): UseEmailShareReuslt {
  const user: UserData = { name: "Andres" }
  const request: Request = { isLoading: false }
  const error: ErrorResult = { error: new Error('I broke!') }

  const result: UseEmailShareReuslt = [user, request, error]

  return result
}
