export default function authHeader() {
    const user = JSON.stringify(localStorage.getItem('TOKEN'))

    console.log('sdcdc');
    
    return { Authorization: 'Bearer ' + "dsdsdsd" }
  
    // if (user && user.access_token) {
    //   return { Authorization: 'Bearer ' + user.access_token };
    // } else {
    //   return {};
    // }
  }