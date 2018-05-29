export async function fetchStudents() {
    const resp = await fetch('http://localhost:9000/graphql', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ query: '{ students }'})
  
    });
  
    const responsedata = await resp.json();
    console.log(responsedata);
    return responsedata.data.students;
  }