export async function  NasaAPIConnection(year) {
    let key="ZGhidUzvHQNt9GV0qqTMEfroIr51CyXtpD5qW8Eg"
    let date = year.toString() + "-12-25"
    let query = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=${key}`

    //fetch data
    let res = await fetch(query)

    //turn result into json
    let data = await res.json()

    //return object
    return data
}