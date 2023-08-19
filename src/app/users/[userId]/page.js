
// fetch a specific user data 
const fetchUser = async ()=>{
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/1`);
    const user = await response.json();
    return user;
}


const SingleUser = async () => {
    const user = await fetchUser();

    return (
        <div style={{padding:'30px'}}>
            <h1>Name: {user.name}</h1>
            <p style={{padding:'5px 0'}}>Email: {user.email}</p>
            <p>City: {user.address.city}</p>
        </div>
    );
};

export default SingleUser;