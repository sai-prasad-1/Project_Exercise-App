interface fetchOptions {
  method: string;
  headers: {
    [key: string]: string;
    
  };
}
export const Exersiseoptions:fetchOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'aa48ff1e22msh1bf0122d0a45e16p1af372jsnd3c9a25f6775',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

  export const youtubeOptions:fetchOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
      'X-RapidAPI-Key': 'aa48ff1e22msh1bf0122d0a45e16p1af372jsnd3c9a25f6775',
    },
  };




export const fetchData =async(url:string,options:fetchOptions) =>{
    const response = fetch(url,options);
    const data =(await response).json();
    return data
}
