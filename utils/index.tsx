 const SortByDate=(a:any,b:any)=>{
return new Date(b.frontMatter.date).getTime() - new Date(a.frontMatter.date).getTime()
}
export default SortByDate