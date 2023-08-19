import Link from "next/link";

const fetchAllUsers = async ()=>{
   try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    return data;
   } catch (err) {
    console.log(err)
   }
}



const Users = async () => {
const users = await fetchAllUsers();

    const listItem = {
        padding:'10px', 
        marginBottom:'10px',
        fontSize:'20px',
        fontWeight:'600',
        background:'skyblue',
        cursor:'pointer',
        color:"#000"
    }

    return (
        <div  style={{padding:'30px'}}>
            <h1>List of Users</h1>
            <ul>
                {
                    users.map(user =>(
                        <li key={user.id} style={listItem}>
                            <Link href={`users/${user.id}`} >Name: {user.name}</Link>
                        </li>
                    ))
                }
            
            </ul>
        </div>
    );
};

export default Users;