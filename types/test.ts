// https://openapi-ts.dev/introduction
import { components, paths } from "./schema";

type MyType = components["schemas"]["User"];

const aa:MyType = {
    username:'leeeeeee',
    password:'12321'
}
console.log(aa.username);

type UserResponse = paths["/user/{username}"]["get"]["responses"]["200"]["content"]["application/json"]
const responseUser:UserResponse = {}

const aaaaa = ():string => responseUser.firstName || ''

