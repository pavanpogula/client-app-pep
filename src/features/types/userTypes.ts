export type Address = {
    street: string,
    city: string,
    state: string,
    counntry: string
  }
  
export type User = {
    id: string,
    firstname: string,
    lastname: string,
    email: string,
    address: Address
  }
  export type signup={
    message:string
}
export type userExist={
    message:"409"|"500"|"200"
}

export type UserInitialState = {
    loggedStatus:{
        uid:string|null,
        loading:boolean
    },
    loading: boolean
    user: User
    error: string
    signup:signup,
    userExist:userExist
  }