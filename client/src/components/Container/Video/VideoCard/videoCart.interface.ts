export interface trendingINF {
  snippet : { [key: string]: any },
  statistics:{ [key: string]: any },
  id: string,
  setCurrentId:(arg:any)=>string
}
