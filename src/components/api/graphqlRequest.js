export default async function graphqlRequest(query){
    const url="https://blogscloudproai-7a4c2b.ingress-erytho.ewp.live/graphql"
    const headers={
        'Content-Type': 'application/json',
    };

    const res=await fetch(url,{
        headers,
        method:'POST',
        body:JSON.stringify(query)
    })

    const resJson=await res.json();
    console.log(resJson)
    return resJson
}