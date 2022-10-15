export const getBlogPostIds = async()=>{
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    const blogIds = data.map(item=>{
        return { params: { id: item.id.toString()  }}
    });

    return blogIds
}