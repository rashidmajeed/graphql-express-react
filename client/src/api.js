const endpointURL = 'http://localhost:9000/graphql';

export async function fetchStudents() {
    const response = await fetch(endpointURL, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ 
        query: `{
          allStudents {
            id
            firstName
            lastName
            gender
            age
            country
            department
          }
        } `
  
    })
  });
    const responseData = await response.json();
    console.log(responseData);
    return responseData.data.allStudents;
 }