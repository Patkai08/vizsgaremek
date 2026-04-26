export function axiosPost(axios){
    axios.post('http://127.0.0.1:8000/api/payments', {
        card_name: this.card_name,
        card_number: this.card_number,
        expiry: this.expiry,
        cvv: this.cvv,
        amount: this.amount
    }).then(response => {
            console.log(response.data)
        }).catch(error => {
            console.log(error.response.data)
        })
}