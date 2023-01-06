import { useEffect, useState } from "react";

const useToken = email => {
    const [token, setToken] = useState('')

    useEffect(() => {
        if (email) {
            fetch(`https://fashion-fiesta-store.vercel.app/jwt?email=${email}`)
                .then(Response => Response.json())
                .then(data => {
                    if (data.accessToken) {
                        localStorage.setItem('accessToken', data.accessToken)
                        setToken(data.accessToken)

                    }
                })
        }
    }, [email]);
    return [token]
}

export default useToken;