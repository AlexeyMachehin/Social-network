import axios from 'axios';

// export async function createUserData() {
//   try {
//     const response = await axios.get(
//       `https://vkontaktedb-e3904.firebaseio.com/test.json`,
//     );
//     console.log(response);
//   } catch (error) {
//     console.error(error);
//   }
// }

export async function createUserData() {
  const databaseUrl = `https://vkontaktedb-e3904.firebaseio.com/test.json`;
  const serverKey = "eyJhbGciOiJSUzI1NiIsImtpZCI6ImI2NzE1ZTJmZjcxZDIyMjQ5ODk1MDAyMzY2ODMwNDc3Mjg2Nzg0ZTMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vdmtvbnRha3RlZGItZTM5MDQiLCJhdWQiOiJ2a29udGFrdGVkYi1lMzkwNCIsImF1dGhfdGltZSI6MTY4MzU1OTQzNiwidXNlcl9pZCI6IjlabjlybXNxbHlUWVQ5eHNvZjFNWXJ6R1FxRDMiLCJzdWIiOiI5Wm45cm1zcWx5VFlUOXhzb2YxTVlyekdRcUQzIiwiaWF0IjoxNjgzNTYzNjYxLCJleHAiOjE2ODM1NjcyNjEsImVtYWlsIjoiYUBhLnJ1IiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImFAYS5ydSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.BFalbeRQZtjwuugGkyzeIvkubKOQZe2UMPhqvFodUYff4Q14qf4POCrLSd50AUsxDRSgbJMNO9NBXYPUvBqC0cbBgXbKM0tjygQ3olnzKcuI5ROeyGanjbtRlWxpdpe8rf3gMyVgZPP-BAOlBaNZ0gwOSQk392wHyDagiaSIHhyzCOvEYSnkD7087GLco0dOhMgsM2BusF0JWy5gcrhS4nlhkYJ29Xma3XM7cZrpldWjXPNLP69-gfv3ZFqSUQ5h1j8zGKS2JxO4A_8cRPi8nD51XhLNUaLT7CpZjLstqdYMvzcTVRv6DUAiRDs_2HJFUu2upWkJuprSPCX5YxhGfw";

  const options = {
    params: {
      auth: serverKey,
    },
  };

  try {
    const response = await axios.get(databaseUrl, options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}
