export async function fetchCars(){
  const headers = {
    'X-RapidAPI-Key': '5b77a9c950msh1b96a2c0f4f1149p199571jsn1a4b04bf7d9d',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
  }
  const response = fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',{headers:headers}) 
  const result = (await response).json()
  return result
}
