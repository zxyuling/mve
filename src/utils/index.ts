export default {
	resolve:data=>path=>{
	    if(path===undefined){
	      return data
	    }
	    const pathArr = Object.prototype.toString.call(path) == '[object Array]'
	    ?path
	    :path
	      .replace(/\[['"`]?|['"`]?\]/g,'.')
	      .replace(/^\.|\.$/g,'')

	      .split(/\.+/)
	    return pathArr.reduce((item1,item2)=>item1?item1[item2]:item1,data)
	}
}