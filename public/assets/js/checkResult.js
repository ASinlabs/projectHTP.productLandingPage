const email = document.getElementById("email");
const month = document.getElementById("month");
const day = document.getElementById("day");
const year = document.getElementById("year");

const url = "https://projecthtp.herokuapp.com/";
// const url = "http://localhost:7006/";


document.getElementById("sigin").addEventListener('click', async () => {


    let date = new Date(
        month.value + "/" + day.value + "/" + year.value
    );
    if(!email.value){
        alert("Email is required");
        return;
    }
    if (date?.toString() === "Invalid Date") {
        alert("Date of birth Required")
        return
    };
    console.log(date)
    var d = new Date(date);
    var d2 = new Date(date);
      d.setHours(0, 0, 0, 0);
      d2.setHours(23);
      console.log(d.toISOString())
      console.log(d2.toISOString())
    const respons = await fetch(url + 'searchPatientByEmailAndDateOfBirth', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: email.value,
            d1:d.toISOString(),
            d2:d2.toISOString(),
        }),
    })
    console.log(respons)
    const data = await respons.json();
    console.log('Success:',data );
    if(data?.patients?.length){
        sessionStorage.setItem("patient", JSON.stringify(data.patients));
        window.location.href = 'resultDetails.html';
    }else{
        alert("No result found")
    }
});

const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const dates = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];

let years = [
    1912,
    1913,
    1914,
    1915,
    1916,
    1917,
    1918,
    1919,
    1920,
    1921,
    1922,
    1923,
    1924,
    1925,
    1926,
    1927,
    1928,
    1929,
    1930,
    1931,
    1932,
    1933,
    1934,
    1935,
    1936,
    1937,
    1938,
    1939,
    1940,
    1941,
    1942,
    1943,
    1944,
    1945,
    1946,
    1947,
    1948,
    1949,
    1950,
    1951,
    1952,
    1953,
    1954,
    1955,
    1956,
    1957,
    1958,
    1959,
    1960,
    1961,
    1962,
    1963,
    1964,
    1965,
    1966,
    1967,
    1968,
    1969,
    1970,
    1971,
    1972,
    1973,
    1974,
    1975,
    1976,
    1977,
    1978,
    1979,
    1980,
    1981,
    1982,
    1983,
    1984,
    1985,
    1986,
    1987,
    1988,
    1989,
    1990,
    1991,
    1992,
    1993,
    1994,
    1995,
    1996,
    1997,
    1998,
    1999,
    2000,
    2001,
    2002,
    2003,
    2004,
    2005,
    2006,
    2007,
    2008,
    2009,
    2010,
    2011,
    2012,
    2013,
    2014,
    2015,
    2016,
    2017,
    2018,
    2019,
    2020,
    2021,
    2022
].reverse()

months.forEach(element => {
    month.innerHTML += ` <option>${element}</option>`
});

dates.forEach(element => {
    day.innerHTML += ` <option>${element}</option>`
});
years.forEach(element => {
    year.innerHTML += ` <option>${element}</option>`
});