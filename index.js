function submitData(name, email) {
    fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json',
            'Accept' : 'application/json',
        },
        body: JSON.stringify({
            name: "Sam",
            email: "sam@sam.com",
        })
        .then(res => res.json())
        .then(users => console.log(users))
    })
}
