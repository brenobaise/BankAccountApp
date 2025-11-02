const account = {
    email: "dog@dogao.com",
    password: "password",
    name: "Breno Baise",
    balance: 2000.00,
    id: '1'
}

export const api = new Promise((resolve) => {
    setTimeout(() => {

        resolve(account)
    }, 3000)
})