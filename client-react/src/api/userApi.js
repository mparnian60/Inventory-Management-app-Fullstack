let header = {}

export async function signupAPI(userData) {
    
    const result = await fetch('/api/users',{
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
            'Content-Type': 'application/json',
        }
    })

    const data = await result.json()
    // console.log('data', data)

    return data

}

export function setToken(token) {
    header = {     
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
}

export async function loginAPI(userData) {
    console.log('userdata', userData)

    const result = await fetch('/api/auth/login',{
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
            'Content-Type': 'application/json',
        }
    });
    // console.log('result', result)

    if(result.status >299) {
        return Promise.reject('incorrect login')
    }

    const data = await result.json()

    return data;
}