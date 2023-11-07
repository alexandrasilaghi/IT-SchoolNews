const API_KEY = "81dce922-43b8-4905-b25e-22d60efc8b5c";


export function getNewsCategoriesEndpoint(
    category,
    pageNumber = 1,
    pageSize = 20
){
const queryParams = `?api-key=${API_KEY}&section=${category}&show-fields=all&page-size=${pageSize}&page=${pageNumber}`;
 return `https://content.guardianapis.com/search${queryParams}`;
  }
  
export function getNewsDetailsEndpoint(newsId) {  
const queryParams = `?api-key=${API_KEY}&show-fields=all`;
return `https://content.guardianapis.com/${newsId}${queryParams}`;
  }
