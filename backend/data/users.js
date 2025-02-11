import bcrypt from 'bcryptjs'


const users=[
    {
        name:'Ecom_Admin',
        email:'ecomadmin@email.com',
        password: bcrypt.hashSync('abcdef',10),
        isAdmin:true
    },
    {
        name:"Pokemon",
        email:"pokemonadmin@gmail.com",
        password:bcrypt.hashSync('123456',10),
        isAdmin:false
    },
    {
        name:"DBZ",
        email:"DBZadmin@gmail.com",
        password:bcrypt.hashSync('895651',10),
        isAdmin:false
    }
    
]

export default users;