type UserData = {
  name: string;
}

type Request = {
  isLoading: boolean;
}

type Error = {
  error: string;
}

type UseEmailShareReuslt = [
  UserData,
  Request,
  Error
]


export default function useEmailShare(): UseEmailShareReusltyarn  {
  return [
    { name: "email" },
    { isLoading: true },
    { error: "error" },
  ]
}
