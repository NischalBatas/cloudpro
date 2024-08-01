import { NextResponse } from "next/server"


export function middleware(request){
// console.log('middlewareww')


// Redirect to login when we access other page
// if (request.nextUrl.pathname!=='/login'){
// return NextResponse.redirect(new URL('/login',request.url))
// }


return NextResponse.redirect(new URL('/',request.url))
}


export const config={
matcher:[
'/newsletter',
'/en/dashboards/crm'
]
}
